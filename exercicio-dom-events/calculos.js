/* Desenvolva aqui a rotina */

const btnCalc = document.querySelector('#btn_calcular')

btnCalc.addEventListener('click', () => {
    const valorBase = document.querySelector('#valor_base').value
    const valorTransporte = document.querySelector('#valor_transporte').value
    const valorAlimentacao = document.querySelector('#valor_alimentacao').value
    const receitaTotal = document.querySelector('#valor_receita')

    const total = Number(valorBase) + Number(valorTransporte) + Number(valorAlimentacao)

    receitaTotal.value = total

    const valorAutomovel = document.querySelector('#valor_automovel').value
    const valorFaltas = document.querySelector('#faltas').value
    const descontoTotal = document.querySelector('#valor_descontos')

    const somaDescontos = Number(valorAutomovel) + Number(valorFaltas)

    descontoTotal.value = somaDescontos

    const valorTotal = document.querySelector('#valor_total')
    const somaTotal = Number(total) - (Number(somaDescontos))
    console.log(somaTotal)
    valorTotal.value = somaTotal

})