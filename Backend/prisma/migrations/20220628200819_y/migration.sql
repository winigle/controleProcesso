/*
  Warnings:

  - Added the required column `desenho` to the `cargos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cargos" ADD COLUMN     "desenho" TEXT NOT NULL;
