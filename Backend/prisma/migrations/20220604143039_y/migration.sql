-- CreateTable
CREATE TABLE "equips" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "projeto_id" TEXT NOT NULL,

    CONSTRAINT "equips_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "equips" ADD CONSTRAINT "equips_projeto_id_fkey" FOREIGN KEY ("projeto_id") REFERENCES "projetos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
