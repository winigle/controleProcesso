/*
  Warnings:

  - You are about to drop the `engs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fabricas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pinturas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recebimentos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbcontrolls` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transportes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "engs" DROP CONSTRAINT "engs_controll_id_fkey";

-- DropForeignKey
ALTER TABLE "fabricas" DROP CONSTRAINT "fabricas_controll_id_fkey";

-- DropForeignKey
ALTER TABLE "pinturas" DROP CONSTRAINT "pinturas_controll_id_fkey";

-- DropForeignKey
ALTER TABLE "recebimentos" DROP CONSTRAINT "recebimentos_controll_id_fkey";

-- DropForeignKey
ALTER TABLE "transportes" DROP CONSTRAINT "transportes_controll_id_fkey";

-- DropTable
DROP TABLE "engs";

-- DropTable
DROP TABLE "fabricas";

-- DropTable
DROP TABLE "pinturas";

-- DropTable
DROP TABLE "recebimentos";

-- DropTable
DROP TABLE "tbcontrolls";

-- DropTable
DROP TABLE "transportes";

-- CreateTable
CREATE TABLE "Controll" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT,
    "telefone" TEXT,

    CONSTRAINT "Controll_pkey" PRIMARY KEY ("id")
);
