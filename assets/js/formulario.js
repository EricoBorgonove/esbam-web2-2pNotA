let generos = document.getElementsByName("generos")
let btnVer = document.getElementById("btnVer")
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
    let senha1 = document.getElementById("inputSenha1")
    let senha2 = document.getElementById("inputSenha2")
    
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
btnVer.addEventListener("click", verSenha)

generos.forEach(genero => {
    genero.addEventListener("input",abrirOutros)
})
