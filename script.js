// Variáveis do jogo
let numeroSecreto;
let tentativas;
let jogoAtivo;

// Elementos DOM
const chuteInput = document.getElementById('chuteInput');
const botaoChutar = document.getElementById('botaoChutar');
const botaoReiniciar = document.getElementById('botaoReiniciar');
const mensagem = document.getElementById('mensagem');
const contadorTentativas = document.getElementById('contadorTentativas');

// Inicialização do jogo
function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    jogoAtivo = true;
    
    // Reset da interface
    chuteInput.value = '';
    chuteInput.disabled = false;
    botaoChutar.disabled = false;
    botaoReiniciar.classList.add('oculto');
    
    // Reset da mensagem
    mensagem.textContent = 'Seu resultado aparecerá aqui.';
    mensagem.className = 'status-inicial';
    
    // Reset do contador
    contadorTentativas.textContent = '0';
    
    // Foco no input
    chuteInput.focus();
}

// Função para processar o chute
function processarChute() {
    if (!jogoAtivo) return;
    
    const chute = parseInt(chuteInput.value);
    
    // Validação do input
    if (isNaN(chute) || chute < 1 || chute > 100) {
        mostrarMensagem('Por favor, digite um número entre 1 e 100!', 'erro-frio');
        return;
    }
    
    tentativas++;
    contadorTentativas.textContent = tentativas;
    
    // Verificar o chute
    if (chute === numeroSecreto) {
        // Acertou!
        const mensagemVitoria = tentativas === 1 
            ? '🎉 Incrível! Você acertou de primeira!' 
            : `🎉 Parabéns! Você acertou em ${tentativas} tentativas!`;
        
        mostrarMensagem(mensagemVitoria, 'acerto');
        finalizarJogo();
    } else {
        // Errou - dar dicas
        const diferenca = Math.abs(chute - numeroSecreto);
        let dica, classe;
        
        if (diferenca <= 5) {
            dica = chute < numeroSecreto ? '🔥 Muito quente! Tente um número MAIOR!' : '🔥 Muito quente! Tente um número MENOR!';
            classe = 'erro-quente';
        } else if (diferenca <= 15) {
            dica = chute < numeroSecreto ? '🌡️ Quente! Tente um número MAIOR!' : '🌡️ Quente! Tente um número MENOR!';
            classe = 'erro-quente';
        } else if (diferenca <= 25) {
            dica = chute < numeroSecreto ? '❄️ Frio! Tente um número MAIOR!' : '❄️ Frio! Tente um número MENOR!';
            classe = 'erro-frio';
        } else {
            dica = chute < numeroSecreto ? '🧊 Muito frio! Tente um número MUITO MAIOR!' : '🧊 Muito frio! Tente um número MUITO MENOR!';
            classe = 'erro-frio';
        }
        
        mostrarMensagem(dica, classe);
    }
    
    // Limpar input e focar
    chuteInput.value = '';
    chuteInput.focus();
}

// Função para mostrar mensagem
function mostrarMensagem(texto, classe) {
    mensagem.textContent = texto;
    mensagem.className = classe;
}

// Função para finalizar o jogo
function finalizarJogo() {
    jogoAtivo = false;
    chuteInput.disabled = true;
    botaoChutar.disabled = true;
    botaoReiniciar.classList.remove('oculto');
    botaoReiniciar.focus();
}

// Event Listeners
botaoChutar.addEventListener('click', processarChute);

botaoReiniciar.addEventListener('click', iniciarJogo);

// Permitir jogar com Enter
chuteInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        processarChute();
    }
});

// Permitir apenas números no input
chuteInput.addEventListener('input', function(event) {
    // Remove caracteres não numéricos
    this.value = this.value.replace(/[^0-9]/g, '');
    
    // Limita a 3 dígitos (máximo 100)
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3);
    }
    
    // Limita o valor máximo a 100
    if (parseInt(this.value) > 100) {
        this.value = '100';
    }
});

// Iniciar o jogo quando a página carregar
document.addEventListener('DOMContentLoaded', iniciarJogo);