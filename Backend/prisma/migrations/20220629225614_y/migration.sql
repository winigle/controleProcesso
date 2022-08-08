/*
  Warnings:

  - You are about to drop the `tbfabricacaos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `eng` to the `tbcontrolls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fabrica` to the `tbcontrolls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pintura` to the `tbcontrolls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recebimento` to the `tbcontrolls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transporte` to the `tbcontrolls` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tbfabricacaos" DROP CONSTRAINT "tbfabricacaos_controll_id_fkey";

-- AlterTable
ALTER TABLE "tbcontrolls" ADD COLUMN     "eng" TEXT NOT NULL,
ADD COLUMN     "fabrica" TEXT NOT NULL,
ADD COLUMN     "pintura" TEXT NOT NULL,
ADD COLUMN     "recebimento" TEXT NOT NULL,
ADD COLUMN     "transporte" TEXT NOT NULL;

-- DropTable
DROP TABLE "tbfabricacaos";
