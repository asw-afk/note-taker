const express = require("express");
const path = require("path");
const api = require("./");
const noteRoute = require("./public/assets/routes/notes");
const PORT = 3001;
const app = express();
//const uuid = require('./public/assets/js/uuid');
//const posts = require('./public/assets/js/post')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(noteRoute);

app.use(express.static("public"));

//GET route for the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//GET route for the feedback page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

app.get("/api/posts", (req, res) => {
  //Sends message to the client
  req.sendFile(path.join(__dirname, "./public/notes.html"))
  
    res.json(`${req.method} request recieved to get notes`),

    //Log our request to the terminal
    console.info(`${res.method} request recieved to get notes `)
  
});

app.post('/api/posts', (req, res) => {
  res.json(`${req.method} request recieved to add a note`);

  console.info(`${req.method} request recieved to add a note`)
})

// app.get("/api/notes/:save"),
//   (req, res) => {
//     const requestedNotes = req.params.term.toLowerCase();

//     for (let i = 0; i < termData.length; i++) {
//       if (requestedNotes === termData[i].term.toLowerCase()) {
//         return res.json(termData[i]);
//       }
//     }
//   };

// app.get("*", (req, res) =>
//   res.send(`<p>We couldn't find what you were looking for :^(</p>`)
// );

app.listen(PORT, () => {
  console.log(`app listening for http://localhost:${PORT}`);
});
