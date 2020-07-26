/*  declaradas as varáriaveis que recebem os componentes de entrada do html */
var inputHoras = document.querySelector('#valor-hora')
var inputProjeto = document.querySelector('#horas-projeto')

/*  declarada a variável que recebe o componente onde será exibido o resultado da função */
var resultado = document.querySelector('#resposta')

/*  declarada função calcularCustoProjeto, pois no html o 'calcularCustoProjeto' é o nosso 'onclick', 
    ou seja, no clique, é esta função que será executada */
function calcularCustoProjeto() {
    var horas = inputHoras.valueAsNumber
    var projeto = inputProjeto.valueAsNumber

    var valorHora = horas * projeto

    var valorHoraDuasCasas = valorHora.toFixed(2)

    /* adionei o método replace para deixar o número final com o padrão monetário brasileiro */
    resultado.textContent = 'R$ ' + valorHoraDuasCasas.replace('.', ',')

}