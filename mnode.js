const { response } = require('express');
const express = require('express'); //import express
const app = express();
const port = 3500; //port
const fs = require('fs');
const Joi = require('joi');
const {createPool} = require('mysql');
const pool = createPool({

    host: "localhost",
    user: "root",
    password: "sql@8850",
    database: "cusproj",
    connectionLimit: 10
    
    });


//Files

app.use(express.static('./'));
app.use('src' , express.static(__dirname + 'src'));
app.use('app.js' , express.static(__dirname + 'app.js'));
app.use('index.html' , express.static(__dirname + 'index.html'));
app.use('style.css' , express.static(__dirname + 'style.css'));

app.get('' , (request , response)=>{

response.sendFile(__dirname + 'index.html');

});


//GET service
app.use(express.urlencoded());
app.post('/order' , (request , response , next)=>{
   
const { error } = validateService(request.body);

if(error){

response.status(400).send(error.details[0].message +
    "<br><br><br><br><br><br><br> <button onclick= 'window.history.back()'>back</button>");
    response.end();
return;
}else{
    const proj = request.body.proj;
    const mNum = '+' + request.body.cKey + request.body.number;
    const msg = 'There is some issue to be solved...\nThank you for placing your order :)'


    pool.query('INSERT INTO `projects` (`Desc`,`Num`) VALUE ("'+proj+'" , "'+mNum+'")' , (err , result , fields)=>{
   
        if(err){return console.log(err)};
        
        return console.log('done');
        
        pool.release();
        
        });

        response.redirect('src/tv3/order-success.html');
}  
    });

//Listen

app.listen(port , ()=> console.log('Listening on port ' + port));

//========================================
function validateService(order){

    const schema = {
    
    proj: Joi.string().min(3).required(),
    number: Joi.string().min(3).required(),
    cKey: Joi.string().min(1).required()
    
    };
    
    return Joi.validate(order , schema);
    
    }
//========================================