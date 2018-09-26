document.querySelector("#filtrar-tabela").addEventListener("input", function() {
    if (this.value.length == 0) {
        document.querySelectorAll(".paciente").forEach(paciente => {
            paciente.classList.remove("invisivel");
        });
    } else {
        document.querySelectorAll(".paciente").forEach(paciente => {
            var expressao = new RegExp(this.value, "i");
    
            if (expressao.test(getNomePaciente(paciente))) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        });
    }

});

function getNomePaciente(paciente) {
    return paciente.querySelector(".info-nome").textContent;
}