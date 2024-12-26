/*
  Warnings:

  - You are about to alter the column `deadline` on the `Conference` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Conference" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "abbreviation" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "deadline" DATETIME NOT NULL,
    "meetingDate" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "rank" TEXT NOT NULL
);
INSERT INTO "new_Conference" ("abbreviation", "address", "deadline", "fullName", "id", "meetingDate", "publisher", "rank", "status", "url") SELECT "abbreviation", "address", "deadline", "fullName", "id", "meetingDate", "publisher", "rank", "status", "url" FROM "Conference";
DROP TABLE "Conference";
ALTER TABLE "new_Conference" RENAME TO "Conference";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
