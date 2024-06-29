const express = require("express");
const path = require("path");
const api = require("./");
const PORT = 3001;
const app = express();
//const uuid = require('./public/assets/js/uuid');
//const posts = require('./public/assets/js/post')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

//Renders our landing
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//Changes the html to /notes
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

app.get("/api/posts", (req, res) => {
  //Sends message to the client
  res.json(`${req.method} request recieved to get notes`);

  //Log our request to the terminal
  console.info(`${res.method} request recieved to get notes `);
});

app.listen(PORT, () => {
  console.log(`app listening for http://localhost:${PORT}`);
});
