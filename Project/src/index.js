const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "./public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  console.log(">>>> req.body : ", req.body);
  res.send("login thanh cong");
});

app.get("/signUp", (req, res) => {
  res.render("signUp");
});

app.post("/createUser", (req, res) => {
  console.log(">>>> req.body : ", req.body);
  res.send("create user thanh cong");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
