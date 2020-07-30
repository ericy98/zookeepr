const express = require('express');
const app = express();

const { animals } = require('./data/animals');

function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    if (query.diet) {
        filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
        filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
        filteredResults = filteresResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
}

app.get('/api/animals', (req, res) => {
    let results = animals;
    console.log(req.query)
    res.json(animals);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});