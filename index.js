const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const express = require("express");

const server = jsonServer.create();
// const app = jsonServer.create();

const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
// server.use(middlewares);
// server.use(router);

server.use("/db", middlewares, router);
server.use(express.static(path.join(__dirname, "build")));

server.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
