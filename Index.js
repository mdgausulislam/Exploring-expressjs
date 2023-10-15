// const express = require('express');
// const app = express();
// const port = 5000;

// app.get('/', (req, res) => {
//     res.send('hello my first server');
// })


// app.get('/data',(req,res)=>{
//     res.send('hello my second server');
// })
// app.listen(port,()=>{
//     console.log(`second server is running:${port}`);
// })
// app.listen(port,()=>{
//     console.log(`My first server is running:${port}`);
// })


const express=require('express');
const phones =require('./Phones.json')
const app=express();
const port=5000;

app.get('/',(req,res)=>{
    res.send('hello g is my 3rd server')
});
app.get('/phones',(req,res)=>{
    res.send(phones)
});

app.get('/phones/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    console.log('i need to data:',id);
    const phone=phones.find(phone=>phone.id===id) ||{};
    res.send(phone);
})

app.listen(port,()=>{
    console.log(`my first server is running: ${port}`);
})