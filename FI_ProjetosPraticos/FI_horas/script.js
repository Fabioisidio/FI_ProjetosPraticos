function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `A hora atual é ${hora} horas`;
    let saudacao = window.document.getElementById('saudacao')
    let fundo = window.document.getElementById('fundo')

    if (hora > 4 && hora <= 12) {
        // Bom dia!
        img.src = "./imgs/manha.png"
        saudacao.innerText = "Bom dia!"
        document.body.style.background = "#e2cd9f"
        
    } else if (hora > 12 && hora <= 18) {
        //Boa tarde!
        img.src = "./imgs/tarde.png"
        saudacao.innerText = "Boa tarde!"
        document.body.style.background = "#b9846f"

    } else {
        img.src = "./imgs/noite.png"
        saudacao.innerText = "Boa noite!"
        document.body.style.background = "#515154"
    }
}

