var axios=require('axios')
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res=>{
    const user=res.data
    for(us of user){
        console.log(us.name+" "+us.username);
    }
})
