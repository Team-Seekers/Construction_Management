const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

app.get('/',(req,res)=>{
    res.send("Working...");
})

app.listen(3000,()=>{
    console.log("Server is listening");
})

