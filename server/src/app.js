import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

const app = express();

app.use(express.json())
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cookieParser())



import userRouter from "./routers/user.router.js"
import contactRouter from "./routers/contact.router.js"

app.use("/api/v/users",userRouter)
app.use("/api/v/contacts",contactRouter)

 export {app}