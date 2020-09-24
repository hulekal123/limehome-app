const express = require('express');
const  cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 6000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/properties', (req, res) => {

    var apiKey = req.query.apiKey;
    var lat = req.query.lat;
    var long = req.query.long;

    console.log(apiKey);

    fetch('https://places.ls.hereapi.com/places/v1/autosuggest?at=' + lat + ',' +
    long + '&q=Hotel&apiKey='+ apiKey)
    .then(res => res.json())
    .then((data) => {
        console.log(data.results);
        const results = data.results;
        res.json({ results });
    })
   
});




app.listen(port, () => console.log(`Listening on port ${port}`));