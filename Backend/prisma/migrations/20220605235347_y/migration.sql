/*
  Warnings:

  - You are about to drop the `ativid` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `equips` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projetos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ativid" DROP CONSTRAINT "ativid_equip_id_fkey";

-- DropForeignKey
ALTER TABLE "ativid" DROP CONSTRAINT "ativid_projeto_id_fkey";

-- DropForeignKey
ALTER TABLE "ativid" DROP CONSTRAINT "ativid_sub_id_fkey";

-- DropForeignKey
ALTER TABLE "equips" DROP CONSTRAINT "equips_projeto_id_fkey";

-- DropForeignKey
ALTER TABLE "subs" DROP CONSTRAINT "subs_equip_id_fkey";

-- DropForeignKey
ALTER TABLE "subs" DROP CONSTRAINT "subs_projeto_id_fkey";

-- DropTable
DROP TABLE "ativid";

-- DropTable
DROP TABLE "equips";

-- DropTable
DROP TABLE "projetos";

-- DropTable
DROP TABLE "subs";

-- CreateTable
CREATE TABLE "colabs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "funcao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "colabs_pkey" PRIMARY KEY ("id")
);
