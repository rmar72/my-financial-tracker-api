import { Request, Response } from "express";
import { SharedContributionService } from "../services/sharedContributionService";

export const SharedContributionController = {
  async create(req: Request, res: Response) {
    try {
      const { amount, date, contributor, method, expenseId } = req.body;
      const contribution = await SharedContributionService.create({
        amount,
        date: new Date(date),
        contributor,
        method,
        expenseId
      });
      res.status(201).json(contribution);
    } catch (error) {
      res.status(500).json({ error: `Failed to add contribution: ${error}` });
    }
  },

  async getByExpense(req: Request, res: Response) {
    try {
      const { expenseId } = req.params;
      const contributions = await SharedContributionService.getByExpense(Number(expenseId));
      res.json(contributions);
    } catch (error) {
      res.status(500).json({ error: `Failed to get contributions: ${error}` });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updated = await SharedContributionService.update(Number(id), req.body);
      res.json(updated);
    } catch (error) {
      res.status(500).json({ error: `Failed to update contribution: ${error}` });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await SharedContributionService.delete(Number(id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: `Failed to delete contribution: ${error}` });
    }
  }
};
