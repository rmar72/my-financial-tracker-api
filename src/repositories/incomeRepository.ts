import prisma from "../config/prisma";

export const IncomeRepository = {
    async createIncome(amount: number, date: Date, source: string, userId?: number, description?: string) {
        return prisma.income.create({
            data: { amount, date, source, userId, description },
        });
    },

    async getAllIncome() {
        return prisma.income.findMany();
    },

    async getIncomeById(id: number) {
        return prisma.income.findUnique({ where: { id } });
    },

    async deleteIncome(id: number) {
        return prisma.income.delete({ where: { id } });
    }
};
