const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./handlers/error');

const PORT = 8081;
app.use(cors());
app.use(bodyParser.json());


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