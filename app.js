const express = require('express')
const app = express()
const port = 3000
const {pasien} = require('./models')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/pasien-list', async (req, res) => {
    try {
        const data = await pasien.findAll()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

app.get('/pasien-detail/:id', async (req, res) => {
    const {id} = req.params

    try {
        const getPasienById = await pasien.findByPk(id)
        if(getPasienById){
            res.status(200).json(getPasienById)
        }else{
            res.status(404).json({message: 'Pasien Not Found'})
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

app.listen(port, () => console.log(`Running on ${port}`))