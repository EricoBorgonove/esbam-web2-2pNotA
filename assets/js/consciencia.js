const frasesConscienciaNegra = [
    "A Consciência Negra valoriza a cultura e história afrodescendente, combatendo o racismo estrutural e promovendo igualdade.",
    "Zumbi dos Palmares é um símbolo de resistência e luta pela liberdade e pela identidade negra no Brasil.",
    "Celebrar o Dia da Consciência Negra é refletir sobre a desigualdade e valorizar as conquistas afrodescendentes.",
    "A educação é fundamental para desconstruir preconceitos e ensinar a importância da história afro-brasileira.",
    "A luta contra o racismo estrutural é contínua e necessária para construir uma sociedade mais igualitária.",
    "A Consciência Negra reforça a necessidade de combater a exclusão social enfrentada pela população negra.",
    "A resistência negra é marcada por histórias de luta, resiliência e conquistas em diversas áreas da sociedade.",
    "O racismo estrutural perpetua desigualdades que afetam principalmente a população negra, mesmo séculos após a abolição.",
    "Valorizar a Consciência Negra é reconhecer as contribuições dos afrodescendentes na ciência, arte e cultura brasileira.",
    "A reflexão sobre o racismo é essencial para criar um ambiente social mais justo e respeitoso.",
    "A inclusão da história afro-brasileira nas escolas é um passo importante para promover a igualdade.",
    "A cultura negra é rica e influente, contribuindo para a formação da identidade brasileira.",
    "Combater o racismo exige ações coletivas, tanto de instituições quanto da sociedade como um todo.",
    "A memória de Zumbi dos Palmares inspira a luta por liberdade e justiça para a população negra.",
    "A Consciência Negra promove o respeito à diversidade e combate os estereótipos negativos sobre os afrodescendentes.",
    "O Dia da Consciência Negra é um momento de reflexão e celebração das conquistas afrodescendentes.",
    "A desigualdade racial precisa ser enfrentada com políticas públicas que promovam inclusão e reparação histórica.",
    "A resistência dos quilombos é um marco importante na luta pela liberdade da população negra no Brasil.",
    "A Consciência Negra ensina a importância da identidade e autoestima para superar os desafios sociais.",
    "A educação antirracista é uma ferramenta poderosa para desconstruir preconceitos e transformar a sociedade.",
    "A luta pela igualdade racial é contínua e requer o compromisso de todos os setores da sociedade.",
    "A Consciência Negra reconhece a importância das tradições africanas na formação da cultura brasileira.",
    "Zumbi dos Palmares é um exemplo de liderança e coragem na luta contra a opressão.",
    "A reflexão sobre o racismo estrutural é essencial para construir um país mais inclusivo e democrático.",
    "A valorização da cultura negra é um ato de resistência e celebração da diversidade.",
    "A história afro-brasileira é parte essencial da identidade e formação do Brasil moderno.",
    "A Consciência Negra desafia preconceitos e promove o respeito às diferenças culturais e raciais.",
    "O Dia da Consciência Negra nos lembra da importância de combater a exclusão e promover justiça.",
    "A diversidade é uma riqueza que deve ser celebrada e valorizada em todas as esferas da sociedade.",
    "A luta pela equidade racial é um compromisso com um futuro mais justo para todos."
  ];
  




document.addEventListener("DOMContentLoaded",()=> {
    let frases = document.getElementById("frases")
    frasesConscienciaNegra.forEach(frase => {
        elementDiv = document.createElement("div")
        elementDiv.classList.add("frases-div")
        elementDiv.textContent = frase
        frases.appendChild(elementDiv)
    });
    

})

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container")

    if (menuContainer) {
        fetch("/pages/menu.html")
            .then(response => {
                if (!response.ok){
                    throw new Error("Erro ao carregar o menu")
                }
                return response.text()
            })
            .then(data => {
                menuContainer.innerHTML = data
            })
            .catch(error => {
                console.error("Erro: ", error)
            })
    }
})