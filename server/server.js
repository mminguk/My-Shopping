const express=require('express');
const app=express();
const path=require('path');
const session=require('express-session');
const cors=require('cors');
const bodyParser=require('body-parser');
const FileStore=require('session-file-store')(session);
const userData={
    id: 'minkook2004',
    password: '111111',
    nickname: 'guest'
};


app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure: true,
        httpOnly:true
    },
    store:new FileStore()
}))


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.get('/authcheck',function(req,res){
    const sendData={isLogin:""};
    if(req.session.is_logined){
        sendData.isLogin="True";
    }else{
        sendData.isLogin="False";
    }
    req.session.save(function(){
        res.send(sendData);
    })
})

app.post('/login_process',function(req,res){
    let post=req.body;
    let id=post.id;
    let password=post.password;
    let sendData={isLogin:""};
    if(id === userData.id && password === userData.password){
        req.session.is_logined=true;
        req.session.nickname=userData.nickname;
        req.session.save(function(){
            sendData.isLogin="True";
            req.session.save(function(){
                res.send(sendData);
            })
        });
    }else {
        req.session.save(function(){
            res.redirect("/login");
        })
    }
})

app.get('/logout',function(req,res){
    req.session.destroy(function(err){
        req.session=null;
    })
    res.redirect('/');
})

app.listen(8080, function(){
    console.log('listing 8080');
})
