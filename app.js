const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>My Node Adham</h1>');
    res.end();
});

app.listen(5000,()=>{
    console.log('App is listening on port 5000');
})
