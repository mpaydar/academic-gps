-- DropIndex
DROP INDEX "public"."Application_courseId_status_idx";

-- CreateIndex
CREATE INDEX "Application_courseId_idx" ON "Application"("courseId");

-- CreateIndex
CREATE INDEX "Application_status_idx" ON "Application"("status");
