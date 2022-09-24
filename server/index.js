const express = require('express');

const app = express()

const PORT = 5000

app.use('/api/', require('./routes/request'))

async function start(){
    try {

        app.listen(PORT, ()=>{console.log(`Server has been started on port ${PORT}...`)})
        
    } catch (error) {
        console.log('Server error: ', error.message)
        process.exit(1)
    }
}

start()