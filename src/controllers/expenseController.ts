import { Request, Response } from "express";
import { ExpenseService } from "../services/expenseService";

export const ExpenseController = {
    async createExpense(req: Request, res: Response) {
        try {
            const { amount, date, categoryId, paymentId, userId, description } = req.body;
            const expense = await ExpenseService.createExpense(amount, new Date(date), categoryId, paymentId, userId, description);
            res.status(201).json(expense);
        } catch (error) {
            res.status(500).json({ error: `Failed to create expense. Error ${error}` });
        }
    },

    async getAllExpenses(req: Request, res: Response) {
        try {
            const expenses = await ExpenseService.getAllExpenses();
            res.json(expenses);
        } catch (error) {
            res.status(500).json({ error: "Failed to retrieve expenses" });
        }
    },

    async deleteExpense(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await ExpenseService.deleteExpense(Number(id));
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: "Failed to delete expense" });
        }
    },

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const { amount, date, categoryId, paymentId, userId, description, isShared } = req.body;
    
        try {
          const updated = await ExpenseService.updateExpense(id, {
            ...(amount !== undefined && { amount }),
            ...(date && { date }),
            ...(categoryId && { categoryId }),
            ...(paymentId && { paymentId }),
            ...(userId !== undefined && { userId }),
            ...(description !== undefined && { description }),
            ...(isShared !== undefined && { isShared })
          });
    
          res.json(updated);
        } catch (err) {
          console.error('Failed to update expense', err);
          res.status(500).json({ error: 'Failed to update expense' });
        }
    }
};
