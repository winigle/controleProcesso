/*
  Warnings:

  - You are about to drop the `tbcontrollfabs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tbcontrollfabs";

-- CreateTable
CREATE TABLE "tbcontrolls" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desenho" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "fab_id" TEXT NOT NULL,

    CONSTRAINT "tbcontrolls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbfabricacaos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "detalhes" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbfabricacaos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbcontrolls" ADD CONSTRAINT "tbcontrolls_fab_id_fkey" FOREIGN KEY ("fab_id") REFERENCES "tbfabricacaos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
