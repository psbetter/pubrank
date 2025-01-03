-- CreateTable
CREATE TABLE "Conference" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "abbreviation" TEXT NOT NULL,
    "deadline" DATETIME NOT NULL,
    "meetingDate" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "domain" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Journal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "abbreviation" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imapctFactor" REAL NOT NULL,
    "rank" INTEGER NOT NULL,
    "domain" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Banner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "show" BOOLEAN NOT NULL DEFAULT false
);
