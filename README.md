# 🎮 Jogo "Acerte o Número" - MaratonaTech

Um jogo interativo e responsivo onde o objetivo é adivinhar um número secreto entre 1 e 100, com sistema de dicas "quente" e "frio".

## 🚀 [Jogar Agora](https://github.com/gabsavila/acerte-o-numero/)

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
├── 📄 index.html          # Página principal do jogo
├── 🎨 style.css           # Estilos e design responsivo
├── ⚡ script.js           # Lógica do jogo e interações
├── 📐 wireframe.html      # Wireframe visual do projeto
├── 📋 wireframe-documentado.md # Documentação do wireframe
└── 📖 README.md           # Este arquivo
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

## 🚀 Como Executar Localmente

### Opção 1: Servidor Python
```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO

# Inicie um servidor local
python -m http.server 8000

# Acesse no navegador
http://localhost:8000
```

### Opção 2: Live Server (VS Code)
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

### Opção 3: Abrir Diretamente
- Simplesmente abra o arquivo `index.html` no seu navegador

## 🌐 Deploy no GitHub Pages

### Passo a Passo:

1. **Criar Repositório no GitHub**
2. **Fazer Upload dos Arquivos**
3. **Ativar GitHub Pages**
4. **Acessar o Site Online**

[Ver guia completo de deploy →](DEPLOY_GUIDE.md)

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

## 🎯 Roadmap Futuro

- [ ] 🔊 Efeitos sonoros
- [ ] 🏆 Sistema de pontuação
- [ ] 📈 Estatísticas de jogos
- [ ] 🌙 Modo escuro
- [ ] 🌍 Múltiplos idiomas
- [ ] 👥 Modo multiplayer
- [ ] 📱 PWA (Progressive Web App)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)

## 🙏 Agradecimentos

- MaratonaTech pela inspiração
- Comunidade de desenvolvedores
- Todos que testaram e deram feedback

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐

🎮 **[Jogar Agora](https://SEU_USUARIO.github.io/SEU_REPOSITORIO/)** | 📋 **[Ver Wireframe](wireframe.html)** | 🐛 **[Reportar Bug](https://github.com/SEU_USUARIO/SEU_REPOSITORIO/issues)**
