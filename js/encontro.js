//evento q gera o click e funcao de escolher em todas as classes opcao
document.querySelectorAll(".opcao").forEach((btn) => {
    btn.addEventListener("click", () => escolher(btn));
});

// evento de clique nos botões de dia da semana
document.querySelectorAll(".dia").forEach((btn) => {
    btn.addEventListener("click", () => escolherDia(btn));
});

function escolher(btn) {
    // remove seleção anterior
    document.querySelectorAll(".opcao").forEach((b) => b.classList.remove("selecionada"));
    btn.classList.add("selecionada");

    const escolha = btn.dataset.opcao;
    const resultado = document.getElementById("resultado");
    resultado.innerText = `Combinado! ${escolha} 💕`;

    // mostra os botões de dia da semana
    const agendamento = document.getElementById("agendamento");
    agendamento.classList.remove("oculto");//remove a classe oculto que no CSS tem como display:none
    agendamento.dataset.escolha = escolha;

    // limpa uma confirmação anterior, se houver
    document.getElementById("confirmacao").innerText = "";
}

function escolherDia(btn) {
    document.querySelectorAll(".dia").forEach((b) => b.classList.remove("selecionada"));
    btn.classList.add("selecionada");

    const agendamento = document.getElementById("agendamento");
    agendamento.dataset.dia = btn.dataset.dia;

    document.getElementById("confirmacao").innerText = "";
}

function confirmarEncontro() {
    const agendamento = document.getElementById("agendamento");
    const escolha = agendamento.dataset.escolha;
    const dia = agendamento.dataset.dia;
    const confirmacao = document.getElementById("confirmacao");

    if (!dia) {
        confirmacao.style.color = "#c0392b";
        confirmacao.innerText = "Escolhe o dia da semana antes de confirmar! 📅";
        return;
    }

    confirmacao.style.color = "#333";
    confirmacao.innerText = `Combinado: ${escolha} na ${dia} 💕`;
}


document.getElementById("btn-confirmar").addEventListener("click", confirmarEncontro);