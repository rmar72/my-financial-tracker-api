import express from 'express';
import expenseRoutes from "./routes/expenseRoutes";

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

// Routes
app.use("/expenses", expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})