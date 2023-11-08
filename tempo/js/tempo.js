const chave = '1a20ae048b720a6a82d97a17597ea790'
const cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const titulo = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')

botao.addEventListener('click',buscarCidade)

async function buscarCidade(){

    let ncidade = cidade.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ncidade}&appid=${chave}&units=metric&lang=pt_br`)
    .then(resposta=>resposta.json())

    titulo.textContent = "Tempo em "+ dados.name
    temperatura.textContent = (dados.main.temp).toFixed(0) +"°C"
    previsao.textContent = dados.weather[0].description
    console.log(dados)
}
