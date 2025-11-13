using System;
using System.Collections.Generic;

namespace QuizGamificado.Backend
{
    /// <summary>
    /// Níveis de dificuldade das perguntas
    /// </summary>
    public enum DifficultyLevel
    {
        Iniciante = 1,
        Intermediario = 2,
        Avancado = 3
    }

    /// <summary>
    /// Linguagens de programação disponíveis
    /// </summary>
    public enum ProgrammingLanguage
    {
        CSharp,
        HTML,
        CSS,
        JavaScript,
        Angular
    }

    /// <summary>
    /// Representa uma questão do quiz
    /// </summary>
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public List<string> Options { get; set; }
        public int CorrectAnswerIndex { get; set; }
        public DifficultyLevel Difficulty { get; set; }
        public ProgrammingLanguage Language { get; set; }
        public int Points { get; set; }
        public string Explanation { get; set; }

        public Question()
        {
            Options = new List<string>();
        }

        /// <summary>
        /// Verifica se a resposta está correta
        /// </summary>
        public bool IsCorrect(int answerIndex)
        {
            return answerIndex == CorrectAnswerIndex;
        }

        /// <summary>
        /// Calcula os pontos baseados na dificuldade
        /// </summary>
        public int GetPoints()
        {
            return Difficulty switch
            {
                DifficultyLevel.Iniciante => 10,
                DifficultyLevel.Intermediario => 20,
                DifficultyLevel.Avancado => 30,
                _ => 10
            };
        }
    }
}
