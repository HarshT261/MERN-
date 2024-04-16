const express = require('express');

const app = express();

app.get('/home',(req,res) =>{
    res.send("Just the two of us");
})

app.listen(1500);