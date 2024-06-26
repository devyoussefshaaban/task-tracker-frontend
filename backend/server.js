import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import { connectDB } from './configs/dbConfig.js'

config()
connectDB()

const app = express();

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4444
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))