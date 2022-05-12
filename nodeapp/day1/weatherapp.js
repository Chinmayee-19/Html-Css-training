const axios= require('axios')
var url= `http://api.openweathermap.org/data/2.5/weather?q=pune&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric`

module.exports=function(callback){
axios.get(url)
.then((res)=>{
callback('its ' + res.data.main.temp + " in "+ res.data.name);

})
}