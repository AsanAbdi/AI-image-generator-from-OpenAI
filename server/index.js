import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import DallEroutes from './routes/Dall-E.js'

config()

const app = express()
app.use(cors())
app.use(express.json({limit: '50mb'}))

app.use('/api/v1/dalle', DallEroutes)

app.get('/', async (req, res) => {
    res.send('hello world')
})

const PORT = 6000

app.listen(8080, () => {
    console.log(`listening http://localhost:8080`) 
}) 