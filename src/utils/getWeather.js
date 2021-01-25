const request = require('request')

const getWeather = (address,callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(address)+'&appid=44635f626c9a1bc4eaac4f9ffcabeee0&units=metric'
    request({ url,json:true},(error,{body})=>{
        if(error){
            callback('unable to connect to weather servers',undefined)
        }
        else if(body.cod!=200){
            callback('Unable to find location. Try another search',undefined)
        }
        else{
            callback(undefined,{
                longitude : body.coord.lon,
                latitude : body.coord.lat
            })
        }
    })
}
// getWeather('ahmedabad',(err,data)=>{
//     console.log(data)
// })
module.exports = {
    getWeather
}