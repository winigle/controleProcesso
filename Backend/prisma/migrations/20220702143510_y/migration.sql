-- AlterTable
ALTER TABLE "engs" ADD COLUMN     "status" BOOLEAN;

-- CreateTable
CREATE TABLE "pinturas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN,
    "controll_id" TEXT NOT NULL,

    CONSTRAINT "pinturas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pinturas" ADD CONSTRAINT "pinturas_controll_id_fkey" FOREIGN KEY ("controll_id") REFERENCES "tbcontrolls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
