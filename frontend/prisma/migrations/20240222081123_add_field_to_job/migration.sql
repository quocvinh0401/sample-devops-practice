/*
  Warnings:

  - Added the required column `timeMode` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TimeMode" AS ENUM ('FULL_TIME', 'PART_TIME');

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "timeMode" "TimeMode" NOT NULL;
