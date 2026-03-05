function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let error = document.getElementById("error");

if(username === "" || password === ""){
    
    error.innerHTML = "Username atau Password tidak boleh kosong.";

}else{

    window.location.href = "https://www.instagram.com/dapp._____/";

}

}
