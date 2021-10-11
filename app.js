const express = require ('express');
const path = require ('path');

app = express();


app.use(express.static('public'));

app.get ('/', (req,res) => {
    res.sendFile (path.join(__dirname,"/views/home.html"));
})

app.get ('/registro', (req,res) => {
    res.sendFile (path.join(__dirname,"/views/registro.html"));
})

app.post ('/registro', (req,res) => {
    res.redirect('/');
})

app.get ('/login', (req,res) => {
    res.sendFile (path.join(__dirname,"/views/login.html"));
})

app.post ('/login', (req,res) => {
    res.redirect('/');
})


// app.listen (3030, ()=>{ console.log("Express está corriendo")})

app.listen (process.env.PORT || 3030, ()=>{ console.log("Express está corriendo")})