const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, { cors: "*", methods: "*" });

app.use(cors);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

server.listen(8000, () => {
  console.log("Server is running...", 8000);
});
