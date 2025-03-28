import express from "express";
import { ExpenseController } from "../controllers/expenseController";

const router = express.Router();

router.post("/", ExpenseController.createExpense);
router.get("/", ExpenseController.getAllExpenses);
router.delete("/:id", ExpenseController.deleteExpense);
router.put('/:id', ExpenseController.update);

export default router;
