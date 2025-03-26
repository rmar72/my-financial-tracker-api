import express from "express";
import { IncomeController } from "../controllers/incomeController";

const router = express.Router();

router.post("/", IncomeController.createIncome);
router.get("/", IncomeController.getAllIncome);
router.delete("/:id", IncomeController.deleteIncome);

export default router;
