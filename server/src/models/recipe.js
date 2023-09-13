const mongoose = require( "mongoose" )

const recipe = mongoose.Schema(

    {
        tile: {
            type: String,
            required: [ 
                ture, "Please provide name for the recipe"],
            trim: true,
        },
        description: {
            type: String,
            required: [
                true, "Please description your creation!"],
            trim: true,
        },
        ingredients: [
            {
                name: {
                    type: String,
                    required: true,
                    trim: true,
                },
                quantity: {
                    type: String,
                    required: true,
                    trim: true,
                },
            },
        ],
        image: {
            type: String,
            required: [
                true, "Please provide a photo"],
        },
        createdBy: {
            type: String,
            required: true,
        },
        postedDate: {
            type: Date,
            default: Date, now,
        },

    }
);

const Recipe = mongoose.model("Recipe",recipeSchema);

module.export = Recipe;