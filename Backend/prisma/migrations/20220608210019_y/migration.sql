/*
  Warnings:

  - Added the required column `cargo_id` to the `colabs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "colabs" ADD COLUMN     "cargo_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "cargos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cargos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "colabs" ADD CONSTRAINT "colabs_cargo_id_fkey" FOREIGN KEY ("cargo_id") REFERENCES "cargos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
