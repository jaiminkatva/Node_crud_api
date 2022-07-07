const express = require('express')
const cors = require('cors')


const app = express()
require("./models")

const studRouter = require("./routes/studRouter");
const empRouter = require("./routes/empRouter");


// middleware
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// routers

app.use("/", studRouter);
app.use("/employee/", empRouter);

//port

const PORT = process.env.PORT || 4000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})