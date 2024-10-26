function unirNomes(){
    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");

    // concatenação
    const nomeCompleto1 = nome.value + " " + sobrenome.value 

    const nomeCompleto2 = `${nome.value} ${sobrenome.value}`
    const frase = `Ola, ${nome.value} ${sobrenome.value}`

    document.getElementById("resultado").innerHTML = frase
    //alert(nomeCompleto2)
    /*const teste = nome.value + sobrenome.value
    alert(teste);*/
}