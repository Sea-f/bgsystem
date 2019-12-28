const express = require("express");

const {PORT} = require('./config.json')

let app = express();



app.listen(PORT,()=>{
    console.log(`server is runing on post: ${PORT}`)
})