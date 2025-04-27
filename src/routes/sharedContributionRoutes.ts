import express from 'express';
import { SharedContributionController } from "../controllers/sharedContributionController";

const router = express.Router();

router.post("/", SharedContributionController.create);
router.get("/:expenseId", SharedContributionController.getByExpense);
router.put("/:id", SharedContributionController.update);
router.delete("/:id", SharedContributionController.delete);

export default router;