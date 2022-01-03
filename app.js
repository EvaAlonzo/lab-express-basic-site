const express = require('express');
const app = express ();

app.use(express.static('public'));

//routes
app.get('/home', (req,res,next) => {
    res.sendFile(__dirname + '/views/home')
});
app.get('/about', (req,res,next) => {
    res.sendFile(__dirname + '/views/about')
});
app.get('/works', (req,res,next) => {
    res.sendFile(__dirname + '/views/works')
});
app.get('/gallery', (req,res,next) => {
    res.sendFile(__dirname + '/views/photoGallery')
});

app.listen(3000);
