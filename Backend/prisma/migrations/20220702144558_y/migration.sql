-- CreateTable
CREATE TABLE "fabricas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN,
    "controll_id" TEXT NOT NULL,

    CONSTRAINT "fabricas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transportes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN,
    "controll_id" TEXT NOT NULL,

    CONSTRAINT "transportes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recebimentos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN,
    "controll_id" TEXT NOT NULL,

    CONSTRAINT "recebimentos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fabricas" ADD CONSTRAINT "fabricas_controll_id_fkey" FOREIGN KEY ("controll_id") REFERENCES "tbcontrolls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_controll_id_fkey" FOREIGN KEY ("controll_id") REFERENCES "tbcontrolls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recebimentos" ADD CONSTRAINT "recebimentos_controll_id_fkey" FOREIGN KEY ("controll_id") REFERENCES "tbcontrolls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
