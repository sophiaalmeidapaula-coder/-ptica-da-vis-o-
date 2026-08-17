/* =========================================================
   ÓPTICA DA VISÃO
   JavaScript - Interatividade e comportamento do site
   ========================================================= */
/* =========================================================
   1. INICIALIZAÇÃO
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Site Óptica da Visão carregado com sucesso!");
    iniciarMenu();
    iniciarAnimacoes();
    iniciarBotaoTopo();
    iniciarAnoAutomatico();
    iniciarModoLeitura();
    iniciarCuriosidade();
    iniciarQuiz();
});
/* =========================================================
   2. MENU DE NAVEGAÇÃO
   ========================================================= */
function iniciarMenu() {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const destino = this.getAttribute("href");
            if (destino && destino.startsWith("#")) {
                event.preventDefault();
                const elemento = document.querySelector(destino);
                if (elemento) {
                    elemento.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
}
/* =========================================================
   3. ANIMAÇÃO DAS SEÇÕES AO ROLAR A PÁGINA
   ========================================================= */
function iniciarAnimacoes() {
    const secoes = document.querySelectorAll("main section");
    secoes.forEach(secao => {
        secao.style.opacity = "0";
        secao.style.transform = "translateY(30px)";
        secao.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";
    });
    const observador = new IntersectionObserver(
        (entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.style.opacity = "1";
                    entrada.target.style.transform = "translateY(0)";
                    observador.unobserve(entrada.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );
    secoes.forEach(secao => {
        observador.observe(secao);
    });
}
/* =========================================================
   4. BOTÃO "VOLTAR AO TOPO"
   ========================================================= */
function iniciarBotaoTopo() {
    const botao = document.createElement("button");
    botao.innerHTML = "↑";
    botao.setAttribute("aria-label", "Voltar ao topo");
    botao.style.position = "fixed";
    botao.style.bottom = "25px";
    botao.style.right = "25px";
    botao.style.width = "50px";
    botao.style.height = "50px";
    botao.style.border = "none";
    botao.style.borderRadius = "50%";
    botao.style.backgroundColor = "#249bc9";
    botao.style.color = "#ffffff";
    botao.style.fontSize = "25px";
    botao.style.fontWeight = "bold";
    botao.style.cursor = "pointer";
    botao.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.20)";
    botao.style.display = "none";
    botao.style.zIndex = "1000";
    botao.style.transition = "0.3s ease";
    document.body.appendChild(botao);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            botao.style.display = "block";
        } else {
            botao.style.display = "none";
        }
    });
    botao.addEventListener("mouseenter", () => {
        botao.style.transform = "scale(1.1)";
        botao.style.backgroundColor = "#147ba5";
    });
    botao.addEventListener("mouseleave", () => {
        botao.style.transform = "scale(1)";
        botao.style.backgroundColor = "#249bc9";
    });
    botao.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
/* =========================================================
   5. ANO AUTOMÁTICO NO RODAPÉ
   ========================================================= */
function iniciarAnoAutomatico() {
    const rodape = document.querySelector("footer");
    if (!rodape) {
        return;
    }
    const ano = new Date().getFullYear();
    const paragrafos = rodape.querySelectorAll("p");
    if (paragrafos.length > 0) {
        paragrafos[0].textContent =
            `© ${ano} - Projeto Escolar de Física`;
    }
}
/* =========================================================
   6. MODO DE LEITURA
   ========================================================= */
function iniciarModoLeitura() {
    const botao = document.createElement("button");
    botao.textContent = "Modo de leitura";
    botao.setAttribute(
        "aria-label",
        "Ativar ou desativar modo de leitura"
    );
    botao.style.position = "fixed";
    botao.style.top = "20px";
    botao.style.right = "20px";
    botao.style.padding = "10px 16px";
    botao.style.border = "none";
    botao.style.borderRadius = "20px";
    botao.style.backgroundColor = "#ffffff";
    botao.style.color = "#1687b5";
    botao.style.fontWeight = "bold";
    botao.style.cursor = "pointer";
    botao.style.boxShadow =
        "0 3px 10px rgba(0, 0, 0, 0.12)";
    botao.style.zIndex = "1001";
    document.body.appendChild(botao);
    let modoLeitura = false;
    botao.addEventListener("click", () => {
        modoLeitura = !modoLeitura;
        if (modoLeitura) {
            document.body.style.fontSize = "1.08em";
            document.body.style.lineHeight = "1.9";
            botao.textContent = "Modo normal";
        } else {
            document.body.style.fontSize = "";
            document.body.style.lineHeight = "";
            botao.textContent = "Modo de leitura";
        }
    });
}
/* =========================================================
   7. CAIXA DE CURIOSIDADE
   ========================================================= */
function iniciarCuriosidade() {
    const curiosidades = [
        "A imagem formada inicialmente na retina é real, invertida e menor.",
        "A córnea é responsável por uma grande parte da capacidade de refração do olho.",
        "A pupila controla a quantidade de luz que entra no olho.",
        "O cristalino funciona como uma lente convergente.",
        "A retina possui células especializadas na percepção da luz.",
        "O cérebro participa diretamente da interpretação das informações visuais.",
        "A acomodação visual permite que o olho focalize objetos em diferentes distâncias.",
        "As cores que percebemos dependem da interação entre luz, retina e cérebro."
    ];
    const botao = document.createElement("button");
    botao.textContent = "✨ Ver uma curiosidade";
    botao.style.display = "block";
    botao.style.margin = "25px auto";
    botao.style.padding = "13px 22px";
    botao.style.border = "none";
    botao.style.borderRadius = "25px";
    botao.style.backgroundColor = "#249bc9";
    botao.style.color = "#ffffff";
    botao.style.fontSize = "16px";
    botao.style.fontWeight = "bold";
    botao.style.cursor = "pointer";
    botao.style.transition = "0.3s ease";
    const caixa = document.createElement("div");
    caixa.style.display = "none";
    caixa.style.maxWidth = "800px";
    caixa.style.margin = "20px auto";
    caixa.style.padding = "20px";
    caixa.style.backgroundColor = "#e8f8ff";
    caixa.style.border = "2px solid #8ed8f8";
    caixa.style.borderRadius = "15px";
    caixa.style.textAlign = "center";
    caixa.style.color = "#126985";
    caixa.style.fontWeight = "bold";
    const secao = document.querySelector("#curiosidades");
    if (!secao) {
        return;
    }
    secao.appendChild(botao);
    secao.appendChild(caixa);
    botao.addEventListener("mouseenter", () => {
        botao.style.transform = "translateY(-3px)";
        botao.style.backgroundColor = "#147ba5";
    });
    botao.addEventListener("mouseleave", () => {
        botao.style.transform = "translateY(0)";
        botao.style.backgroundColor = "#249bc9";
    });
    botao.addEventListener("click", () => {
        const indice =
            Math.floor(Math.random() * curiosidades.length);
        caixa.textContent = curiosidades[indice];
        caixa.style.display = "block";
    });
}
/* =========================================================
   8. QUIZ INTERATIVO
   ========================================================= */
function iniciarQuiz() {
    const quiz = [
        {
            pergunta: "Qual estrutura do olho controla a quantidade de luz que entra?",
            opcoes: [
                "Retina",
                "Íris",
                "Nervo óptico",
                "Cristalino"
            ],
            resposta: 1
        },
        {
            pergunta: "Qual estrutura funciona como uma lente convergente?",
            opcoes: [
                "Pupila",
                "Retina",
                "Cristalino",
                "Íris"
            ],
            resposta: 2
        },
        {
            pergunta: "Na miopia, onde a imagem tende a se formar?",
            opcoes: [
                "Antes da retina",
                "Depois da retina",
                "Na córnea",
                "No nervo óptico"
            ],
            resposta: 0
        },
        {
            pergunta: "Qual fenômeno ocorre quando a luz muda de direção ao passar de um meio para outro?",
            opcoes: [
                "Reflexão",
                "Difração",
                "Refração",
                "Dispersão"
            ],
            resposta: 2
        },
        {
            pergunta: "Onde a imagem é formada no olho?",
            opcoes: [
                "Na íris",
                "Na retina",
                "Na pupila",
                "No nervo óptico"
            ],
            resposta: 1
        }
    ];
    const quizSection = document.createElement("section");
    quizSection.id = "quiz";
    const titulo = document.createElement("h2");
    titulo.textContent = "🧠 Teste seus conhecimentos";
    const descricao = document.createElement("p");
    descricao.textContent =
        "Responda às perguntas e descubra quanto você aprendeu sobre Óptica da Visão.";
    const pergunta = document.createElement("h3");
    const opcoes = document.createElement("div");
    const resultado = document.createElement("p");
    const botaoProxima = document.createElement("button");
    botaoProxima.textContent = "Próxima pergunta";
    botaoProxima.style.display = "none";
    botaoProxima.style.marginTop = "20px";
    botaoProxima.style.padding = "12px 20px";
    botaoProxima.style.border = "none";
    botaoProxima.style.borderRadius = "20px";
    botaoProxima.style.backgroundColor = "#249bc9";
    botaoProxima.style.color = "#ffffff";
    botaoProxima.style.fontWeight = "bold";
    botaoProxima.style.cursor = "pointer";
    quizSection.appendChild(titulo);
    quizSection.appendChild(descricao);
    quizSection.appendChild(pergunta);
    quizSection.appendChild(opcoes);
    quizSection.appendChild(resultado);
    quizSection.appendChild(botaoProxima);
    document.querySelector("main").appendChild(quizSection);
    let perguntaAtual = 0;
    let pontuacao = 0;
    function carregarPergunta() {
        const atual = quiz[perguntaAtual];
        pergunta.textContent =
            `${perguntaAtual + 1}. ${atual.pergunta}`;
        opcoes.innerHTML = "";
        resultado.textContent = "";
        botaoProxima.style.display = "none";
        atual.opcoes.forEach((opcao, indice) => {
            const botao = document.createElement("button");
            botao.textContent = opcao;
            botao.style.display = "block";
            botao.style.width = "100%";
            botao.style.margin = "10px 0";
            botao.style.padding = "13px";
            botao.style.border = "2px solid #b9e8f8";
            botao.style.borderRadius = "12px";
            botao.style.backgroundColor = "#f4fbff";
            botao.style.color = "#1f3d50";
            botao.style.cursor = "pointer";
            botao.style.textAlign = "left";
            botao.style.fontSize = "15px";
            botao.addEventListener("click", () => {
                verificarResposta(indice, botao);
            });
            opcoes.appendChild(botao);
        });
    }
    function verificarResposta(indice, botaoSelecionado) {
        const respostaCorreta =
            quiz[perguntaAtual].resposta;
        const botoes =
            opcoes.querySelectorAll("button");
        botoes.forEach(botao => {
            botao.disabled = true;
        });
        if (indice === respostaCorreta) {
            pontuacao++;
            botaoSelecionado.style.backgroundColor = "#c9f7d5";
            botaoSelecionado.style.borderColor = "#55b878";
            resultado.textContent =
                "✅ Resposta correta! Muito bem!";
            resultado.style.color = "#23814a";
        } else {
            botaoSelecionado.style.backgroundColor = "#ffd9d9";
            botaoSelecionado.style.borderColor = "#e87b7b";
            botoes[respostaCorreta].style.backgroundColor =
                "#c9f7d5";
            resultado.textContent =
                "❌ Resposta incorreta. A alternativa correta foi destacada.";
            resultado.style.color = "#b03a3a";
        }
        botaoProxima.style.display = "inline-block";
    }
    botaoProxima.addEventListener("click", () => {
        perguntaAtual++;
        if (perguntaAtual < quiz.length) {
            carregarPergunta();
        } else {
            mostrarResultadoFinal();
        }
    });
    function mostrarResultadoFinal() {
        pergunta.textContent = "🎉 Quiz concluído!";
        opcoes.innerHTML = "";
        botaoProxima.style.display = "none";
        let mensagem;
        if (pontuacao === quiz.length) {
            mensagem =
                "Excelente! Você domina muito bem os conceitos de Óptica da Visão. 👏";
        } else if (pontuacao >= 3) {
            mensagem =
                "Muito bem! Você demonstrou um bom conhecimento sobre o assunto. 😊";
        } else {
            mensagem =
                "Bom começo! Que tal revisar o conteúdo e tentar novamente? 📚";
        }
        resultado.innerHTML =
            `<strong>Você acertou ${pontuacao} de ${quiz.length} perguntas.</strong><br><br>${mensagem}`;
        const reiniciar = document.createElement("button");
        reiniciar.textContent = "🔄 Refazer quiz";
        reiniciar.style.marginTop = "20px";
        reiniciar.style.padding = "12px 22px";
        reiniciar.style.border = "none";
        reiniciar.style.borderRadius = "20px";
        reiniciar.style.backgroundColor = "#1687b5";
        reiniciar.style.color = "#ffffff";
        reiniciar.style.fontWeight = "bold";
        reiniciar.style.cursor = "pointer";
        reiniciar.addEventListener("click", () => {
            perguntaAtual = 0;
            pontuacao = 0;
            carregarPergunta();
        });
        opcoes.appendChild(reiniciar);
    }
    carregarPergunta();
}
/* =========================================================
   9. DESTAQUE DA SEÇÃO ATUAL NO MENU
   ========================================================= */
window.addEventListener("scroll", () => {
    const secoes = document.querySelectorAll("main section");
    const links = document.querySelectorAll("nav a");
    let secaoAtual = "";
    secoes.forEach(secao => {
        const distancia =
            secao.getBoundingClientRect().top;
        if (distancia <= 180) {
            secaoAtual = secao.getAttribute("id");
        }
    });
    links.forEach(link => {
        link.style.opacity = "0.75";
        if (
            link.getAttribute("href") ===
            `#${secaoAtual}`
        ) {
            link.style.opacity = "1";
            link.style.transform = "scale(1.05)";
        } else {
            link.style.transform = "scale(1)";
        }
    });
});
/* =========================================================
   10. MENSAGEM NO CONSOLE
   ========================================================= */
console.log(
    "🔬 Óptica da Visão | Sistema interativo iniciado."
);
