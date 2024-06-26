import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import { connectDB } from './configs/dbConfig.js'
import authRouter from './routes/authRouter.js'

config()
connectDB()

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/auth", authRouter)

const PORT = process.env.PORT || 4444
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))