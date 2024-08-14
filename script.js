

function login (){
let email= document.getElementById ("email").value;
let password= document.getElementById ("password").value;

    if (email=="admin@admin.com" && password=="admin") {
        alert ("login success");
        window.location="home.html";
    }

    else if (
        email=="" && password=="") {
        alert ("diketik dulu");
    }

    else {
        alert ("ko gaada");
    }

    
}