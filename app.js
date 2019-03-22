const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./routes/api');

const PORT = process.env.PORT || 3000
const app = express();
app.use("/api", api);
app.listen(PORT);

console.log(`Server is running at: http://localhost:${PORT}`);