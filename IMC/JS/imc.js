const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const button = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

//evento

button.addEventListener('click',imc)

//função - ultima parte

function imc(){

    let weight = peso.value
    let height = Number(altura.value)
    let imcfinal = weight/(height*height)
    
    resultado.textContent = imcfinal
}

