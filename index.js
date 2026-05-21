const fs = require("fs");
const fetch = require("node-fetch");

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
.then((city)=>{
    return fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
})
.then((response)=>{
    return response.json()
})
.then((geoData)=>{
    if(!geoData.results){
        throw new Error("City not found!");
    }
    const city = geoData.results[0];
    const lat = city.latitude;
    const lon = city.longitude;
    return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
})
.then(response=>{
    return response.json();
})
.then(weatherData=>{
    console.log(weatherData.current_weather);
})
.catch((err)=>{
    console.log("Something went wrong : ", err.message);
})