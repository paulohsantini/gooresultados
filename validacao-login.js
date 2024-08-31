function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "leandro" && senha =="leandro#@!"){
        alert("Bem-vindo Adm");
        location.href="index-adm.html";
    }else{
       alert("Email e Senha incorretos")
    }
}


console.log(login)