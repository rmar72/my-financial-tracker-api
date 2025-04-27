import { ExpenseRepository } from "../repositories/expenseRepository";
import { ExpenseInput } from '../types/ExpenseInput'

export const ExpenseService = {
    async createExpense(amount: number, date: Date, categoryId: number, paymentId: number, userId?: number, description?: string) {
        return ExpenseRepository.createExpense(amount, date, categoryId, paymentId, userId, description);
    },

    async getAllExpenses() {
        const expenses = await ExpenseRepository.getAllExpenses();
        
        return expenses.map(exp => {
            if (exp.isShared && exp.sharedContributions.length > 0) {
                const totalContributions = exp.sharedContributions.reduce((sum, c) => sum + Number(c.amount), 0);
                const netAmount = Number(exp.amount) - totalContributions;
                return {
                    ...exp,
                    netAmount
                };
            }
        
            // If it's not shared or no contributions yet, just return expense as-is (no netAmount)
            return {
            ...exp,
            netAmount: undefined
            };
        });
    },        

    async getExpenseById(id: number) {
        const exp = await ExpenseRepository.getExpenseById(id);
    
        if (!exp) {
            return null;
        }
    
        if (exp.isShared && exp.sharedContributions.length > 0) {
            const totalContributions = exp.sharedContributions.reduce((sum, c) => sum + Number(c.amount), 0);
            const netAmount = Number(exp.amount) - totalContributions;
            return {
                ...exp,
                netAmount
            };
        }
    
        return {
            ...exp,
            netAmount: undefined
        };
    },

    async deleteExpense(id: number) {
        return ExpenseRepository.deleteExpense(id);
    },
    async updateExpense(id: number, data: Partial<ExpenseInput>) {
        return ExpenseRepository.updateExpense(id, data);
    }
};
