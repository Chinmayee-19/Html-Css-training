const axios= require('axios')

module.exports=function(location,callback){
    var ec=encodeURIComponent(location)
    var url= `http://api.openweathermap.org/data/2.5/weather?q=${ec}&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric`
axios.get(url)
.then((res)=>{
callback('its ' + res.data.main.temp + " in "+ res.data.name);

})
}