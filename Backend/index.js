const http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const hostname = "127.0.0.1";
const port = 8000;

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", require("./Routes/userRoutes"));
// app.get("/:username", (req, res) => {
//   res.send(`Hey ${req.params.username}`);
// });
app.listen(port);

