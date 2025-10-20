# 🎮 Jogo "Acerte o Número" - MaratonaTech

Um jogo interativo e responsivo onde o objetivo é adivinhar um número secreto entre 1 e 100, com sistema de dicas "quente" e "frio".

## 🚀 [Jogar Agora](https://gabsavila.github.io/acerte-o-numero/)

## 📋 Sobre o Projeto

Este é um jogo web desenvolvido com HTML5, CSS3 e JavaScript vanilla. O jogo oferece uma experiência interativa e educativa, perfeita para todas as idades.

### ✨ Funcionalidades

- 🎯 **Sistema de Dicas Inteligente**: Feedback "quente/frio" baseado na proximidade do número
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🎨 **Interface Moderna**: Design clean com gradientes e animações suaves
- ⌨️ **Acessibilidade**: Suporte completo a navegação por teclado
- 🔄 **Reinicialização Rápida**: Comece um novo jogo a qualquer momento
- 📊 **Contador de Tentativas**: Acompanhe seu progresso em tempo real

### 🎮 Como Jogar

1. **Digite um número** entre 1 e 100 no campo de entrada
2. **Clique em "Chutar"** ou pressione Enter
3. **Receba dicas** sobre sua tentativa:
   - 🧊 **Muito Frio**: Diferença > 25
   - ❄️ **Frio**: Diferença 16-25  
   - 🌡️ **Quente**: Diferença 6-15
   - 🔥 **Muito Quente**: Diferença ≤ 5
4. **Continue tentando** até acertar o número secreto!
5. **Celebre a vitória** e reinicie para jogar novamente

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com Flexbox e Grid
- **JavaScript ES6+**: Lógica do jogo e interatividade
- **SVG**: Ícones e elementos gráficos vetorizados

## 📁 Estrutura do Projeto

```
📦 acerte-o-numero/
├── 📄 index.html                   # Página principal do jogo
├── 🎨 style.css                    # Estilos e design responsivo
├── ⚡ script.js                    # Lógica do jogo e interações
├── 📐 wireframe.html               # Wireframe visual do projeto
├── 📋 wireframe-documentado.md     # Documentação do wireframe
└── 📖 README.md                    # Este arquivo
```

## 🎨 Design e UX

### Paleta de Cores
- **Primária**: Gradiente azul (#667eea → #764ba2)
- **Sucesso**: Verde (#4caf50)
- **Alerta**: Laranja (#f57c00)
- **Info**: Azul (#17a2b8)
- **Neutro**: Cinza (#6c757d)

### Responsividade
- **Desktop**: Layout horizontal otimizado
- **Tablet**: Elementos adaptados para touch
- **Mobile**: Interface empilhada verticalmente


## 📊 Funcionalidades Técnicas

### Validações
- ✅ Entrada apenas numérica (1-100)
- ✅ Prevenção de valores inválidos
- ✅ Feedback imediato para erros

### Interatividade
- ✅ Suporte a mouse e teclado
- ✅ Animações CSS suaves
- ✅ Estados visuais dinâmicos
- ✅ Feedback sonoro (opcional)

### Performance
- ✅ Carregamento rápido (< 2s)
- ✅ Código otimizado
- ✅ Sem dependências externas
- ✅ Compatível com todos os navegadores modernos
