-- DropForeignKey
ALTER TABLE "public"."Application" DROP CONSTRAINT "Application_courseId_fkey";

-- AlterTable
ALTER TABLE "Application" ALTER COLUMN "courseId" DROP NOT NULL,
ALTER COLUMN "time" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
