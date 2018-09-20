var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;
    var tdImc = paciente.querySelector('.info-imc');

    var podeCalcular = true;

    if (peso < 0 || peso > 1000) {
        podeCalcular = false;
        tdImc.textContent = 'Peso inválido!';
    }

    if (podeCalcular && (altura < 0 || altura > 3)) {
        podeCalcular = false;
        tdImc.textContent = 'Altura inválida!';
    }

    if (podeCalcular) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        paciente.classList.add('paciente-invalido');
    }
    
}