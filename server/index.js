const express = require('express');

const cors = require('cors');
const app = express()

app.use(express.json({extended: true}))
const PORT = 5000
app.use(cors());
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