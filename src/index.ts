import express from 'express';
import expenseRoutes from "./routes/expenseRoutes";
import incomeRoutes from "./routes/incomeRoutes";
import categoryRoutes from "./routes/categoryRoutes";

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

// Routes
app.use("/expenses", expenseRoutes);
app.use("/income", incomeRoutes);
app.use("/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})