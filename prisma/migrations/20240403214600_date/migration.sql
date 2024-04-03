-- CreateTable
CREATE TABLE "User" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "urlImage" TEXT,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Message" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "idSender" TEXT NOT NULL,
    "idReceiver" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "edited" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Message_idSender_fkey" FOREIGN KEY ("idSender") REFERENCES "User" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_idReceiver_fkey" FOREIGN KEY ("idReceiver") REFERENCES "User" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
