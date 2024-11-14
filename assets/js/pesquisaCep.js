function validaCep(){
    const cep = document.getElementById("inputCep").value.trim()

    if(cep == ""){
        alert("Campo CEP não preenchido")
    }else if (cep.length != 8){
        alert("CEP digitado Inválido")
    }else{
        viaCep(cep)
    }
}
function viaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(response => {
        document.getElementById('logradouro').value = response.logradouro
        document.getElementById('bairro').value = response.bairro
        document.getElementById('cidade').value = response.localidade
        document.getElementById('estado').value = response.uf
    })
}