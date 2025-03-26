import prisma from "../config/prisma";

export const ExpenseRepository = {
    async createExpense(amount: number, date: Date, categoryId: number, paymentId: number, userId?: number, description?: string) {
        return prisma.expense.create({
            data: { amount, date, categoryId, paymentId, userId, description },
        });
    },

    async getAllExpenses() {
        return prisma.expense.findMany({
            include: { category: true, payment: true },
        });
    },

    async getExpenseById(id: number) {
        return prisma.expense.findUnique({ where: { id } });
    },

    async deleteExpense(id: number) {
        return prisma.expense.delete({ where: { id } });
    }
};
