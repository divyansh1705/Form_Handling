import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
var Name = "";

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
});

app.post("/submit", (req, res) => {
    Name = req.body["fname"] + " " + req.body["lname"];
    res.send(`<h2>Your name is ${Name}. Your email address is ${req.body.email}. Your password is ${req.body.password}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
