/*
  Warnings:

  - You are about to drop the `cargos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `colabs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `processos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "colabs" DROP CONSTRAINT "colabs_cargo_id_fkey";

-- DropForeignKey
ALTER TABLE "processos" DROP CONSTRAINT "processos_colab_id_fkey";

-- DropTable
DROP TABLE "cargos";

-- DropTable
DROP TABLE "colabs";

-- DropTable
DROP TABLE "processos";

-- CreateTable
CREATE TABLE "tbcontrollfabs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desenho" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbcontrollfabs_pkey" PRIMARY KEY ("id")
);
