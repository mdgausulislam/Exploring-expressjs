const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello my first server');
})


app.get('/data',(req,res)=>{
    res.send('hello my second server');
})
app.listen(port,()=>{
    console.log(`second server is running:${port}`);
})
app.listen(port,()=>{
    console.log(`My first server is running:${port}`);
})