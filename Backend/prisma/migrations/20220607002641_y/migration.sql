-- CreateTable
CREATE TABLE "exames" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "colab_id" TEXT NOT NULL,

    CONSTRAINT "exames_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "exames" ADD CONSTRAINT "exames_colab_id_fkey" FOREIGN KEY ("colab_id") REFERENCES "colabs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
