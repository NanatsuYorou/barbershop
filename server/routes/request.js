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

router.post('/', async(req, res) => {
    console.log(req.body)
    setTimeout(()=>{
        try {
            fs.readFile('./text.json', 'utf-8' , (error, data) =>{
                if(error){
                    console.log(error)
                    return
                }
                data = JSON.parse(data)
                let filters = req.body
                let array = []
                if(filters.filter_manufacturers.length !== 0)
                    array = data.filter((item)=>{
                        if(filters.filter_manufacturers.includes(item.manufacturer) && filters.filter_group == item.group){
                            return item
                        } else if(filters.filter_manufacturers.includes(item.manufacturer) && filters.filter_group == '') {
                            return item
                        }
                    })
                else
                    array = data.filter((item) => {
                        if(item.catalog_page == filters.catalog_page)
                            return item
                    })
    
                console.log(array)
                respondMockResult(res.send(array), 5000)
            })
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }, 500)
    
})

module.exports = router