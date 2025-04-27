-- AlterTable
ALTER TABLE "expenses" ADD COLUMN     "isShared" BOOLEAN NOT NULL DEFAULT false;

UPDATE "expenses" SET "isShared" = false WHERE "isShared" IS NULL;

-- CreateTable
CREATE TABLE "SharedContribution" (
    "id" SERIAL NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "contributor" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "expenseId" INTEGER NOT NULL,

    CONSTRAINT "SharedContribution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SharedContribution" ADD CONSTRAINT "SharedContribution_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
