const express = require( "express" )
const mongoose = require( "mongoose" )
const app = express()

// ROUTES 

app.get('/', (req, res) => {
    res.send( 'Hellow Again World!!' )
})


app.listen( 3000, () => {
    console.log( 'Server is running in PORT 3000' )
})

                                    // MONGODB( DATABASE ) CONNECTIVITY
mongoose.set("strictQuery",false)
mongoose.connect(
    "mongodb+srv://rhanico:zT49hzdzgSS1XqDI@cluster1.bfsurib.mongodb.net/thekitchen?retryWrites=true&w=majority")
    .then(() => {
        console.log('CONNECTED TO KITCHEN DATABASE')
    }).catch( (error) => {
        console.log(error)
    })