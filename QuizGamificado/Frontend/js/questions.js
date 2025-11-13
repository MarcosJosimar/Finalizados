// Banco de Perguntas do Quiz Gamificado
// Estrutura: { id, text, options, correctAnswer, difficulty, language, explanation, points }

const allQuestions = [
    // ======================================
    // C# - Perguntas
    // ======================================
    {
        id: 1,
        text: "Qual palavra-chave é usada para declarar uma variável constante em C#?",
        options: ["var", "const", "let", "final"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "C#",
        explanation: "Em C#, 'const' é usado para declarar constantes em tempo de compilação. Constantes devem ser inicializadas no momento da declaração e não podem ser modificadas.",
        points: 10
    },
    {
        id: 2,
        text: "Qual é o tipo de dados para números inteiros em C#?",
        options: ["float", "int", "double", "decimal"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "C#",
        explanation: "'int' é o tipo básico para números inteiros em C#. Ele armazena valores de -2,147,483,648 a 2,147,483,647.",
        points: 10
    },
    {
        id: 3,
        text: "Como você inicia um comentário de uma linha em C#?",
        options: ["/* */", "//", "#", "<!--"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "C#",
        explanation: "// é usado para comentários de uma linha em C#. Para comentários de múltiplas linhas, use /* */.",
        points: 10
    },
    {
        id: 4,
        text: "O que é LINQ em C#?",
        options: [
            "Uma biblioteca de interface gráfica",
            "Language Integrated Query - consultas integradas à linguagem",
            "Um framework web",
            "Um compilador"
        ],
        correctAnswer: 1,
        difficulty: "intermediario",
        language: "C#",
        explanation: "LINQ (Language Integrated Query) permite consultas SQL-like em coleções C# de forma integrada, proporcionando uma sintaxe consistente para consultar diferentes fontes de dados.",
        points: 20
    },
    {
        id: 5,
        text: "Qual modificador de acesso torna um membro acessível apenas dentro da classe?",
        options: ["public", "private", "protected", "internal"],
        correctAnswer: 1,
        difficulty: "intermediario",
        language: "C#",
        explanation: "'private' restringe o acesso ao membro apenas dentro da própria classe. É o modificador padrão para membros de classe.",
        points: 20
    },
    {
        id: 6,
        text: "O que são delegates em C#?",
        options: [
            "Métodos estáticos",
            "Tipos que representam referências a métodos",
            "Classes abstratas",
            "Interfaces"
        ],
        correctAnswer: 1,
        difficulty: "avancado",
        language: "C#",
        explanation: "Delegates são tipos que encapsulam referências a métodos com uma assinatura específica, permitindo programação funcional e callbacks.",
        points: 30
    },
    {
        id: 7,
        text: "Qual palavra-chave é usada para implementar programação assíncrona em C#?",
        options: ["await", "sync", "thread", "parallel"],
        correctAnswer: 0,
        difficulty: "avancado",
        language: "C#",
        explanation: "'await' é usado junto com 'async' para programação assíncrona em C#, permitindo operações não-bloqueantes.",
        points: 30
    },
    {
        id: 8,
        text: "Qual é a diferença entre 'string' e 'String' em C#?",
        options: [
            "Não há diferença, são aliases",
            "String é mais rápido",
            "string é mutável",
            "São completamente diferentes"
        ],
        correctAnswer: 0,
        difficulty: "intermediario",
        language: "C#",
        explanation: "'string' (minúsculo) é um alias do C# para System.String. Ambos são a mesma coisa, mas 'string' é preferido por convenção.",
        points: 20
    },

    // ======================================
    // HTML - Perguntas
    // ======================================
    {
        id: 101,
        text: "Qual tag HTML é usada para criar um título principal?",
        options: ["<title>", "<h1>", "<header>", "<head>"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "HTML",
        explanation: "<h1> é a tag para o título principal (heading 1) de uma página. É importante para SEO e acessibilidade.",
        points: 10
    },
    {
        id: 102,
        text: "Qual atributo HTML é usado para definir estilos inline?",
        options: ["class", "style", "css", "design"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "HTML",
        explanation: "O atributo 'style' permite adicionar CSS diretamente no elemento HTML, embora não seja a prática recomendada para projetos grandes.",
        points: 10
    },
    {
        id: 103,
        text: "Qual tag é usada para criar um link?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "HTML",
        explanation: "A tag <a> (anchor) é usada para criar hyperlinks. O atributo 'href' especifica o destino do link.",
        points: 10
    },
    {
        id: 104,
        text: "Qual é a diferença entre <div> e <span>?",
        options: [
            "Não há diferença",
            "<div> é block-level e <span> é inline",
            "<span> é block-level e <div> é inline",
            "São a mesma coisa"
        ],
        correctAnswer: 1,
        difficulty: "intermediario",
        language: "HTML",
        explanation: "<div> é um elemento de bloco que ocupa toda a largura disponível, enquanto <span> é inline e ocupa apenas o espaço necessário.",
        points: 20
    },
    {
        id: 105,
        text: "Qual tag HTML5 é semântica para conteúdo principal?",
        options: ["<content>", "<main>", "<section>", "<article>"],
        correctAnswer: 1,
        difficulty: "intermediario",
        language: "HTML",
        explanation: "A tag <main> representa o conteúdo principal do documento. Deve haver apenas uma por página.",
        points: 20
    },
    {
        id: 106,
        text: "O que é Shadow DOM?",
        options: [
            "Uma biblioteca JavaScript",
            "Encapsulamento de DOM e estilos em Web Components",
            "Um framework CSS",
            "Uma API de animação"
        ],
        correctAnswer: 1,
        difficulty: "avancado",
        language: "HTML",
        explanation: "Shadow DOM permite encapsular estrutura, estilo e comportamento em Web Components, isolando-os do resto da página.",
        points: 30
    },
    {
        id: 107,
        text: "Qual atributo torna um script assíncrono?",
        options: ["defer", "async", "sync", "load"],
        correctAnswer: 1,
        difficulty: "avancado",
        language: "HTML",
        explanation: "O atributo 'async' faz o script carregar de forma assíncrona sem bloquear o parsing do HTML.",
        points: 30
    },
    {
        id: 108,
        text: "Qual tag cria uma lista não ordenada?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "HTML",
        explanation: "<ul> cria uma lista não ordenada (com marcadores), enquanto <ol> cria uma lista ordenada (numerada).",
        points: 10
    },

    // ======================================
    // CSS - Perguntas
    // ======================================
    {
        id: 201,
        text: "Qual propriedade CSS muda a cor do texto?",
        options: ["font-color", "text-color", "color", "foreground"],
        correctAnswer: 2,
        difficulty: "iniciante",
        language: "CSS",
        explanation: "A propriedade 'color' define a cor do texto em CSS. Aceita valores como nomes, hexadecimal, RGB, HSL, etc.",
        points: 10
    },
    {
        id: 202,
        text: "Como você seleciona uma classe em CSS?",
        options: ["#classe", ".classe", "*classe", "@classe"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "CSS",
        explanation: "O ponto (.) é usado para selecionar classes CSS. O # seleciona IDs, e * seleciona todos os elementos.",
        points: 10
    },
    {
        id: 203,
        text: "Qual propriedade controla o tamanho da fonte?",
        options: ["text-size", "font-size", "size", "font-style"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "CSS",
        explanation: "'font-size' é a propriedade que controla o tamanho do texto. Pode usar unidades como px, em, rem, %, etc.",
        points: 10
    },
    {
        id: 204,
        text: "O que é Flexbox?",
        options: [
            "Um framework CSS",
            "Um modelo de layout unidimensional",
            "Uma biblioteca JavaScript",
            "Um preprocessador"
        ],
        correctAnswer: 1,
        difficulty: "intermediario",
        language: "CSS",
        explanation: "Flexbox é um modelo de layout CSS para arranjo unidimensional de elementos, facilitando alinhamento e distribuição de espaço.",
        points: 20
    },
    {
        id: 205,
        text: "Qual propriedade cria espaço dentro de um elemento?",
        options: ["margin", "padding", "spacing", "border"],
        correctAnswer: 1,
        difficulty: "intermediario",
        language: "CSS",
        explanation: "'padding' cria espaço interno (entre o conteúdo e a borda), enquanto 'margin' cria espaço externo (fora da borda).",
        points: 20
    },
    {
        id: 206,
        text: "O que é CSS Grid?",
        options: [
            "Um framework",
            "Sistema de layout bidimensional",
            "Uma biblioteca",
            "Um tipo de seletor"
        ],
        correctAnswer: 1,
        difficulty: "avancado",
        language: "CSS",
        explanation: "CSS Grid é um sistema de layout bidimensional para linhas e colunas, perfeito para layouts complexos.",
        points: 30
    },
    {
        id: 207,
        text: "O que são CSS Custom Properties (variáveis CSS)?",
        options: [
            "Propriedades padrão",
            "Valores reutilizáveis definidos com --",
            "Classes especiais",
            "Funções CSS"
        ],
        correctAnswer: 1,
        difficulty: "avancado",
        language: "CSS",
        explanation: "Custom Properties permitem definir valores reutilizáveis com -- e usar com var(). Exemplo: --cor-primaria: blue; color: var(--cor-primaria);",
        points: 30
    },
    {
        id: 208,
        text: "Qual pseudo-classe seleciona o primeiro filho?",
        options: [":first", ":first-child", ":child-1", ":nth-child(1)"],
        correctAnswer: 1,
        difficulty: "intermediario",
        language: "CSS",
        explanation: ":first-child seleciona o primeiro elemento filho de seu pai. Também pode usar :nth-child(1) para o mesmo efeito.",
        points: 20
    },

    // ======================================
    // JavaScript - Perguntas
    // ======================================
    {
        id: 301,
        text: "Como você declara uma variável em JavaScript?",
        options: ["var, let, const", "int, float, string", "variable", "dim"],
        correctAnswer: 0,
        difficulty: "iniciante",
        language: "JavaScript",
        explanation: "JavaScript usa var (escopo de função), let (escopo de bloco) e const (constante de escopo de bloco) para declarar variáveis.",
        points: 10
    },
    {
        id: 302,
        text: "Qual método exibe uma mensagem de alerta?",
        options: ["msg()", "alert()", "message()", "popup()"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "JavaScript",
        explanation: "alert() exibe uma caixa de diálogo com mensagem no navegador. É útil para debugging rápido, mas não recomendado em produção.",
        points: 10
    },
    {
        id: 303,
        text: "Como você escreve no console do navegador?",
        options: ["console.write()", "console.log()", "log()", "print()"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "JavaScript",
        explanation: "console.log() é usado para exibir mensagens no console do navegador, essencial para debugging.",
        points: 10
    },
    {
        id: 304,
        text: "O que é uma Promise em JavaScript?",
        options: [
            "Um loop",
            "Um objeto que representa conclusão ou falha de operação assíncrona",
            "Uma função",
            "Um array"
        ],
        correctAnswer: 1,
        difficulty: "intermediario",
        language: "JavaScript",
        explanation: "Promises representam valores que podem estar disponíveis agora, no futuro, ou nunca. Têm três estados: pending, fulfilled e rejected.",
        points: 20
    },
    {
        id: 305,
        text: "Qual a diferença entre '==' e '===' ?",
        options: [
            "Não há diferença",
            "=== compara valor e tipo, == apenas valor",
            "== compara valor e tipo, === apenas valor",
            "São iguais"
        ],
        correctAnswer: 1,
        difficulty: "intermediario",
        language: "JavaScript",
        explanation: "=== é comparação estrita (valor e tipo devem ser iguais), enquanto == faz coerção de tipo antes de comparar.",
        points: 20
    },
    {
        id: 306,
        text: "O que é Closure em JavaScript?",
        options: [
            "Um método de array",
            "Função que tem acesso ao escopo da função externa",
            "Uma classe",
            "Um loop"
        ],
        correctAnswer: 1,
        difficulty: "avancado",
        language: "JavaScript",
        explanation: "Closure permite que uma função acesse variáveis do escopo externo mesmo após a execução da função externa ter terminado.",
        points: 30
    },
    {
        id: 307,
        text: "O que é Event Loop?",
        options: [
            "Um tipo de loop",
            "Mecanismo que gerencia execução de código assíncrono",
            "Uma função",
            "Um evento"
        ],
        correctAnswer: 1,
        difficulty: "avancado",
        language: "JavaScript",
        explanation: "Event Loop gerencia a fila de execução em JavaScript, permitindo operações não-bloqueantes e assíncronas.",
        points: 30
    },
    {
        id: 308,
        text: "Qual método adiciona um elemento ao final de um array?",
        options: ["add()", "push()", "append()", "insert()"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "JavaScript",
        explanation: "push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.",
        points: 10
    },

    // ======================================
    // Angular - Perguntas
    // ======================================
    {
        id: 401,
        text: "O que é Angular?",
        options: [
            "Uma biblioteca JavaScript",
            "Um framework para aplicações web",
            "Uma linguagem de programação",
            "Um banco de dados"
        ],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "Angular",
        explanation: "Angular é um framework TypeScript para construir aplicações web SPA (Single Page Application) desenvolvido pelo Google.",
        points: 10
    },
    {
        id: 402,
        text: "Qual comando cria um novo projeto Angular?",
        options: ["ng create", "ng new", "ng init", "ng start"],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "Angular",
        explanation: "'ng new' é o comando da Angular CLI para criar novos projetos com toda a estrutura necessária.",
        points: 10
    },
    {
        id: 403,
        text: "O que é um Component em Angular?",
        options: [
            "Um arquivo CSS",
            "Bloco de construção básico da UI",
            "Uma biblioteca",
            "Um servidor"
        ],
        correctAnswer: 1,
        difficulty: "iniciante",
        language: "Angular",
        explanation: "Components são os blocos fundamentais que controlam uma parte da tela (view). Cada componente tem HTML, CSS e TypeScript.",
        points: 10
    },
    {
        id: 404,
        text: "O que é Data Binding em Angular?",
        options: [
            "Uma biblioteca",
            "Sincronização entre model e view",
            "Um componente",
            "Uma diretiva"
        ],
        correctAnswer: 1,
        difficulty: "intermediario",
        language: "Angular",
        explanation: "Data Binding sincroniza dados entre o componente TypeScript (model) e o template HTML (view) automaticamente.",
        points: 20
    },
    {
        id: 405,
        text: "O que são Services em Angular?",
        options: [
            "Componentes especiais",
            "Classes para lógica de negócio e compartilhamento de dados",
            "Estilos CSS",
            "Rotas"
        ],
        correctAnswer: 1,
        difficulty: "intermediario",
        language: "Angular",
        explanation: "Services são classes singleton para lógica de negócio reutilizável, chamadas de API e compartilhamento de dados entre componentes.",
        points: 20
    },
    {
        id: 406,
        text: "O que é RxJS em Angular?",
        options: [
            "Um framework CSS",
            "Biblioteca para programação reativa com Observables",
            "Um servidor",
            "Uma linguagem"
        ],
        correctAnswer: 1,
        difficulty: "avancado",
        language: "Angular",
        explanation: "RxJS permite programação reativa usando Observables para gerenciar operações assíncronas e streams de dados.",
        points: 30
    },
    {
        id: 407,
        text: "O que é Change Detection em Angular?",
        options: [
            "Um método HTTP",
            "Mecanismo que detecta e propaga mudanças no estado",
            "Uma diretiva",
            "Um pipe"
        ],
        correctAnswer: 1,
        difficulty: "avancado",
        language: "Angular",
        explanation: "Change Detection verifica quando dados mudam e atualiza a view automaticamente para refletir essas mudanças.",
        points: 30
    },
    {
        id: 408,
        text: "Qual decorador marca uma classe como componente?",
        options: ["@Component", "@Directive", "@Injectable", "@NgModule"],
        correctAnswer: 0,
        difficulty: "intermediario",
        language: "Angular",
        explanation: "@Component é o decorador que marca uma classe como componente Angular, definindo selector, template e estilos.",
        points: 20
    }
];

// Função para filtrar perguntas
function filterQuestions(language = 'all', difficulty = 'all') {
    let filtered = [...allQuestions];

    if (language !== 'all') {
        const languageMap = {
            'csharp': 'C#',
            'html': 'HTML',
            'css': 'CSS',
            'javascript': 'JavaScript',
            'angular': 'Angular'
        };
        filtered = filtered.filter(q => q.language === languageMap[language]);
    }

    if (difficulty !== 'all') {
        filtered = filtered.filter(q => q.difficulty === difficulty);
    }

    // Embaralha as perguntas
    return filtered.sort(() => Math.random() - 0.5);
}

// Função para obter emoji da linguagem
function getLanguageEmoji(language) {
    const emojiMap = {
        'C#': '🔷',
        'HTML': '🌐',
        'CSS': '🎨',
        'JavaScript': '⚡',
        'Angular': '🅰️'
    };
    return emojiMap[language] || '💻';
}

// Função para obter cor da dificuldade
function getDifficultyColor(difficulty) {
    const colorMap = {
        'iniciante': '#10b981',
        'intermediario': '#f59e0b',
        'avancado': '#ef4444'
    };
    return colorMap[difficulty] || '#6366f1';
}

// Exporta as funções e dados
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        allQuestions,
        filterQuestions,
        getLanguageEmoji,
        getDifficultyColor
    };
}
