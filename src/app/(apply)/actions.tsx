/* eslint-disable @typescript-eslint/no-explicit-any */

// app/(apply)/actions.ts
'use server';

import { PrismaClient } from '@prisma/client';
import sgMail from '@sendgrid/mail';

const prisma = new PrismaClient();

export async function submitApplication(_prev: any, formData: FormData) {
  // honeypot: if this field is filled, it's a bot
  if (formData.get("company")) return { ok: true };

  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!fullName) throw new Error("Full name is required");
  if (!email) throw new Error("Email is required");

  try {
    // Check if an applicant with this email already exists
    const existingApplicant = await prisma.applicant.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingApplicant) {
      return { success: false, message: "This email address is already in use." };
    }

    // Not found; create new applicant
    const applicant = await prisma.applicant.create({ data: { fullName, email }});

    // Prepare application data
    const data: any = {
      fullName,
      email,
      exp:        String(formData.get("exp") ?? "beginner"),
      motivation: String(formData.get("motivation") ?? ""),
      time:       String(formData.get("time") ?? ""),
      terms:      formData.get("terms") === "on",
      linkedin:   formData.get("linkedin")?.toString() || null,
      github:     formData.get("github")?.toString()   || null,
      resume:     formData.get("resume")?.toString()   || null,
      scholarship:formData.get("scholarship")?.toString() || null,
      applicant:  { connect: { id: applicant.id } },
    };

    // Create new application associated with the applicant
    await prisma.application.create({ data });

    // Sendgrid setup and mail sending
    try {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')
      const msg = {
        to: email,
        from: 'admissions@simbayai.com',
        subject: 'Application received',
        text: 'Thanks for applying to the Simba AI Cohort. We will review your application and get back to you soon.',
        html: '<strong>Thanks for applying to the Simba AI Cohort. Once we reviewed your application, a temporary password will be sent to your email. You will be able to login with the password and set a new password and access the cohort dashboard.</strong>',
      }
      await sgMail.send(msg);
    } catch (mailErr) {
      // Email errors should not block applicant creation, just log
      console.error('Sendgrid error:', mailErr);
    }

    return {
      success: true,
      message: "Successfully created applicant. A confirmation email will be sent to your email."
    };

  } catch (error: any) {
    // Catch-all error
    console.error('Application submission error:', error);
    return {
      success: false,
      message:
        "An unexpected error occurred. Please try again later or contact support.",
    };
  }
}
