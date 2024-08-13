const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api' , (req,res)=>{
    res.json({message:'Hello Server'});
});

app.listen(PORT, ()=>{
    console.log('server is running');
})