/*
  Warnings:

  - You are about to drop the `atividades` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "atividades" DROP CONSTRAINT "atividades_equip_id_fkey";

-- DropForeignKey
ALTER TABLE "atividades" DROP CONSTRAINT "atividades_projeto_id_fkey";

-- DropForeignKey
ALTER TABLE "atividades" DROP CONSTRAINT "atividades_sub_id_fkey";

-- DropTable
DROP TABLE "atividades";

-- CreateTable
CREATE TABLE "ativid" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "termino" TIMESTAMP(3) NOT NULL,
    "resp" TEXT NOT NULL,
    "avanco" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "equip_id" TEXT NOT NULL,
    "projeto_id" TEXT NOT NULL,
    "sub_id" TEXT NOT NULL,

    CONSTRAINT "ativid_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ativid" ADD CONSTRAINT "ativid_projeto_id_fkey" FOREIGN KEY ("projeto_id") REFERENCES "projetos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ativid" ADD CONSTRAINT "ativid_equip_id_fkey" FOREIGN KEY ("equip_id") REFERENCES "equips"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ativid" ADD CONSTRAINT "ativid_sub_id_fkey" FOREIGN KEY ("sub_id") REFERENCES "subs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
