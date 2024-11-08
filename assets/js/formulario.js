let generos = document.getElementsByName("generos")
let btnVer = document.getElementById("btnVer")
let senha1 = document.getElementById("inputSenha1")
let senha2 = document.getElementById("inputSenha2")

function abrirOutros(){
    let inputOutros = document.getElementById("inputOutros")
    if (generos[2].checked){
        inputOutros.disabled = false
    }else{
        inputOutros.disabled = true
        inputOutros.value = ""
    }
}
function verSenha(){
    if (senha1.type == "password" || senha2.type == "password"){
        senha1.type = "text"
        senha2.type = "text"
        btnVer.textContent = "Desver"
    }else{
        senha1.type = 'password'
        senha2.type = "password"
        btnVer.textContent = "Ver"
    }
}

function comparePassword(){
    let pErro = document.getElementById("erroSenha")

    if (senha1.value != senha2.value && senha2.value != ""){
        //pErro.innerHTML =  pErro.innerHTML + " As senhas não conferem"
        pErro.innerHTML += " As senhas não conferem"
        senha1.classList.add("erroSenha")
        senha2.classList.add("erroSenha")
    }else{
        pErro.innerHTML=""
        senha1.classList.remove("erroSenha")
        senha2.classList.remove("erroSenha")
        if (senha1.value.length >6 || senha2.value.length >6) {
            pErro.innerHTML += " As senhas possuem mais de 6 caracteres"
        }else{
            pErro.innerHTML = ""
        }
    }
}
senha1.addEventListener("input", comparePassword)
senha2.addEventListener("input", comparePassword)
btnVer.addEventListener("click", verSenha)

generos.forEach(genero => {
    genero.addEventListener("input",abrirOutros)
})

// soma+= numero 
// soma = soma + numero
