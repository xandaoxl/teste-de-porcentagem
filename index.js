function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

function calculate() {
    var num1 = document.getElementById('num1').value;
    var percent = document.getElementById('percent').value;
    var result = (num1 * percent) / 100;
    document.getElementById('result').textContent = "Resultado: " + formatCurrency(result);
}
