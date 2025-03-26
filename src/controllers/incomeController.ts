import { Request, Response } from "express";
import { IncomeService } from "../services/incomeService";

export const IncomeController = {
    async createIncome(req: Request, res: Response) {
        try {
            const { amount, date, source, userId, description } = req.body;
            const income = await IncomeService.createIncome(amount, new Date(date), source, userId, description);
            res.status(201).json(income);
        } catch (error) {
            console.error("Create Income Error:", error);
            res.status(500).json({ error: error });
        }
    },

    async getAllIncome(req: Request, res: Response) {
        try {
            const income = await IncomeService.getAllIncome();
            res.json(income);
        } catch (error) {
            res.status(500).json({ error: "Failed to retrieve income" });
        }
    },

    async deleteIncome(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await IncomeService.deleteIncome(Number(id));
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: "Failed to delete income" });
        }
    }
};
