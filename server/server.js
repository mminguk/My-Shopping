const express=require('express');
const app=express();
const path=require('path');
const cookieParser=require('cookie-parser');
const username='username';
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../build')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.get('/login',function(req,res){
    console.log();
})

app.get('/login_process',function(req,res){
    res.redirect('/');
})

app.listen(8080, function(){
    console.log('listing 8080');
})
