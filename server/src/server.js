const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();                          // Load environment variables from .env file

const app = express();

// ROUTES

app.get('/', (req, res) => {
    res.send('Hello Again World!!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running in PORT', process.env.PORT || 3000);
});

                                        // MONGODB( DATABASE ) CONNECTIVITY
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('CONNECTED TO KITCHEN DATABASE');
    })
    .catch((error) => {
        console.log(error);
    });
