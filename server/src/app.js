import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express();

app.use(express.json())
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))



import userRouter from "./routers/user.router.js"

app.use("/api/v/users",userRouter)

 export {app}