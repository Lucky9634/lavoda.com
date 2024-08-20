const cookieParser = require('cookie-parser')
const express = require('express')
const dotenv = require("dotenv")
const dbConnect = require("./config/dbConnect")
const userRouter = require("./routes/userRouter")
const adminRouter = require('./routes/adminRouter')
const rootRouter = require("./routes/index")
const expressSession = require("express-session")
const flash = require("connect-flash")
const path = require("path")
const app = express()
const port = 3000

//set data base connection
dbConnect()

// set middlewares
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())
app.set("view engine", 'ejs')

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.FLASH_MESSAGE_KEY
}))
app.use(flash())

// set up to riutes

app.use("/", rootRouter)
app.use("/user", userRouter)
app.use("/admin", adminRouter)



app.listen(port, (err) => {
    console.log(`Your Port Is Running..! & http://localhost:${port}/`)
})