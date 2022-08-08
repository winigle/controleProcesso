/*
  Warnings:

  - Made the column `vencimento` on table `processos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "processos" ALTER COLUMN "vencimento" SET NOT NULL,
ALTER COLUMN "vencimento" SET DATA TYPE TEXT;
