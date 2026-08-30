
//evento q gera o click e funcao de escolher em todas as classes opcao
document.querySelectorAll(".opcao").forEach((btn) => {
    btn.addEventListener("click", () => escolher(btn));
});

function escolher(btn) {
    // remove seleção anterior
    document.querySelectorAll(".opcao").forEach((b) => b.classList.remove("selecionada"));
    btn.classList.add("selecionada");

    const escolha = btn.dataset.opcao;
    const resultado = document.getElementById("resultado");
    resultado.innerText = `Combinado! Vamos comer ${escolha} 💕`;

    // mostra o campo de data e horário
    const agendamento = document.getElementById("agendamento");
    agendamento.classList.remove("oculto");//remove a classe oculto que no CSS tem como display:none
    agendamento.dataset.escolha = escolha;

    // limpa uma confirmação anterior, se houver
    document.getElementById("confirmacao").innerText = "";
}

function confirmarEncontro() {
    const agendamento = document.getElementById("agendamento");
    const escolha = agendamento.dataset.escolha;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const confirmacao = document.getElementById("confirmacao");

    const dataFormatada = new Date(data + "T00:00:00").toLocaleDateString("pt-BR");

    confirmacao.style.color = "#333";
    confirmacao.innerText = `Combinado: ${escolha} no dia ${dataFormatada} às ${horario}`;
}


document.getElementById("btn-confirmar").addEventListener("click", confirmarEncontro);