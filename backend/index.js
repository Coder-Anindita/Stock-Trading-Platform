import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes.js";
import { Holdings } from "./models/holdings.model.js";
import { Positions } from "./models/Positions.js";
import { Orders } from "./models/Orders.model.js";

const app = express();

// 1️⃣ CORS (must be before routes)
app.use(
  cors({
    origin: true, // allow all origins
    credentials: true,
  })
);

// 2️⃣ Parse JSON body (must be before routes)
app.use(express.json());

// 3️⃣ Parse cookies
app.use(cookieParser());

// 4️⃣ Routes
app.use("/api/auth", authRoutes);

// 5️⃣ Other example routes
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await Holdings.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await Positions.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const newOrder = new Orders({ name, qty, price, mode });
  await newOrder.save();
  res.json({ message: "Order saved successfully" });
});

// 6️⃣ Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("Error connecting to database:", err);
    throw err;
  }
};

// 7️⃣ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
  connectDB();
});


