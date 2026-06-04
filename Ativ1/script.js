const senha = document.getElementById("senha");
const mensagemSenhaInfo = document.getElementById("senha-info");
const checkbox = document.getElementById("checkbox");
const infoSouEstudante = document.getElementById("info-souEstudante");
const mostrarSenhaBtn = document.getElementById("mostrarSenha");

mostrarSenhaBtn.addEventListener("click", mostrarSenha);
senha.addEventListener("input", mensagemSenha);
checkbox.addEventListener("change", checkboxInfo);


function mensagemSenha(){
    mensagemSenhaInfo.textContent = "";
    senha.style.border = "";
    if(senha.value.length === 0){
    mensagemSenhaInfo.textContent = "";
    senha.style.border = "";
    }
    else{
    if(senha.value.length < 8){
        let aviso = document.createElement("p");
        aviso.style.color = "red";
        senha.style.border = "2px solid red";
        senha.style.outline = "none";
        senha.style.borderColor = "red";
        aviso.textContent = "A senha deve conter no mínimo 8 caracteres.";
        mensagemSenhaInfo.appendChild(aviso);
    }else{
        let aviso = document.createElement("p");
        aviso.style.color = "green";
        aviso.textContent = "Senha válida!";
        mensagemSenhaInfo.appendChild(aviso);
    }
}
}

function checkboxInfo(){
    if(checkbox.checked){
        infoSouEstudante.style.display = "block";
    }
    else{
        infoSouEstudante.style.display = "none";
    }
}

function mostrarSenha(){
    if(senha.type === "password"){
        senha.type = "text";
    }
    else{
        senha.type = "password";
    }
}