import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express();

app.use(express.json())
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

//import apiPostRouter from "./routers/postMessage.router.js"
import apiUserRouter from "./routers/user.router.js"

app.use("/api/v/user",apiUserRouter)

 export {app}