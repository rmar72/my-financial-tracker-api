import prisma from "../config/prisma";
import { ExpenseInput } from '../types/ExpenseInput'

export const ExpenseRepository = {
    async createExpense(amount: number, date: Date, categoryId: number, paymentId: number, userId?: number, description?: string) {
        return prisma.expense.create({
            data: { amount, date, categoryId, paymentId, userId, description },
        });
    },

    async getAllExpenses() {
        return prisma.expense.findMany({
            select: {
                id: true,
                amount: true,
                date: true,
                description: true,
                isShared: true,
                categoryId: true,
                paymentId: true,
                userId: true,
                category: true,
                payment: true,
                sharedContributions: true
            }
        });
    },

    async getExpenseById(id: number) {
        return prisma.expense.findUnique({
          where: { id },
          include: {
            category: true,
            payment: true,
            sharedContributions: true
          }
        });
    },

    async deleteExpense(id: number) {
        return prisma.expense.delete({ where: { id } });
    },

    async updateExpense(id: number, data: Partial<ExpenseInput>) {
        return prisma.expense.update({
          where: { id },
          data
        });
    }
};
