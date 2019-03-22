const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
config = require('./config/databse');
const api = require('./routes/api');

const PORT = process.env.PORT || 3000
const app = express();

// Connect mongoose to our database
mongoose.connect(config.uri, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('Unable to connect to database', err)
    } else {
        console.log('Connected to database ' + config.db + ` at ${config.uri}`);
    }
});

// Middleware 
app.use(cors({ orgin: 'http//localhost:4200' }))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/api", api);
app.listen(PORT);

console.log(`Server is running at: http://localhost:${PORT}`);