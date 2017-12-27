/**
 * Created by HP on 20-Dec-17.
 */
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');

// DB Setup
mongoose.connect('mongodb://localhost:auth/eventfinder');

// App Setup
app.use(morgan('combined'));
app.use(cors()); // prevents browser from trowing CORS errors on ajax requests
app.use(bodyParser.json({type : '*/*'}));
router(app);

// Server setup
const port = process.env.PORT || 3030;
const server = http.createServer(app);
server.listen(port);
console.log('Server is listening on port', port);