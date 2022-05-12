formdata=[]
function RegisterUser(){
    var nam=document.getElementById("uname")
    if(nam==null|| nam==' ')
    {
        alert("Enter name");
    }
    var psw=document.getElementById("pswd")
    if(psw.length<8){
        alert("Password should have minimum 8 characters");
    }

    document.getElementById('show').innerHTML=formdata;
}
