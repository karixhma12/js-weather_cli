const fs = require("fs");

/*fs.readFile("config.txt","utf-8",callback);
function callback(err,data){
    if(data){
        console.log(data);
    }
    else{
        console.log(err);
    }
}*/


function readFilePromisified(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,"utf-8",(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
};

readFilePromisified("config.txt")
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})