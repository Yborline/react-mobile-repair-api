const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const {
  brandRouter,
  authRouter,
  repairRouter,
  storageRepair,
  // adminRouter,
} = require("./routes/api");

// const DB_HOST = require("./config")

require("dotenv").config();
// require("dotenv").config({
//   path: "./controllers/clothes/add.js",
// });

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
// app.use("/api/admin", adminRouter);
app.use("/api/brand", brandRouter);
app.use("/api/action", repairRouter);
app.use("/api/storage", storageRepair);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;

// TXUmrq5PJOs0goqq;
