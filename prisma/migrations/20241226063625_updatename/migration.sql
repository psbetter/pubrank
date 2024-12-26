/*
  Warnings:

  - You are about to drop the `Jounral` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Jounral";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Journal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "abbreviation" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imapctFactor" REAL NOT NULL,
    "rank" TEXT NOT NULL
);
