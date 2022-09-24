const {Router} = require('express')
const router = Router()
const fs = require('fs')

function respondMockResult(result, delayMs = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result);
        }, delayMs);
    });
}

router.get('/', async(req, res) => {
    try {
        fs.readFile('./text.json', 'utf-8' , (error, data) =>{
            if(error){
                console.log(error)
                return
            }
            data = JSON.parse(data)
            console.log(data)
            respondMockResult(res.send(data))
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/', async(req, res) => {
    try {
        res.send({message: "Hello, World!"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



module.exports = router