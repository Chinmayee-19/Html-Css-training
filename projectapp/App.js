var bp = require('body-parser')
var express=require('express')
var _=require('underscore')
var app=express()
app.use(bp.json())

//app.use(express.static('public'))

uid=4
app.get("/",(req,res)=>{
    res.render('index.ejs')
})
var project=[
    {id:1,projectid:'A',projectname:'a1',projectmanager:'jimin',budget:'30000',location:'hyderabad'},
    {id:2,projectid:'B',projectname:'a2',projectmanager:'kim',budget:'20000',location:'banglore'},
    {id:3,projectid:'C',projectname:'a3',projectmanager:'park',budget:'40000',location:'delhi'}
]
// fro loading on chrome
app.get("/loadproject",(req,res)=>{
    res.json(project)
})
// For postman
app.post('/addproject',(req,res)=>{
    var data=req.body
    data.id=uid++;
    project.push(data)
    res.send('New project is added'+data)
})
// for finding using id
app.get('/loadproject/:id',(req,res)=>{
    var lid=parseInt(req.params.id)
   /* var mtd
    project.forEach(function(td){
        if(lid==td.id){
            mtd=td
    })*/
    var mtd=_.findWhere(project,{id:lid})
    if(mtd){
        res.json(mtd)
    }else{
        res.status(404).send()
    }
})
app.delete('/deleteproject/:id',(req,res)=>{
    var lid=parseInt(req.params.id)
    var mtd=_.findWhere(project,{id:lid})
    if(mtd){
        project=_.without(project,mtd)
        res.json(mtd)
    }else{
        res.status(404).send()
    }
})
app.listen(5000,()=>{
    console.log('server is ready');
})

