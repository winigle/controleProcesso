/*
  Warnings:

  - Added the required column `matricula` to the `colabs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "colabs" ADD COLUMN     "matricula" TEXT NOT NULL;
