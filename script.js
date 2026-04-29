function revelar() {

    // Trocar imagem
    document.querySelector(".card-img-top").src = "img/_vinicius_junior.png";

    // Preencher textos
    document.getElementById("Nome").innerHTML = 
    'Vinícius Júnior <span id="Rank" class="badge text-bg-success">9,5</span>';

    document.getElementById("Data_Nas").innerText = "📅 12/07/2000 (25 anos)";
    document.getElementById("Altura").innerText = "📏 1,76 m";
    document.getElementById("Posicao").innerText = "🏃 Ponta-esquerda / Atacante";

    // Remover efeito placeholder
    document.querySelectorAll(".placeholder, .placeholder-glow").forEach(el => {
        el.classList.remove("placeholder", "placeholder-glow");
    });

    // Aplicar estilo final
    document.querySelectorAll("#Data_Nas, #Altura, #Posicao").forEach(el => {
        el.classList.add("card-text");
    });
}