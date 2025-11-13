using System;
using System.Collections.Generic;
using System.Linq;

namespace QuizGamificado.Backend
{
    /// <summary>
    /// Motor do quiz - gerencia perguntas e pontuação
    /// </summary>
    public class QuizEngine
    {
        private List<Question> allQuestions;
        private List<Question> currentSessionQuestions;
        private int currentQuestionIndex;
        public Player CurrentPlayer { get; private set; }

        public QuizEngine()
        {
            allQuestions = new List<Question>();
            currentSessionQuestions = new List<Question>();
            currentQuestionIndex = 0;
            LoadQuestions();
        }

        /// <summary>
        /// Inicia uma nova sessão de quiz
        /// </summary>
        public void StartNewSession(string playerName, ProgrammingLanguage? language = null, DifficultyLevel? difficulty = null)
        {
            CurrentPlayer = new Player(playerName);
            currentQuestionIndex = 0;

            // Filtra perguntas
            var filteredQuestions = allQuestions.AsEnumerable();

            if (language.HasValue)
            {
                filteredQuestions = filteredQuestions.Where(q => q.Language == language.Value);
            }

            if (difficulty.HasValue)
            {
                filteredQuestions = filteredQuestions.Where(q => q.Difficulty == difficulty.Value);
            }

            // Embaralha as perguntas
            currentSessionQuestions = filteredQuestions.OrderBy(x => Guid.NewGuid()).ToList();
        }

        /// <summary>
        /// Retorna a próxima pergunta
        /// </summary>
        public Question GetNextQuestion()
        {
            if (currentQuestionIndex >= currentSessionQuestions.Count)
            {
                return null;
            }

            return currentSessionQuestions[currentQuestionIndex];
        }

        /// <summary>
        /// Submete uma resposta
        /// </summary>
        public QuizResult SubmitAnswer(int answerIndex)
        {
            var currentQuestion = currentSessionQuestions[currentQuestionIndex];
            bool isCorrect = currentQuestion.IsCorrect(answerIndex);

            QuizResult result = new QuizResult
            {
                IsCorrect = isCorrect,
                Points = isCorrect ? currentQuestion.GetPoints() : 0,
                CorrectAnswerIndex = currentQuestion.CorrectAnswerIndex,
                Explanation = currentQuestion.Explanation,
                PlayerAnswer = answerIndex
            };

            if (isCorrect)
            {
                CurrentPlayer.CorrectAnswers++;
                CurrentPlayer.AddPoints(result.Points, currentQuestion.Language);
            }
            else
            {
                CurrentPlayer.WrongAnswers++;
            }

            currentQuestionIndex++;
            return result;
        }

        /// <summary>
        /// Retorna estatísticas da sessão atual
        /// </summary>
        public SessionStats GetSessionStats()
        {
            return new SessionStats
            {
                TotalQuestions = currentQuestionIndex,
                CorrectAnswers = CurrentPlayer.CorrectAnswers,
                WrongAnswers = CurrentPlayer.WrongAnswers,
                TotalPoints = CurrentPlayer.TotalPoints,
                Accuracy = CurrentPlayer.GetAccuracy(),
                Level = CurrentPlayer.Level,
                Title = CurrentPlayer.GetTitle(),
                Achievements = CurrentPlayer.Achievements
            };
        }

        /// <summary>
        /// Carrega todas as perguntas
        /// </summary>
        private void LoadQuestions()
        {
            LoadCSharpQuestions();
            LoadHTMLQuestions();
            LoadCSSQuestions();
            LoadJavaScriptQuestions();
            LoadAngularQuestions();
        }

        private void LoadCSharpQuestions()
        {
            // Perguntas C# - Iniciante
            allQuestions.Add(new Question
            {
                Id = 1,
                Text = "Qual palavra-chave é usada para declarar uma variável constante em C#?",
                Options = new List<string> { "var", "const", "let", "final" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.CSharp,
                Explanation = "Em C#, 'const' é usado para declarar constantes em tempo de compilação."
            });

            allQuestions.Add(new Question
            {
                Id = 2,
                Text = "Qual é o tipo de dados para números inteiros em C#?",
                Options = new List<string> { "float", "int", "double", "decimal" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.CSharp,
                Explanation = "'int' é o tipo básico para números inteiros em C#."
            });

            allQuestions.Add(new Question
            {
                Id = 3,
                Text = "Como você inicia um comentário de uma linha em C#?",
                Options = new List<string> { "/* */", "//", "#", "<!--" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.CSharp,
                Explanation = "// é usado para comentários de uma linha em C#."
            });

            // Intermediário
            allQuestions.Add(new Question
            {
                Id = 4,
                Text = "O que é LINQ em C#?",
                Options = new List<string> {
                    "Uma biblioteca de interface gráfica",
                    "Language Integrated Query - consultas integradas à linguagem",
                    "Um framework web",
                    "Um compilador"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Intermediario,
                Language = ProgrammingLanguage.CSharp,
                Explanation = "LINQ permite consultas SQL-like em coleções C# de forma integrada."
            });

            allQuestions.Add(new Question
            {
                Id = 5,
                Text = "Qual modificador de acesso torna um membro acessível apenas dentro da classe?",
                Options = new List<string> { "public", "private", "protected", "internal" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Intermediario,
                Language = ProgrammingLanguage.CSharp,
                Explanation = "'private' restringe o acesso ao membro apenas dentro da própria classe."
            });

            // Avançado
            allQuestions.Add(new Question
            {
                Id = 6,
                Text = "O que são delegates em C#?",
                Options = new List<string> {
                    "Métodos estáticos",
                    "Tipos que representam referências a métodos",
                    "Classes abstratas",
                    "Interfaces"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Avancado,
                Language = ProgrammingLanguage.CSharp,
                Explanation = "Delegates são tipos que encapsulam referências a métodos, permitindo programação funcional."
            });

            allQuestions.Add(new Question
            {
                Id = 7,
                Text = "Qual palavra-chave é usada para implementar programação assíncrona em C#?",
                Options = new List<string> { "await", "sync", "thread", "parallel" },
                CorrectAnswerIndex = 0,
                Difficulty = DifficultyLevel.Avancado,
                Language = ProgrammingLanguage.CSharp,
                Explanation = "'await' é usado junto com 'async' para programação assíncrona em C#."
            });
        }

        private void LoadHTMLQuestions()
        {
            // Iniciante
            allQuestions.Add(new Question
            {
                Id = 101,
                Text = "Qual tag HTML é usada para criar um título principal?",
                Options = new List<string> { "<title>", "<h1>", "<header>", "<head>" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.HTML,
                Explanation = "<h1> é a tag para o título principal (heading 1) de uma página."
            });

            allQuestions.Add(new Question
            {
                Id = 102,
                Text = "Qual atributo HTML é usado para definir estilos inline?",
                Options = new List<string> { "class", "style", "css", "design" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.HTML,
                Explanation = "O atributo 'style' permite adicionar CSS diretamente no elemento HTML."
            });

            allQuestions.Add(new Question
            {
                Id = 103,
                Text = "Qual tag é usada para criar um link?",
                Options = new List<string> { "<link>", "<a>", "<href>", "<url>" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.HTML,
                Explanation = "A tag <a> (anchor) é usada para criar hyperlinks."
            });

            // Intermediário
            allQuestions.Add(new Question
            {
                Id = 104,
                Text = "Qual é a diferença entre <div> e <span>?",
                Options = new List<string> {
                    "Não há diferença",
                    "<div> é block-level e <span> é inline",
                    "<span> é block-level e <div> é inline",
                    "São a mesma coisa"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Intermediario,
                Language = ProgrammingLanguage.HTML,
                Explanation = "<div> ocupa toda a largura (block) enquanto <span> ocupa apenas o espaço necessário (inline)."
            });

            allQuestions.Add(new Question
            {
                Id = 105,
                Text = "Qual tag HTML5 é semântica para conteúdo principal?",
                Options = new List<string> { "<content>", "<main>", "<section>", "<article>" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Intermediario,
                Language = ProgrammingLanguage.HTML,
                Explanation = "A tag <main> representa o conteúdo principal do documento."
            });

            // Avançado
            allQuestions.Add(new Question
            {
                Id = 106,
                Text = "O que é Shadow DOM?",
                Options = new List<string> {
                    "Uma biblioteca JavaScript",
                    "Encapsulamento de DOM e estilos em Web Components",
                    "Um framework CSS",
                    "Uma API de animação"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Avancado,
                Language = ProgrammingLanguage.HTML,
                Explanation = "Shadow DOM permite encapsular estrutura, estilo e comportamento em Web Components."
            });

            allQuestions.Add(new Question
            {
                Id = 107,
                Text = "Qual atributo torna um script assíncrono?",
                Options = new List<string> { "defer", "async", "sync", "load" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Avancado,
                Language = ProgrammingLanguage.HTML,
                Explanation = "O atributo 'async' faz o script carregar de forma assíncrona sem bloquear o HTML."
            });
        }

        private void LoadCSSQuestions()
        {
            // Iniciante
            allQuestions.Add(new Question
            {
                Id = 201,
                Text = "Qual propriedade CSS muda a cor do texto?",
                Options = new List<string> { "font-color", "text-color", "color", "foreground" },
                CorrectAnswerIndex = 2,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.CSS,
                Explanation = "A propriedade 'color' define a cor do texto em CSS."
            });

            allQuestions.Add(new Question
            {
                Id = 202,
                Text = "Como você seleciona uma classe em CSS?",
                Options = new List<string> { "#classe", ".classe", "*classe", "@classe" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.CSS,
                Explanation = "O ponto (.) é usado para selecionar classes CSS."
            });

            allQuestions.Add(new Question
            {
                Id = 203,
                Text = "Qual propriedade controla o tamanho da fonte?",
                Options = new List<string> { "text-size", "font-size", "size", "font-style" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.CSS,
                Explanation = "'font-size' é a propriedade que controla o tamanho do texto."
            });

            // Intermediário
            allQuestions.Add(new Question
            {
                Id = 204,
                Text = "O que é Flexbox?",
                Options = new List<string> {
                    "Um framework CSS",
                    "Um modelo de layout unidimensional",
                    "Uma biblioteca JavaScript",
                    "Um preprocessador"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Intermediario,
                Language = ProgrammingLanguage.CSS,
                Explanation = "Flexbox é um modelo de layout CSS para arranjo unidimensional de elementos."
            });

            allQuestions.Add(new Question
            {
                Id = 205,
                Text = "Qual propriedade cria espaço dentro de um elemento?",
                Options = new List<string> { "margin", "padding", "spacing", "border" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Intermediario,
                Language = ProgrammingLanguage.CSS,
                Explanation = "'padding' cria espaço interno, enquanto 'margin' cria espaço externo."
            });

            // Avançado
            allQuestions.Add(new Question
            {
                Id = 206,
                Text = "O que é CSS Grid?",
                Options = new List<string> {
                    "Um framework",
                    "Sistema de layout bidimensional",
                    "Uma biblioteca",
                    "Um tipo de seletor"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Avancado,
                Language = ProgrammingLanguage.CSS,
                Explanation = "CSS Grid é um sistema de layout bidimensional para linhas e colunas."
            });

            allQuestions.Add(new Question
            {
                Id = 207,
                Text = "O que são CSS Custom Properties (variáveis CSS)?",
                Options = new List<string> {
                    "Propriedades padrão",
                    "Valores reutilizáveis definidos com --",
                    "Classes especiais",
                    "Funções CSS"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Avancado,
                Language = ProgrammingLanguage.CSS,
                Explanation = "Custom Properties permitem definir valores reutilizáveis com -- e usar com var()."
            });
        }

        private void LoadJavaScriptQuestions()
        {
            // Iniciante
            allQuestions.Add(new Question
            {
                Id = 301,
                Text = "Como você declara uma variável em JavaScript?",
                Options = new List<string> { "var, let, const", "int, float, string", "variable", "dim" },
                CorrectAnswerIndex = 0,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.JavaScript,
                Explanation = "JavaScript usa var, let e const para declarar variáveis."
            });

            allQuestions.Add(new Question
            {
                Id = 302,
                Text = "Qual método exibe uma mensagem de alerta?",
                Options = new List<string> { "msg()", "alert()", "message()", "popup()" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.JavaScript,
                Explanation = "alert() exibe uma caixa de diálogo com mensagem."
            });

            allQuestions.Add(new Question
            {
                Id = 303,
                Text = "Como você escreve no console do navegador?",
                Options = new List<string> { "console.write()", "console.log()", "log()", "print()" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.JavaScript,
                Explanation = "console.log() é usado para exibir mensagens no console."
            });

            // Intermediário
            allQuestions.Add(new Question
            {
                Id = 304,
                Text = "O que é uma Promise em JavaScript?",
                Options = new List<string> {
                    "Um loop",
                    "Um objeto que representa conclusão ou falha de operação assíncrona",
                    "Uma função",
                    "Um array"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Intermediario,
                Language = ProgrammingLanguage.JavaScript,
                Explanation = "Promises representam valores que podem estar disponíveis agora, no futuro, ou nunca."
            });

            allQuestions.Add(new Question
            {
                Id = 305,
                Text = "Qual a diferença entre '==' e '===' ?",
                Options = new List<string> {
                    "Não há diferença",
                    "=== compara valor e tipo, == apenas valor",
                    "== compara valor e tipo, === apenas valor",
                    "São iguais"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Intermediario,
                Language = ProgrammingLanguage.JavaScript,
                Explanation = "=== é comparação estrita (valor e tipo), == faz coerção de tipo."
            });

            // Avançado
            allQuestions.Add(new Question
            {
                Id = 306,
                Text = "O que é Closure em JavaScript?",
                Options = new List<string> {
                    "Um método de array",
                    "Função que tem acesso ao escopo da função externa",
                    "Uma classe",
                    "Um loop"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Avancado,
                Language = ProgrammingLanguage.JavaScript,
                Explanation = "Closure permite que uma função acesse variáveis do escopo externo mesmo após a execução."
            });

            allQuestions.Add(new Question
            {
                Id = 307,
                Text = "O que é Event Loop?",
                Options = new List<string> {
                    "Um tipo de loop",
                    "Mecanismo que gerencia execução de código assíncrono",
                    "Uma função",
                    "Um evento"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Avancado,
                Language = ProgrammingLanguage.JavaScript,
                Explanation = "Event Loop gerencia a fila de execução e permite operações não-bloqueantes."
            });
        }

        private void LoadAngularQuestions()
        {
            // Iniciante
            allQuestions.Add(new Question
            {
                Id = 401,
                Text = "O que é Angular?",
                Options = new List<string> {
                    "Uma biblioteca JavaScript",
                    "Um framework para aplicações web",
                    "Uma linguagem de programação",
                    "Um banco de dados"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.Angular,
                Explanation = "Angular é um framework TypeScript para construir aplicações web SPA."
            });

            allQuestions.Add(new Question
            {
                Id = 402,
                Text = "Qual comando cria um novo projeto Angular?",
                Options = new List<string> { "ng create", "ng new", "ng init", "ng start" },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.Angular,
                Explanation = "'ng new' é o comando da Angular CLI para criar novos projetos."
            });

            allQuestions.Add(new Question
            {
                Id = 403,
                Text = "O que é um Component em Angular?",
                Options = new List<string> {
                    "Um arquivo CSS",
                    "Bloco de construção básico da UI",
                    "Uma biblioteca",
                    "Um servidor"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Iniciante,
                Language = ProgrammingLanguage.Angular,
                Explanation = "Components são os blocos fundamentais que controlam uma parte da tela."
            });

            // Intermediário
            allQuestions.Add(new Question
            {
                Id = 404,
                Text = "O que é Data Binding em Angular?",
                Options = new List<string> {
                    "Uma biblioteca",
                    "Sincronização entre model e view",
                    "Um componente",
                    "Uma diretiva"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Intermediario,
                Language = ProgrammingLanguage.Angular,
                Explanation = "Data Binding sincroniza dados entre o componente TypeScript e o template HTML."
            });

            allQuestions.Add(new Question
            {
                Id = 405,
                Text = "O que são Services em Angular?",
                Options = new List<string> {
                    "Componentes especiais",
                    "Classes para lógica de negócio e compartilhamento de dados",
                    "Estilos CSS",
                    "Rotas"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Intermediario,
                Language = ProgrammingLanguage.Angular,
                Explanation = "Services são classes singleton para lógica de negócio reutilizável."
            });

            // Avançado
            allQuestions.Add(new Question
            {
                Id = 406,
                Text = "O que é RxJS em Angular?",
                Options = new List<string> {
                    "Um framework CSS",
                    "Biblioteca para programação reativa com Observables",
                    "Um servidor",
                    "Uma linguagem"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Avancado,
                Language = ProgrammingLanguage.Angular,
                Explanation = "RxJS permite programação reativa usando Observables para operações assíncronas."
            });

            allQuestions.Add(new Question
            {
                Id = 407,
                Text = "O que é Change Detection em Angular?",
                Options = new List<string> {
                    "Um método HTTP",
                    "Mecanismo que detecta e propaga mudanças no estado",
                    "Uma diretiva",
                    "Um pipe"
                },
                CorrectAnswerIndex = 1,
                Difficulty = DifficultyLevel.Avancado,
                Language = ProgrammingLanguage.Angular,
                Explanation = "Change Detection verifica quando dados mudam e atualiza a view automaticamente."
            });
        }
    }

    /// <summary>
    /// Resultado de uma resposta
    /// </summary>
    public class QuizResult
    {
        public bool IsCorrect { get; set; }
        public int Points { get; set; }
        public int CorrectAnswerIndex { get; set; }
        public int PlayerAnswer { get; set; }
        public string Explanation { get; set; }
    }

    /// <summary>
    /// Estatísticas da sessão
    /// </summary>
    public class SessionStats
    {
        public int TotalQuestions { get; set; }
        public int CorrectAnswers { get; set; }
        public int WrongAnswers { get; set; }
        public int TotalPoints { get; set; }
        public double Accuracy { get; set; }
        public int Level { get; set; }
        public string Title { get; set; }
        public List<string> Achievements { get; set; }
    }
}
