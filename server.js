const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const passport = require('passport');

const character = require('./routes/api/character');
const user = require('./routes/api/user')

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// DB config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Passport config
require('./config/passport')(passport)

// Routers
app.use('/api/character', character);
app.use('/api/user', user);

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server is listening on port ${port}`));