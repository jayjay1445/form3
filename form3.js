function validateform(){
    const fname= document.getElementById('fname').value;
    const uname=document.getElementById('uname').value;
    const passw1 = document.getElementById('passw1').value;
    const passw2= document.getElementById('passw2').value;

    if(fname==null||fname==""){
        alert('Fullname must be filled')
        return false
    }

    if(uname==null|| uname==""){
        alert('Enter Username')
        return false 
    }

    if(passw1<=6){
        alert('Password must be longer than 6 characters')
        return false
    }

    if (passw1===passw2)
    return true;

    else{
        alert('Passwords do not match')
    }

}
