var weather=require('./weatherapp.js')
weather(function(callback){
    console.log(callback);
})