const noteRoute = require('express').Router();
const { readAndAppend, readFromFile } = require('../js/helper');

//GET route for retrieving all of the notes
noteRoute.get('/',  (req, res) => 
    readFromFile('./db/posts.json').then((data) => res.json(JSON.parse(data)))
);

noteRoute.post('/', (req, res) => {
    console.log(req.body);

    const { title, text,} = req.body;

    if (req.body) {

        const newNote = {
            title, 
            text,
        };

        readAndAppend(newNote, './db/posts.json');

        const response = {
            status: 'succes',
            body: newNote, 
        };

        res.json(response);
    }   else {
        res.json('Error in posting notes');
    }


});

module.exports = noteRoute; 