import { ExpenseRepository } from "../repositories/expenseRepository";

export const ExpenseService = {
    async createExpense(amount: number, date: Date, categoryId: number, paymentId: number, userId?: number, description?: string) {
        return ExpenseRepository.createExpense(amount, date, categoryId, paymentId, userId, description);
    },

    async getAllExpenses() {
        return ExpenseRepository.getAllExpenses();
    },

    async getExpenseById(id: number) {
        return ExpenseRepository.getExpenseById(id);
    },

    async deleteExpense(id: number) {
        return ExpenseRepository.deleteExpense(id);
    }
};
