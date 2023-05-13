require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const {connect, connection } = require('mongoose')

// ------------------------ MONGO CONEECTION -----------------------
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.once('open',()=>{
    console.log('connected to mongo')
})



// ------------------------ VIEW ENGINES -----------------------




// ------------------------ MIDDLEWARE -----------------------

// I.N.D.U.C.E.S



// ------------------------ LISTEN -----------------------
app.listen(PORT,() => {
    console.log(`Listening to port:${PORT}`)
})