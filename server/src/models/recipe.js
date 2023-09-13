const mongoose = require( "mongoose" )

const recipeSchema = mongoose.Schema(

    {
        name: {
            type: String,
            required: [ 
                ture, "Please provide name for the Recipe"
            ]
        },
        

    }
)