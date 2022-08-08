/*
  Warnings:

  - You are about to drop the column `dataTriagem` on the `controlls` table. All the data in the column will be lost.
  - Added the required column `descClinico` to the `controlls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descCracha` to the `controlls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descExame` to the `controlls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descNr33` to the `controlls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descNr35` to the `controlls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "controlls" DROP COLUMN "dataTriagem",
ADD COLUMN     "descClinico" TEXT NOT NULL,
ADD COLUMN     "descCracha" TEXT NOT NULL,
ADD COLUMN     "descExame" TEXT NOT NULL,
ADD COLUMN     "descNr33" TEXT NOT NULL,
ADD COLUMN     "descNr35" TEXT NOT NULL;
