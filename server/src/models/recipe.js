const mongoose = require( "mongoose" )

const recipeSchema = mongoose.Schema(

    {
        title: {
            type: String,
            required: [ 
                true, "Please provide name for the recipe"],
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
        createdOn: {
            type: Date,
            default: Date.now,
        },

    },
);

const Recipe = mongoose.model("Recipe",recipeSchema);

module.exports = Recipe;