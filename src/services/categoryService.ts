import { CategoryRepository } from "../repositories/categoryRepository";

export const CategoryService = {
    async createCategory(name: string) {
        return CategoryRepository.createCategory(name);
    },

    async getAllCategories() {
        return CategoryRepository.getAllCategories();
    },

    async updateCategory(id: number, name: string) {
        return CategoryRepository.updateCategory(id, name);
    },

    async deleteCategory(id: number) {
        return CategoryRepository.deleteCategory(id);
    }
};
