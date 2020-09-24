require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const bookingSchema = require('./models/booking');
const fetch = require('node-fetch');
 
//Server connection
const app = express();
const port = process.env.PORT || 3080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Listening on port ${port}`));


//check mongo connection
if(process.env.NODE_ENV !== 'production') {
    var url = "mongodb://localhost:27017/";
    mongoose.connect(url, { useNewUrlParser: true });
}

// production settings
if(process.env.NODE_ENV === 'production') {
    console.log(`Production mode detected: Serving react-ui`)
    const path = require('path')

    const buildDir = path.join(__dirname, '../client/build')

    app.use(express.static(buildDir))

    app.get('/', (req, res) => {
        res.sendFile(path.join(buildDir, 'index.html'))
    })

    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/limehome-app');
}

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


app.get('/api/properties', (req, res) => {

    let apiKey = req.query.apiKey;
    let lat = req.query.lat;
    let long = req.query.long;

    fetch('https://places.ls.hereapi.com/places/v1/autosuggest?at=' + lat + ',' +
    long + '&q=Hotel&apiKey='+ apiKey)
    .then(res => res.json())
    .then((data) => {
        const results = data.results;
        res.json({ results });
    })
});


app.post('/api/bookings', (req, res) => {
 
    let booking = new bookingSchema({
        username: req.body.username,
        date: req.body.date,
        propertyId: req.body.propertyId,
        title: req.body.title
    });
  
    booking.save().then(booking => {
        res.status(200).json(booking);
    })
    .catch(err => {
        res.status(400).send("Update not possible");
    });

});



app.get('/api/:property_id/bookings', (req, res) => {

    var property_id = req.params.property_id;
    
    bookingSchema.find({ 'propertyId': property_id}, function(err, data) {
        res.json({ data });
    });

});