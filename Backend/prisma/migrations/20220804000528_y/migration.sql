/*
  Warnings:

  - Added the required column `dataTriagem` to the `controlls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descTriagem` to the `controlls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "controlls" ADD COLUMN     "dataTriagem" TEXT NOT NULL,
ADD COLUMN     "descTriagem" TEXT NOT NULL;
