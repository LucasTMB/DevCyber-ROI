var inputValorInvestimento = document.querySelector('#valorInvestimento');
var inputReceitaGerada = document.querySelector('#receitaGerada');
var outputForm = document.querySelector('.formulario-saida-texto');

outputForm.style.display = 'none';

function botaoCalcular() {
    let roi = calcularRoi(inputReceitaGerada.value, inputValorInvestimento.value);

    outputForm.innerText = `O seu ROI é de ${roi}%`;

    outputForm.style.display = 'block';
}

function calcularRoi(ganho, investimento) {
    console.log(`${ganho} ${investimento}`)
    let roiCalculo = ((ganho - investimento) / investimento) * 100;

    return roiCalculo.toFixed(1);
}