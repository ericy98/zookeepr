  
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse string/array data
app.use(express.urlencoded({ extended: true }));

// parse JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// middleware instruct server to make public folder avaliable (HTML/CSS/JS)
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});

// link https://quiet-wildwood-89030.herokuapp.com/api/animals