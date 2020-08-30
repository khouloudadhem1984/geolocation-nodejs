const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>My Node Adham</h1>');
    res.end();
});

app.listen(6000,()=>{
    console.log('App is listening on port 6000');
})
