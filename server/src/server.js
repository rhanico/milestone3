const express = require( "express" )
const app = express()

// ROUTES 

app.get('/', (req, res) => {
    res.send( 'Hellow World!!' )
})


app.listen( 3000, () => {
    console.log( 'Server is running in PORT 3000' )
})