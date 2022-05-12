const axios=require('axios')
module.exports=function(callback){
axios.get(`https://ipinfo.io`)
.then((res)=>{
    callback(res);
})
}
