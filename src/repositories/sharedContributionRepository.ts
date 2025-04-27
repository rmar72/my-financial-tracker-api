import prisma from "../config/prisma";

export const SharedContributionRepository = {
  async create(data: {
    amount: number;
    date: Date;
    contributor: string;
    method: string;
    expenseId: number;
  }) {
    return prisma.sharedContribution.create({ data });
  },

  async getByExpense(expenseId: number) {
    return prisma.sharedContribution.findMany({
      where: { expenseId }
    });
  },

  async update(id: number, data: Partial<{
    amount: number;
    date: Date;
    contributor: string;
    method: string;
  }>) {
    return prisma.sharedContribution.update({
      where: { id },
      data
    });
  },

  async delete(id: number) {
    return prisma.sharedContribution.delete({ where: { id } });
  }
};
