import prisma from "../config/prisma";

export const CategoryRepository = {
    async createCategory(name: string) {
        return prisma.category.create({ data: { name } });
    },

    async getAllCategories() {
        return prisma.category.findMany();
    },

    async updateCategory(id: number, name: string, budgetAmount?: number) {
        return prisma.category.update({
            where: { id },
            data: { name, budgetAmount }
        });
    },

    async deleteCategory(id: number) {
        return prisma.category.update({
            where: { id },
            data: { isDeleted: true } // Soft delete
        });
    }
};
