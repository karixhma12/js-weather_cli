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


async function getWeather(){
    try{
        const city = await readFilePromisified("config.txt");
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
        const result = await response.json();
        if(!result.results){
            throw new Error("City not found!");
        }
        else{
            const City = result.results[0];
            const lat = City.latitude;
            const lon = City.longitude;
            const newResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
            const newResult = await newResponse.json();
            const weather = newResult.current_weather;
            const output = `City: ${city}\nTemperature: ${weather.temperature}°C\nWindspeed: ${weather.windspeed} km/h`;
            await writeFilePromisified("output.txt",output);
            console.log("Weather saved to output.txt!");
        }
    }
    catch(err){
        console.log("Something went wrong : " + err);
    }
}

getWeather();


function writeFilePromisified(fileName,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(fileName,data,(err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve("success!")
            }
        });

    })
}
