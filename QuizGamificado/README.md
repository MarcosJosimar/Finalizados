# 🎮 Quiz Gamificado - Programação

Um quiz interativo e gamificado para testar e melhorar seus conhecimentos em programação!

## 🌟 Características

### 💻 Linguagens Suportadas
- **C#** - Linguagem de programação da Microsoft
- **HTML** - Estrutura de páginas web
- **CSS** - Estilização e layout
- **JavaScript** - Programação web interativa
- **Angular** - Framework web moderno

### 🎯 Sistema de Gamificação

#### Pontos e Níveis
- ✅ **Iniciante**: 10 pontos por questão
- ⚡ **Intermediário**: 20 pontos por questão
- 🔥 **Avançado**: 30 pontos por questão
- 📊 **Sistema de Níveis**: A cada 100 pontos você sobe de nível!

#### Títulos Progressivos
1. 🌱 **Novato** (Nível 1)
2. 📚 **Aprendiz** (Níveis 2-3)
3. 💻 **Desenvolvedor** (Níveis 4-5)
4. ⚙️ **Programador** (Níveis 6-7)
5. ⭐ **Especialista** (Níveis 8-9)
6. 🏆 **Mestre** (Nível 10+)

#### Conquistas Desbloqueáveis
- 🎯 **Primeira Vitória** - Acerte sua primeira questão
- 🔥 **Série de 5** - Acerte 5 questões
- 💯 **Série de 10** - Acerte 10 questões
- 🏆 **Mestre** - Acerte 20 ou mais questões
- 🔷 **Especialista C#** - Ganhe 100 pontos em C#
- 🌐 **Web Master** - Ganhe 50 pontos em HTML, CSS e JavaScript
- 🅰️ **Angular Expert** - Ganhe 100 pontos em Angular
- 🎓 **Polímata** - Ganhe pelo menos 30 pontos em todas as linguagens
- ✨ **Perfeccionista** - Complete 10 questões sem errar nenhuma

### 🎨 Interface Moderna
- Design responsivo e mobile-first
- Animações suaves e transições
- Tema escuro com gradientes vibrantes
- Feedback visual imediato
- Partículas animadas de fundo

## 📁 Estrutura do Projeto

```
QuizGamificado/
├── Backend/                    # Código C# (lógica do servidor)
│   ├── Question.cs            # Classes de questões e enums
│   ├── Player.cs              # Sistema de jogadores
│   └── QuizEngine.cs          # Motor do quiz
├── Frontend/                   # Interface web
│   ├── index.html             # Página principal
│   ├── css/
│   │   └── styles.css         # Estilos e animações
│   ├── js/
│   │   ├── questions.js       # Banco de perguntas
│   │   └── game.js            # Lógica do jogo
│   └── assets/                # Recursos (imagens, sons)
└── Data/                       # Dados persistentes
```

## 🚀 Como Executar

### Opção 1: Executar Frontend (Recomendado)

1. Navegue até a pasta Frontend:
```bash
cd QuizGamificado/Frontend
```

2. Abra o arquivo `index.html` em seu navegador:
   - **Windows**: `start index.html`
   - **Linux**: `xdg-open index.html`
   - **Mac**: `open index.html`

Ou simplesmente arraste o arquivo `index.html` para o navegador!

### Opção 2: Usar um Servidor Local

#### Com Python:
```bash
cd QuizGamificado/Frontend
python -m http.server 8000
```
Acesse: http://localhost:8000

#### Com Node.js (http-server):
```bash
npm install -g http-server
cd QuizGamificado/Frontend
http-server
```
Acesse: http://localhost:8080

#### Com VS Code:
- Instale a extensão "Live Server"
- Clique com botão direito em `index.html`
- Selecione "Open with Live Server"

### Opção 3: Backend C# (Desenvolvimento Futuro)

O backend C# está pronto para integração com uma API REST. Para usar:

1. Crie um novo projeto ASP.NET Core Web API
2. Copie os arquivos `.cs` para o projeto
3. Configure endpoints REST
4. Atualize o frontend para consumir a API

## 🎮 Como Jogar

1. **Digite seu nome** na tela inicial
2. **Escolha a linguagem** (ou todas) que deseja praticar
3. **Selecione o nível** de dificuldade (ou todos)
4. **Clique em "Iniciar Quiz"**
5. **Responda as questões** clicando na resposta correta
6. **Veja seu feedback** após cada questão
7. **Acompanhe seu progresso** na barra superior
8. **Desbloqueie conquistas** conforme avança
9. **Veja seus resultados** ao final do quiz
10. **Jogue novamente** para melhorar sua pontuação!

## 📊 Recursos

### Salvamento Automático
- Seu progresso é salvo automaticamente no navegador
- Pontos, nível e conquistas são mantidos entre sessões
- Use localStorage para persistência local

### Estatísticas Detalhadas
- Total de questões respondidas
- Taxa de acerto (precisão)
- Pontos por linguagem
- Histórico de conquistas
- Evolução de nível

### Filtros Inteligentes
- Filtre por linguagem específica
- Filtre por nível de dificuldade
- Combine filtros para treino focado
- Questões embaralhadas a cada sessão

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna
  - Flexbox & Grid
  - Animações CSS
  - Custom Properties (variáveis)
  - Gradientes
- **JavaScript ES6+** - Lógica do jogo
  - Arrow functions
  - Template literals
  - Destructuring
  - LocalStorage API

### Backend (C#)
- **C# 10+** - Lógica do servidor
- **.NET 6+** - Framework
- **LINQ** - Consultas
- **Design Patterns** - POO

### Fontes
- **Google Fonts** - Poppins

## 🎨 Paleta de Cores

```css
Primary:    #6366f1 (Indigo)
Secondary:  #8b5cf6 (Purple)
Accent:     #ec4899 (Pink)
Success:    #10b981 (Green)
Error:      #ef4444 (Red)
Warning:    #f59e0b (Amber)
```

## 📝 Banco de Perguntas

Atualmente o quiz contém:
- **8 perguntas de C#** (3 iniciante, 3 intermediário, 2 avançado)
- **8 perguntas de HTML** (3 iniciante, 2 intermediário, 3 avançado)
- **8 perguntas de CSS** (3 iniciante, 3 intermediário, 2 avançado)
- **8 perguntas de JavaScript** (3 iniciante, 2 intermediário, 3 avançado)
- **8 perguntas de Angular** (3 iniciante, 2 intermediário, 3 avançado)

**Total: 40+ perguntas** cobrindo tópicos essenciais de cada linguagem!

## 🔧 Personalização

### Adicionar Novas Perguntas

Edite o arquivo `Frontend/js/questions.js`:

```javascript
{
    id: 999,
    text: "Sua pergunta aqui?",
    options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
    correctAnswer: 0, // Índice da resposta correta (0-3)
    difficulty: "iniciante", // iniciante, intermediario ou avancado
    language: "C#", // C#, HTML, CSS, JavaScript ou Angular
    explanation: "Explicação detalhada da resposta",
    points: 10 // 10, 20 ou 30
}
```

### Modificar Cores

Edite as variáveis CSS em `Frontend/css/styles.css`:

```css
:root {
    --primary: #6366f1;
    --secondary: #8b5cf6;
    /* ... outras cores ... */
}
```

### Ajustar Sistema de Níveis

Edite a função `checkLevelUp()` em `Frontend/js/game.js`:

```javascript
const newLevel = Math.floor(gameState.player.points / 100) + 1;
// Altere 100 para o número de pontos por nível desejado
```

## 🐛 Resolução de Problemas

### Progresso não está salvando
- Verifique se o navegador permite localStorage
- Limpe o cache do navegador
- Tente em modo anônimo para testar

### Animações não funcionam
- Atualize seu navegador para a versão mais recente
- Verifique se JavaScript está habilitado
- Desabilite extensões que possam interferir

### Questões não aparecem
- Verifique o console do navegador (F12)
- Certifique-se que `questions.js` foi carregado
- Verifique os filtros selecionados

## 🚧 Melhorias Futuras

- [ ] Modo multiplayer
- [ ] Ranking global
- [ ] Temporizador por questão
- [ ] Modo treino infinito
- [ ] Exportar resultados (PDF)
- [ ] Gráficos de evolução
- [ ] Temas personalizáveis
- [ ] Modo escuro/claro
- [ ] PWA (Progressive Web App)
- [ ] Integração com backend
- [ ] Sistema de usuários
- [ ] Adicionar mais linguagens (Python, Java, etc.)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork este repositório
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 💡 Ideias de Uso

- **Estudantes**: Pratique antes de provas
- **Professores**: Use em sala de aula
- **Empresas**: Avalie conhecimento de candidatos
- **Desenvolvedores**: Teste seus conhecimentos
- **Bootcamps**: Material de apoio

## 🌟 Agradecimentos

Desenvolvido com 💙 para ajudar desenvolvedores a aprender e se divertir!

---

**Versão**: 1.0.0
**Última Atualização**: 2025-11-13

## 📞 Suporte

Encontrou um bug? Tem uma sugestão? Abra uma issue!

**Divirta-se aprendendo! 🚀**
