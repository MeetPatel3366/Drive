require("dotenv").config();
const { config } = require("dotenv");
const express = require("express");
const app = express();
const userRouter = require("./routes/user.routes");
const { body, validationResult } = require("express-validator");
const cookieParser=require('cookie-parser')
const connectToDB=require('./config/db')
connectToDB();

app.set("view engine", "ejs");
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
