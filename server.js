const express = require("express");
const PORT = 3001;
const app = express();
const uuid = require('./public/assets/js/uuid');
const posts = require('./public/assets/js/post')
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

//Renders our landing
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//Changes the html to /notes
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

app.get("/notes", (req, res) => {
  res.status(200).json(db);
});


app.get('api/posts/:id', (req,res) => {
  const { id } = req.params; 

  if(!iv) {
    return res.status(400).send('Id not found');
  }

  console.info(`${req.method} request recieved to get one post`);
  

})

//POST request to add a new note
app.post("api/posts", (req, res) => {
  console.info(`${req.method} request recieved to add note`);

  //Destructuring an object
  const { title, text } = req.body;

  if (title && text) {
    //Variable for the object we will save
    const newPost = {
      title,
      text,
      id: uuid(),

    };

    const response = {
      status: "New Note posted",
      body: newPost,
    };

    console.log(response);
    res.status(200).json(response);
  } else {
    res.status(500).json("Error in posting note");
  }
});

app.post


app.listen(PORT, () => {
  console.log(`app listening for http://localhost:${PORT}`);
});
