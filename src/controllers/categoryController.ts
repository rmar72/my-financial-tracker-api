import { Request, Response } from "express";
import { CategoryService } from "../services/categoryService";

export const CategoryController = {
    async createCategory(req: Request, res: Response) {
        try {
            const { name } = req.body;
            const category = await CategoryService.createCategory(name);
            res.status(201).json(category);
        } catch (error) {
            res.status(500).json({ error: `Failed to create category. Error: ${error}` });
        }
    },

    async getAllCategories(req: Request, res: Response) {
        try {
            const categories = await CategoryService.getAllCategories();
            res.json(categories);
        } catch (error) {
            res.status(500).json({ error: "Failed to retrieve categories" });
        }
    },

    async updateCategory(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const category = await CategoryService.updateCategory(Number(id), name);
            res.json(category);
        } catch (error) {
            res.status(500).json({ error: "Failed to update category" });
        }
    },

    async deleteCategory(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await CategoryService.deleteCategory(Number(id));
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: "Failed to delete category" });
        }
    }
};
