const getBlogs=(cbapp)=>{
    setTimeout(()=>{
        cbapp({
            uname:'admin'
        })

    },2000);
}
getBlogs((bp)=>{
    console.log(bp.uname)
})