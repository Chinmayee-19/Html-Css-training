var weather=require('./weatherapp.js')
var loca=require('./location.js')
var argv=require('yargs')
.option('location',{
    type:'string'
}).help('help')
.argv

weather(argv.location,function(callback){
    console.log(callback);
})
loca(function(callback){
    console.log(callback);
})