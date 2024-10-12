/*
  Warnings:

  - The primary key for the `Website` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[url]` on the table `Website` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Website" DROP CONSTRAINT "Website_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Website_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Website_url_key" ON "Website"("url");
