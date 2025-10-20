# 📐 Documentação do Wireframe - Jogo "Acerte o Número"

## 🎯 Visão Geral

Este documento detalha o wireframe do jogo "Acerte o Número", incluindo estrutura, componentes, estados visuais e fluxo de interação.

## 📱 Layouts Responsivos

### Desktop (500x600px)
- **Container Principal**: 460x560px com bordas arredondadas
- **Layout**: Vertical centralizado com espaçamento generoso
- **Componentes**: Dispostos em blocos bem definidos

### Mobile (320x600px)
- **Container**: 300x580px adaptado para telas pequenas
- **Layout**: Elementos empilhados verticalmente
- **Botões**: Largura total para melhor usabilidade touch

## 🧩 Componentes da Interface

### 1. Cabeçalho
```
┌─────────────────────────────────┐
│     🎮 Acerte o Número! 🤖      │
│   Tente adivinhar o número...   │
└─────────────────────────────────┘
```
- **Título**: H1 com emojis, fonte grande, centralizado
- **Descrição**: Parágrafo explicativo do jogo

### 2. Área de Interação
```
┌─────────────────────────────────┐
│  [Input Número]  [Botão Chutar] │
└─────────────────────────────────┘
```
- **Input**: type="number", min="1", max="100", placeholder
- **Botão**: Ação principal com gradiente azul

### 3. Área de Feedback
```
┌─────────────────────────────────┐
│        Mensagem Dinâmica        │
│     (Dicas, Resultado, etc.)    │
└─────────────────────────────────┘
```
- **Estados**: Inicial, Erro Frio, Erro Quente, Acerto
- **Cores**: Cinza, Azul, Laranja, Verde respectivamente

### 4. Controles Secundários
```
┌─────────────────────────────────┐
│      [Botão Reiniciar]          │
│     Tentativas: X               │
└─────────────────────────────────┘
```
- **Reiniciar**: Oculto inicialmente, aparece após vitória
- **Contador**: Atualizado em tempo real

## 🎨 Estados Visuais

### Estado Inicial
- **Input**: Vazio, borda cinza
- **Botão**: Ativo, gradiente azul
- **Mensagem**: "Seu resultado aparecerá aqui" (cinza tracejado)
- **Contador**: "Tentativas: 0"

### Estado Erro Frio (❄️)
- **Cor**: Azul (#e1f5fe)
- **Ícone**: ❄️ Muito frio / 🧊 Muito frio
- **Texto**: "Tente um número MAIOR/MENOR"
- **Feedback**: Diferença > 25 do número secreto

### Estado Erro Quente (🔥)
- **Cor**: Laranja (#fff3e0)
- **Ícone**: 🔥 Muito quente / 🌡️ Quente
- **Texto**: "Tente um número MAIOR/MENOR"
- **Feedback**: Diferença ≤ 15 do número secreto

### Estado Vitória (🎉)
- **Cor**: Verde (#e8f5e8)
- **Ícone**: 🎉 Parabéns!
- **Texto**: "Você acertou em X tentativas!"
- **Ação**: Input desabilitado, botão reiniciar aparece

## 🔄 Fluxo de Interação

```
INÍCIO → Digitar Número → Validar → Comparar
   ↑                         ↓         ↓
   │                    [Inválido]  [Válido]
   │                         ↓         ↓
   │                    Voltar    [Acertou/Errou]
   │                               ↓         ↓
   │                           VITÓRIA    Dar Dica
   │                                        ↓
   └─────────── Reiniciar ←─────────── Tentar Novamente
```

### Validações
1. **Input vazio**: Solicitar número
2. **Fora do range**: "Digite um número entre 1 e 100"
3. **Não numérico**: Filtrar automaticamente

### Feedback Progressivo
- **Diferença > 25**: "Muito frio" (azul)
- **Diferença 16-25**: "Frio" (azul)
- **Diferença 6-15**: "Quente" (laranja)
- **Diferença ≤ 5**: "Muito quente" (laranja)
- **Diferença = 0**: "Acertou!" (verde)

## 📏 Especificações Técnicas

### Dimensões
- **Container máximo**: 500px
- **Padding interno**: 40px
- **Espaçamento entre elementos**: 20-30px
- **Altura mínima botões**: 40px
- **Altura área mensagem**: 60-80px

### Cores
```css
/* Cores principais */
--azul-primario: #667eea
--azul-secundario: #764ba2
--verde-sucesso: #4caf50
--laranja-alerta: #f57c00
--azul-info: #17a2b8
--cinza-neutro: #6c757d

/* Backgrounds */
--bg-inicial: #f8f9fa
--bg-frio: #e1f5fe
--bg-quente: #fff3e0
--bg-sucesso: #e8f5e8
```

### Tipografia
- **Título**: 2.5rem, peso 700
- **Texto normal**: 1.1rem, peso 400
- **Botões**: 1.1rem, peso 600
- **Contador**: 1.3rem, peso 700

### Animações
- **Hover botões**: translateY(-3px) + sombra
- **Focus input**: borda azul + sombra
- **Acerto**: animação pulse (scale 1 → 1.05 → 1)
- **Transições**: 0.3s ease para todos os elementos

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 600px
- **Mobile**: ≤ 600px

### Adaptações Mobile
- **Container**: padding reduzido (30px → 20px)
- **Título**: fonte menor (2.5rem → 2rem)
- **Botões**: largura total, empilhados verticalmente
- **Input**: largura total, max-width 250px
- **Espaçamentos**: reduzidos proporcionalmente

## 🎯 Acessibilidade

### Navegação por Teclado
- **Tab**: Navegar entre elementos focáveis
- **Enter**: Executar ação do botão em foco
- **Enter no input**: Submeter chute

### Semântica HTML
- **H1**: Título principal
- **Labels**: Associados aos inputs
- **Buttons**: Elementos button nativos
- **ARIA**: Atributos para leitores de tela

### Contraste
- **Texto**: Mínimo 4.5:1 com background
- **Botões**: Estados visualmente distintos
- **Focus**: Indicadores claros de foco

## 🔧 Implementação

### Estrutura HTML
```html
<div class="container">
  <h1>Título</h1>
  <p>Descrição</p>
  <div class="jogo-area">
    <input type="number" id="chuteInput">
    <button id="botaoChutar">Chutar</button>
  </div>
  <p id="mensagem">Feedback</p>
  <button id="botaoReiniciar">Reiniciar</button>
  <div class="placar">
    <p>Tentativas: <span id="contador">0</span></p>
  </div>
</div>
```

### Classes CSS Principais
- `.container`: Layout principal
- `.jogo-area`: Área de interação
- `.status-inicial`: Estado inicial
- `.acerto`: Estado de vitória
- `.erro-quente`: Estado erro quente
- `.erro-frio`: Estado erro frio
- `.oculto`: Elemento escondido
- `.placar`: Área do contador

### JavaScript - Funções Principais
- `iniciarJogo()`: Reset do jogo
- `processarChute()`: Validar e processar entrada
- `mostrarMensagem()`: Atualizar feedback
- `finalizarJogo()`: Estado de vitória

## 📊 Métricas de UX

### Objetivos
- **Tempo médio por partida**: 2-5 minutos
- **Taxa de conclusão**: > 90%
- **Tentativas médias**: 5-8 tentativas
- **Satisfação**: Interface intuitiva e responsiva

### KPIs
- **Engajamento**: Número de partidas por sessão
- **Retenção**: Usuários que jogam múltiplas vezes
- **Performance**: Tempo de carregamento < 2s
- **Acessibilidade**: Compatibilidade com leitores de tela