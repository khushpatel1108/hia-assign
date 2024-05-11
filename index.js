const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const PORT = process.env.PORT || 4000;


const crudroutes = require("./routes/crud");



const database = require("./connection/db");

const dotenv = require("dotenv");
dotenv.config();



database.connect();



// Middleware setup
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/crud" , crudroutes);


app.get("/" , (req,res) => {

    return res.json({
        success : true,
        message : "App is running and up"
    })

})


app.listen(PORT , () => {
     console.log(`App is running on ${PORT}`)
})