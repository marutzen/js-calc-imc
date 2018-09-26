var botao = document.querySelector("#buscar-pacientes");

botao.addEventListener("click", function(event) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", onLoadRequisicao);
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
});

function onLoadRequisicao() {
    var erroAjax = document.querySelector("#erro-ajax");

    if (this.status != 200) {
        erroAjax.classList.remove("invisivel");

        console.log("Status: " + this.status);
        console.log("Mensagem: " + this.responseText);
    } else {
        erroAjax.classList.add("invisivel");
        
        var pacientes = JSON.parse(this.responseText);
        
        pacientes.forEach(paciente => {
            adicionarParticipanteTabela(paciente);
        });
    }
}