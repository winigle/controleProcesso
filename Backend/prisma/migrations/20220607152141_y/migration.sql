/*
  Warnings:

  - You are about to drop the `exames` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "exames" DROP CONSTRAINT "exames_colab_id_fkey";

-- DropTable
DROP TABLE "exames";

-- CreateTable
CREATE TABLE "processos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "vencimento" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "colab_id" TEXT NOT NULL,

    CONSTRAINT "processos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "processos" ADD CONSTRAINT "processos_colab_id_fkey" FOREIGN KEY ("colab_id") REFERENCES "colabs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
