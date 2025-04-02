let perguntas = [
    { 
        pergunta: "Que dia da semana nos conhecemos?", 
        opcoes: ["Segunda-feira", "Terça-feira", "Quarta-feira", "Sexta-feira"], 
        resposta: "Quarta-feira" 
    },
    { 
        pergunta: "Onde foi nosso primeiro beijo?", 
        opcoes: ["Na praça", "Na frente da tua casa", "Na tua casa", "No escurinho"], 
        resposta: "Na frente da tua casa" 
    },
    { 
        pergunta: "Quando você ama?", 
        opcoes: ["Muito", "Pouco", "Tico-tico", "Infinito"], 
        resposta: "Tico-tico" 
    },
    { 
        pergunta: "Vai me dar peitinho hoje?", 
        opcoes: ["Não", "Talvez", "Depois", "Sim"], 
        resposta: "Sim" 
    }
];

let indiceAtual = 0;

function iniciarJogo() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("perguntas").style.display = "block";
    mostrarPergunta();
}

function mostrarPergunta() {
    if (indiceAtual < perguntas.length) {
        let perguntaAtual = perguntas[indiceAtual];
        document.getElementById("pergunta-texto").innerText = perguntaAtual.pergunta;
        
        let opcoesDiv = document.getElementById("opcoes");
        opcoesDiv.innerHTML = "";

        perguntaAtual.opcoes.forEach(opcao => {
            let botao = document.createElement("button");
            botao.innerText = opcao;
            botao.classList.add("opcao");
            botao.onclick = function() { verificarResposta(opcao); };
            opcoesDiv.appendChild(botao);
        });

        document.getElementById("feedback").innerText = "";
    } else {
        finalizarJogo();
    }
}

function verificarResposta(respostaSelecionada) {
    let respostaCorreta = perguntas[indiceAtual].resposta;

    if (respostaSelecionada === respostaCorreta) {
        indiceAtual++;
        mostrarPergunta();
    } else {
        document.getElementById("feedback").innerText = "Errou, amor! Responda novamente ❤️";
    }
}

function finalizarJogo() {
    document.getElementById("perguntas").style.display = "none";
    document.getElementById("final").style.display = "block";
}
