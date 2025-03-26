import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Financial Tracker API is runniing!")
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})