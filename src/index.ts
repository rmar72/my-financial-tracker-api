import express from 'express';
import cors from 'cors';
import expenseRoutes from "./routes/expenseRoutes";
import incomeRoutes from "./routes/incomeRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import sharedContributionRoutes from "./routes/sharedContributionRoutes";

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

// Routes
app.use("/expenses", expenseRoutes);
app.use("/shared-contributions", sharedContributionRoutes);
app.use("/income", incomeRoutes);
app.use("/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})