const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://admin1:admin1@blog-app.xz2xn.mongodb.net/blog-app?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });

const db = mongoose.connection;

module.exports = db;