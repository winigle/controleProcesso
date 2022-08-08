/*
  Warnings:

  - You are about to drop the column `eng` on the `tbcontrolls` table. All the data in the column will be lost.
  - You are about to drop the column `fabrica` on the `tbcontrolls` table. All the data in the column will be lost.
  - You are about to drop the column `pintura` on the `tbcontrolls` table. All the data in the column will be lost.
  - You are about to drop the column `recebimento` on the `tbcontrolls` table. All the data in the column will be lost.
  - You are about to drop the column `transporte` on the `tbcontrolls` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tbcontrolls" DROP COLUMN "eng",
DROP COLUMN "fabrica",
DROP COLUMN "pintura",
DROP COLUMN "recebimento",
DROP COLUMN "transporte";

-- CreateTable
CREATE TABLE "engs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "controll_id" TEXT NOT NULL,

    CONSTRAINT "engs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "engs" ADD CONSTRAINT "engs_controll_id_fkey" FOREIGN KEY ("controll_id") REFERENCES "tbcontrolls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
