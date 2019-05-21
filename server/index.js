require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const PORT = 8081;
//var Promise = require('promise');


app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

// all my routes come here - they will come later 

app.use(function(req,res,next){
    let err = new Error("Not Found");
    //var a = console.log("Hiiiiiii")
    err.status = 404;
    next(err);
});
app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`Server is Listening on ${PORT}`)
})