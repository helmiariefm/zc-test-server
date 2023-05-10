const express = require('express')
const app = express()
const port = 3000
const {pasien} = require('./models')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/pasien-list', async (req, res) => {
    try {
        const data = await pasien.findll()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

app.post('/add-pasien', async (req, res) => {
    try {
        const {name, sex, religion, phone, address, nik} = req.body
        const addPasien = await pasien.create({name, sex, religion, phone, address, nik})
        
        res.status(201).json(addPasien)
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

app.put('/edit/:id', async (req, res) => {
    try {        
        const {id} = req.params
        const {name, sex, religion, phone, address, nik} = req.body
    
        await pasien.update(
            {name, sex, religion, phone, address, nik},
            {where: {id}}
        )

        const updatedPasien = await pasien.findOne({ where: { id } });

        res.status(200).json({message: `${updatedPasien.name} has been edited`})
    } catch (err) {
        // console.log(err)
        res.status(500).json(err)
    }
})

app.delete('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deletePasien = await pasien.findOne({where: {id}})
        
        if(deletePasien){
            await pasien.destroy({where: {id}})
            res.status(200).json({message: `${deletePasien.name} has been deleted from database`})
        }else{
            res.status(404).json({message: `Pasien Not Found`})
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

app.listen(port, () => console.log(`Running on ${port}`))