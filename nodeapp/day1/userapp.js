
var request= require('request')
var appurl='https://jsonplaceholder.typicode.com/users'
request({
    url:appurl,
    json:true
},function(error,response,body){
    if(error){
        console.log('unable to load users');
    }else{
        console.log(body);
    }
})