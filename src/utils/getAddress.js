const request = require('request')

const getAddress = (latitude,longitude,callback)=>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+encodeURIComponent(latitude)+'&lon='+encodeURIComponent(longitude)+'&appid=44635f626c9a1bc4eaac4f9ffcabeee0&units=metric'
    request({url,json:true},(err,{body})=>{
        console.log(url)
        if(err){
            callback('Unable to connect Try again later',undefined)
        }
        else if(body.cod != 200){
            callback('Location not found try another',undefined)
        }
        else{
            callback(undefined,{
                latitude,
                longitude,
                city : body.name ,
                country_code : body.sys.country,
                temperature : body.main.temp,
                description : body.weather[0].description
            })
        }
    })
}
      
module.exports = {getAddress}