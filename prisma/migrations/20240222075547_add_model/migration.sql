/*
  Warnings:

  - You are about to drop the column `created_at` on the `CV` table. All the data in the column will be lost.
  - You are about to drop the column `full_name` on the `CV` table. All the data in the column will be lost.
  - You are about to drop the column `job_id` on the `CV` table. All the data in the column will be lost.
  - Added the required column `file` to the `CV` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `CV` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobId` to the `CV` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CV" DROP COLUMN "created_at",
DROP COLUMN "full_name",
DROP COLUMN "job_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "file" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "jobId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isRemote" BOOLEAN NOT NULL,
    "salaryRange" DOUBLE PRECISION[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "timeFrame" INTEGER NOT NULL,
    "problemDescription" TEXT NOT NULL,
    "solutionDescription" TEXT NOT NULL,
    "aboutDescription" TEXT NOT NULL,
    "aboutImage" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "exerciseCount" INTEGER NOT NULL,
    "trafficIncreaseCount" INTEGER NOT NULL,
    "clinicCount" INTEGER NOT NULL,
    "featureDescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
