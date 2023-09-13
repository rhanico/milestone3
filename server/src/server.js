const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const recipeRoutes = require("./routes/recipe");
const Recipe = require("./models/recipe");  // to recipe.js ( Schema Model )


dotenv.config();                            // Load environment variables from .env file

const app = express();                      // Middleware
app.use(express.json());
                                            // Routes
app.use("/recipe", recipeRoutes);

const port = process.env.PORT || 3000;

                                            // MONGODB( DATABASE ) CONNECTIVITY
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,               // Corrected typo here
  })
  .then(() => {
      console.log('CONNECTED TO KITCHEN DATABASE');
  })
  .catch((error) => {
      console.log(error);
  });

  app.listen(port, () => {
    console.log( 'Server is running on port 3000!');
  });


module.exports = app;
  
  
