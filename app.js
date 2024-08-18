const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const User = "./models/User.js"

app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


const allRoutes = require('./router/allRoutes');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/project2")
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

app.use(allRoutes);
