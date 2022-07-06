const express = require('express')
const cors = require('cors')


const app = express()
require("./models")

// middleware
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// routers
const router = require("./routes/studRouter");

app.use("/", router);

//port

const PORT = process.env.PORT || 4000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})