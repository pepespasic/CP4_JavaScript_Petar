/**
 * Name: Petar Spasic
 * Date: 11/29/2023
 * 
 * Define the following endpoints:
 * 1. Endpoint 1  (GET): /jokebook/categories
 *   - should respond with a plain text response
 *   - should prepend the phrase "a possible category is " to each possible category and each
 *     sentence should be on its own line.
 * 2. Endpoint 2 (GET): /jokebook/joke/:category
 *   - should respond with a JSON response
 *   - will send a random JSON response from the specified /:category
 *   - If the category is not valid, will set status 404 and respond with error message
 */
'use strict';

const express = require('express');
const app = express();

let categories = ['funnyJoke', 'lameJoke'];
let funnyJoke = [
  {
    'joke': 'Why did the student not do his homework?',
    'response': 'Because the dog ate his homework!'
  },
  {
    'joke': 'What kind of tree can you eat?',
    'response': 'A oak tree'
  },
  {
    'joke': 'Why scientists do not trust atoms?',
    'response': 'Because they make up everything'
  }
];
let lameJoke = [
  {
    'joke': 'Why do we call two cats black and white polar cats?',
    'response': 'Because they have opposite personality'
  },
  {
    'joke': 'What would the Terminator be called in his retirement?',
    'response': 'The Exterminator'
  }
];

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);

app.get('/jokebook/categories', function(req, res) {
  let funnyJoke = categories[0];
  let lameJoke = categories[1];
  res.type("text");
  res.send("a possible category is " + funnyJoke + '\n' + "a possible category is " + lameJoke + '\n'); 
});

app.get('/jokebook/joke/:category', function(req, res) {
  let category = req.params['category'];
  if(!categories.includes(category)) {
    res.status(400).send("Category not found");
  }
  else {
    if (category == 'funnyJoke') {
      res.send(funnyJoke[parseInt(Math.floor(Math.random() * 3))]);
      //res.json({"funnyJoke": funnyJoke[parseInt(Math.floor(Math.random() * 3))].joke});
    }
    if (category == 'lameJoke') {
      res.send(lameJoke[parseInt(Math.floor(Math.random() * 2))]);
      //res.json({"lameJoke": lameJoke[parseInt(Math.floor(Math.random() * 2))].joke});
    }
  }
  
});