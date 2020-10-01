import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data.js";

dotenv.config();

// connect to database
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API RUNNING");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
