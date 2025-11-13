using System;
using System.Collections.Generic;

namespace QuizGamificado.Backend
{
    /// <summary>
    /// Representa um jogador do quiz
    /// </summary>
    public class Player
    {
        public string Name { get; set; }
        public int TotalPoints { get; set; }
        public int Level { get; set; }
        public int CorrectAnswers { get; set; }
        public int WrongAnswers { get; set; }
        public List<string> Achievements { get; set; }
        public Dictionary<ProgrammingLanguage, int> LanguageScores { get; set; }

        public Player(string name)
        {
            Name = name;
            TotalPoints = 0;
            Level = 1;
            CorrectAnswers = 0;
            WrongAnswers = 0;
            Achievements = new List<string>();
            LanguageScores = new Dictionary<ProgrammingLanguage, int>();

            // Inicializa scores por linguagem
            foreach (ProgrammingLanguage lang in Enum.GetValues(typeof(ProgrammingLanguage)))
            {
                LanguageScores[lang] = 0;
            }
        }

        /// <summary>
        /// Adiciona pontos e verifica se subiu de nível
        /// </summary>
        public void AddPoints(int points, ProgrammingLanguage language)
        {
            TotalPoints += points;
            LanguageScores[language] += points;
            CheckLevelUp();
            CheckAchievements();
        }

        /// <summary>
        /// Verifica e atualiza o nível do jogador
        /// </summary>
        private void CheckLevelUp()
        {
            int newLevel = (TotalPoints / 100) + 1;
            if (newLevel > Level)
            {
                Level = newLevel;
            }
        }

        /// <summary>
        /// Verifica conquistas desbloqueadas
        /// </summary>
        private void CheckAchievements()
        {
            // Primeira Vitória
            if (CorrectAnswers == 1 && !Achievements.Contains("Primeira Vitória"))
            {
                Achievements.Add("Primeira Vitória");
            }

            // Série de 5
            if (CorrectAnswers >= 5 && !Achievements.Contains("Série de 5"))
            {
                Achievements.Add("Série de 5");
            }

            // Mestre
            if (CorrectAnswers >= 20 && !Achievements.Contains("Mestre"))
            {
                Achievements.Add("Mestre");
            }

            // Especialista em C#
            if (LanguageScores[ProgrammingLanguage.CSharp] >= 100 && !Achievements.Contains("Especialista C#"))
            {
                Achievements.Add("Especialista C#");
            }

            // Web Master
            if (LanguageScores[ProgrammingLanguage.HTML] >= 50 &&
                LanguageScores[ProgrammingLanguage.CSS] >= 50 &&
                LanguageScores[ProgrammingLanguage.JavaScript] >= 50 &&
                !Achievements.Contains("Web Master"))
            {
                Achievements.Add("Web Master");
            }

            // Angular Expert
            if (LanguageScores[ProgrammingLanguage.Angular] >= 100 && !Achievements.Contains("Angular Expert"))
            {
                Achievements.Add("Angular Expert");
            }

            // Polímata
            bool allLanguages = true;
            foreach (var score in LanguageScores.Values)
            {
                if (score < 30) allLanguages = false;
            }
            if (allLanguages && !Achievements.Contains("Polímata"))
            {
                Achievements.Add("Polímata");
            }
        }

        /// <summary>
        /// Calcula a precisão do jogador
        /// </summary>
        public double GetAccuracy()
        {
            int total = CorrectAnswers + WrongAnswers;
            return total == 0 ? 0 : (double)CorrectAnswers / total * 100;
        }

        /// <summary>
        /// Retorna o título do jogador baseado no nível
        /// </summary>
        public string GetTitle()
        {
            return Level switch
            {
                1 => "Novato",
                2 or 3 => "Aprendiz",
                4 or 5 => "Desenvolvedor",
                6 or 7 => "Programador",
                8 or 9 => "Especialista",
                >= 10 => "Mestre",
                _ => "Novato"
            };
        }
    }
}
