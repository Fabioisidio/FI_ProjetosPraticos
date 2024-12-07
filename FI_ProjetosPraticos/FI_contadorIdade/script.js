function verificar() {
    let data = new Date();
    let anoAtual = data.getFullYear();
    let ano_form = document.getElementById('txtano');
    let result = document.querySelector('div#result');
    let img = document.createElement('img')
    img.setAttribute('id', 'fotom')

    if (ano_form.value.length == 0 || Number(ano_form.value) > anoAtual) {
        window.alert('[ERRO] Valor invalido, tente novamente.');
    } else  {
        let form_sex = document.getElementsByName('radsex');
        let idade = anoAtual - Number(ano_form.value);
        let genero = ""
        if (form_sex[0].checked) {
            genero = "Homem"

            if (idade <= 12) {
                img.setAttribute('src', "./imgs/criancaH.jpg")

            } else if (idade <= 21) {
                img.setAttribute('src', "./imgs/jovemH.jpg")

            } else if (idade <= 65 ) {
                img.setAttribute('src', "./imgs/adultoH.jpg")

            } else if (idade <= 150){
                img.setAttribute('src', "./imgs/idosoH.jpg")

            } else{
                img.setAttribute('src', "./imgs/morto.jpg")
            }

        } else {
            genero = "Mulher"

            if (idade <= 12) {
                img.setAttribute('src', "./imgs/criancaM.jpg")

            } else if (idade <= 21) {
                img.setAttribute('src', "./imgs/jovemM.jpg")

            } else if (idade <= 65 ) {
                img.setAttribute('src', "./imgs/adultoM.jpg")

            } else if (idade <= 125){
                img.setAttribute('src', "./imgs/idosoM.jpg")

            } else{
                img.setAttribute('src', "./imgs/morto.jpg")
            }
        }
        result.style.textAlign = "center"
        result.style.background = "rgb(51 51 51)"
        result.style.color = "#fff"
        result.innerHTML = `Detectado: ${genero}, e tem ${idade} anos.`
        result.appendChild(img)
    }
}