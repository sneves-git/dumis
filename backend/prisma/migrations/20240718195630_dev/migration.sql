-- CreateTable
CREATE TABLE "Count" (
    "id" INTEGER NOT NULL DEFAULT 0,
    "value" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Count_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Count_id_key" ON "Count"("id");
