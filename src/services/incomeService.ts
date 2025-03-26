import { IncomeRepository } from "../repositories/incomeRepository";

export const IncomeService = {
    async createIncome(amount: number, date: Date, source: string, userId?: number, description?: string) {
        return IncomeRepository.createIncome(amount, date, source, userId, description);
    },

    async getAllIncome() {
        return IncomeRepository.getAllIncome();
    },

    async getIncomeById(id: number) {
        return IncomeRepository.getIncomeById(id);
    },

    async deleteIncome(id: number) {
        return IncomeRepository.deleteIncome(id);
    }
};
