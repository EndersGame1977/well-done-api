const cors = require("cors");
const express = require("express");
const helmet = require("helmet");

const authRouter = require("../router/auth/authRouter");
const userRouter = require("../router/user/userRouter");
const pumpRouter = require("../router/pump/pumpRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/", authRouter);
server.use("/api/user", userRouter);
server.use("/api/pump", pumpRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "Fixmylife node api running" });
});
module.exports = server;
