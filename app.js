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

app.listen(port, () => console.log(`Running on ${port}`))