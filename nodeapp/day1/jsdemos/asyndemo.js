var uname=''
const getBlogs=()=>{
    setTimeout(()=>{
        return{
            uname:'admin'
        }
    },2000);
}
const bp=getBlogs()
console.log(bp.uname);