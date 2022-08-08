/*
  Warnings:

  - You are about to drop the column `dtVenExame` on the `Controll` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Controll" DROP COLUMN "dtVenExame",
ADD COLUMN     "dtExame" TEXT;
