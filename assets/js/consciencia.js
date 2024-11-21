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