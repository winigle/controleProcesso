/*
  Warnings:

  - You are about to drop the column `created_at` on the `tbcontrolls` table. All the data in the column will be lost.
  - You are about to drop the column `fab_id` on the `tbcontrolls` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `tbcontrolls` table. All the data in the column will be lost.
  - Added the required column `tag` to the `tbcontrolls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `controll_id` to the `tbfabricacaos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tbcontrolls" DROP CONSTRAINT "tbcontrolls_fab_id_fkey";

-- AlterTable
ALTER TABLE "tbcontrolls" DROP COLUMN "created_at",
DROP COLUMN "fab_id",
DROP COLUMN "updated_at",
ADD COLUMN     "tag" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tbfabricacaos" ADD COLUMN     "controll_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "tbfabricacaos" ADD CONSTRAINT "tbfabricacaos_controll_id_fkey" FOREIGN KEY ("controll_id") REFERENCES "tbcontrolls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
