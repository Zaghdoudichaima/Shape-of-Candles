require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require ('./config/connectDB')
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");


const port = process.env.PORT || 5000;


connectDB();

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => console.log(`server running on port ${port}`));