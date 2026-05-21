const fs = require("fs");

fs.readFile("config.txt","utf-8",callback);

function callback(err,data){
    if(data){
        console.log(data);
    }
    else{
        console.log(err);
    }
}