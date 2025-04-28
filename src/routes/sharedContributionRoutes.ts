import express from 'express';
import { SharedContributionController } from "../controllers/sharedContributionController";

const router = express.Router();

router.post("/expenses/:expenseId/shared-contributions", SharedContributionController.create);
router.get("/expenses/:expenseId/shared-contributions", SharedContributionController.getByExpense);
router.put("/shared-contributions/:id", SharedContributionController.update);
router.delete("/shared-contributions/:id", SharedContributionController.delete);

export default router;
