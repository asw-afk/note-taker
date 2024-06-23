const express = require("express");
const PORT = 3001;
// const noteApp = require("./db/db.json");

const app = express();

app.get('/index.html')

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// app.get('/api', (req, res) => res.json(termData));

//Console log to display server is running
app.listen(PORT, () => {
  console.log(`app listening for http://localhost:${PORT}`);
});
