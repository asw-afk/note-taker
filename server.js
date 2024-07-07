const express = require('express');
const path = require('path');
const {clog} = require('./public/assets/middleware/clog')
const api = require('./public/assets/routes/notes');
const PORT = process.env.PORT || 3001;
const app = express();



app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);


app.use(express.static('public'));

//GET route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

//GET route for the feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))

);



app.listen(PORT, () => {
  console.log(`app listening for http://localhost:${PORT}`);
});
