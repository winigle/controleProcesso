/*
  Warnings:

  - Added the required column `equip_id` to the `atividades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projeto_id` to the `atividades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projeto_id` to the `subs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "atividades" ADD COLUMN     "equip_id" TEXT NOT NULL,
ADD COLUMN     "projeto_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "subs" ADD COLUMN     "projeto_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "subs" ADD CONSTRAINT "subs_projeto_id_fkey" FOREIGN KEY ("projeto_id") REFERENCES "projetos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_projeto_id_fkey" FOREIGN KEY ("projeto_id") REFERENCES "projetos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_equip_id_fkey" FOREIGN KEY ("equip_id") REFERENCES "equips"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
