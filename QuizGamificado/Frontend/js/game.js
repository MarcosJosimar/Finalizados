// ==========================================
// QUIZ GAMIFICADO - LÓGICA PRINCIPAL
// ==========================================

// Estado Global do Jogo
const gameState = {
    player: {
        name: '',
        points: 0,
        level: 1,
        correctAnswers: 0,
        wrongAnswers: 0,
        achievements: [],
        languageScores: {
            'C#': 0,
            'HTML': 0,
            'CSS': 0,
            'JavaScript': 0,
            'Angular': 0
        }
    },
    currentQuestions: [],
    currentQuestionIndex: 0,
    selectedLanguage: 'all',
    selectedDifficulty: 'all',
    previousLevel: 1,
    previousAchievements: []
};

// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Quiz Gamificado carregado!');
    loadSavedProgress();
});

// ==========================================
// GERENCIAMENTO DE TELAS
// ==========================================

function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// ==========================================
// INÍCIO DO QUIZ
// ==========================================

function startQuiz() {
    const playerNameInput = document.getElementById('playerName');
    const languageSelect = document.getElementById('languageSelect');
    const difficultySelect = document.getElementById('difficultySelect');

    // Validação
    if (!playerNameInput.value.trim()) {
        alert('Por favor, digite seu nome!');
        playerNameInput.focus();
        return;
    }

    // Configura o jogador
    gameState.player.name = playerNameInput.value.trim();
    gameState.selectedLanguage = languageSelect.value;
    gameState.selectedDifficulty = difficultySelect.value;

    // Reseta estatísticas da sessão
    gameState.currentQuestionIndex = 0;
    gameState.previousLevel = gameState.player.level;
    gameState.previousAchievements = [...gameState.player.achievements];

    // Filtra e carrega perguntas
    gameState.currentQuestions = filterQuestions(
        gameState.selectedLanguage,
        gameState.selectedDifficulty
    );

    if (gameState.currentQuestions.length === 0) {
        alert('Nenhuma pergunta encontrada com esses filtros!');
        return;
    }

    // Limita a 10 perguntas por sessão
    gameState.currentQuestions = gameState.currentQuestions.slice(0, 10);

    // Atualiza interface
    updatePlayerDisplay();
    showScreen('quizScreen');
    loadQuestion();
}

// ==========================================
// CARREGAMENTO DE QUESTÕES
// ==========================================

function loadQuestion() {
    const question = gameState.currentQuestions[gameState.currentQuestionIndex];

    if (!question) {
        showResults();
        return;
    }

    // Atualiza barra de progresso
    const progress = ((gameState.currentQuestionIndex + 1) / gameState.currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent =
        `Questão ${gameState.currentQuestionIndex + 1} de ${gameState.currentQuestions.length}`;

    // Atualiza header da questão
    document.getElementById('questionLanguage').textContent =
        `${question.language} ${getLanguageEmoji(question.language)}`;

    const difficultyEl = document.getElementById('questionDifficulty');
    difficultyEl.textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
    difficultyEl.setAttribute('data-level', question.difficulty);

    document.getElementById('questionPoints').textContent = `+${question.points} pontos`;

    // Atualiza texto da questão
    document.getElementById('questionText').textContent = question.text;

    // Cria opções
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });

    // Adiciona animação
    optionsContainer.style.animation = 'none';
    setTimeout(() => {
        optionsContainer.style.animation = 'slideUp 0.5s ease';
    }, 10);
}

// ==========================================
// SELEÇÃO DE RESPOSTA
// ==========================================

function selectAnswer(answerIndex) {
    const question = gameState.currentQuestions[gameState.currentQuestionIndex];
    const isCorrect = answerIndex === question.correctAnswer;

    // Desabilita todas as opções
    const options = document.querySelectorAll('.option-btn');
    options.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === question.correctAnswer) {
            btn.classList.add('correct');
        } else if (idx === answerIndex && !isCorrect) {
            btn.classList.add('wrong');
        }
    });

    // Aguarda animação e mostra feedback
    setTimeout(() => {
        processAnswer(isCorrect, question);
    }, 1000);
}

// ==========================================
// PROCESSAMENTO DA RESPOSTA
// ==========================================

function processAnswer(isCorrect, question) {
    if (isCorrect) {
        gameState.player.correctAnswers++;
        gameState.player.points += question.points;
        gameState.player.languageScores[question.language] += question.points;

        // Efeito sonoro (se disponível)
        playSound('correctSound');
    } else {
        gameState.player.wrongAnswers++;

        // Efeito sonoro (se disponível)
        playSound('wrongSound');
    }

    // Verifica level up
    checkLevelUp();

    // Verifica conquistas
    checkAchievements();

    // Atualiza display
    updatePlayerDisplay();

    // Mostra feedback
    showFeedback(isCorrect, question);
}

// ==========================================
// FEEDBACK
// ==========================================

function showFeedback(isCorrect, question) {
    showScreen('feedbackScreen');

    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackPoints = document.getElementById('feedbackPoints');
    const feedbackExplanation = document.getElementById('feedbackExplanation');
    const feedbackCorrectAnswer = document.getElementById('feedbackCorrectAnswer');
    const correctAnswerText = document.getElementById('correctAnswerText');

    if (isCorrect) {
        feedbackIcon.textContent = '✅';
        feedbackTitle.textContent = 'Correto!';
        feedbackTitle.className = 'feedback-title correct';
        feedbackPoints.textContent = `+${question.points} pontos`;
        feedbackCorrectAnswer.style.display = 'none';
    } else {
        feedbackIcon.textContent = '❌';
        feedbackTitle.textContent = 'Ops! Errou';
        feedbackTitle.className = 'feedback-title wrong';
        feedbackPoints.textContent = '+0 pontos';
        feedbackCorrectAnswer.style.display = 'block';
        correctAnswerText.textContent = question.options[question.correctAnswer];
    }

    feedbackExplanation.textContent = question.explanation;

    // Verifica se teve level up
    if (gameState.player.level > gameState.previousLevel) {
        showLevelUpNotification();
        gameState.previousLevel = gameState.player.level;
    }

    // Verifica novas conquistas
    const newAchievements = gameState.player.achievements.filter(
        a => !gameState.previousAchievements.includes(a)
    );

    if (newAchievements.length > 0) {
        showAchievementNotification(newAchievements[0]);
        gameState.previousAchievements = [...gameState.player.achievements];
    }
}

// ==========================================
// PRÓXIMA QUESTÃO
// ==========================================

function nextQuestion() {
    gameState.currentQuestionIndex++;

    if (gameState.currentQuestionIndex < gameState.currentQuestions.length) {
        showScreen('quizScreen');
        loadQuestion();
    } else {
        showResults();
    }
}

function skipQuestion() {
    if (confirm('Tem certeza que deseja pular esta questão?')) {
        nextQuestion();
    }
}

// ==========================================
// SISTEMA DE NÍVEIS
// ==========================================

function checkLevelUp() {
    const newLevel = Math.floor(gameState.player.points / 100) + 1;
    if (newLevel > gameState.player.level) {
        gameState.player.level = newLevel;
        return true;
    }
    return false;
}

function getPlayerTitle() {
    const level = gameState.player.level;
    if (level === 1) return 'Novato';
    if (level <= 3) return 'Aprendiz';
    if (level <= 5) return 'Desenvolvedor';
    if (level <= 7) return 'Programador';
    if (level <= 9) return 'Especialista';
    return 'Mestre';
}

function showLevelUpNotification() {
    const notification = document.getElementById('levelUpNotification');
    const newLevelText = document.getElementById('newLevelText');

    notification.style.display = 'flex';
    newLevelText.textContent = `Você atingiu o nível ${gameState.player.level}! (${getPlayerTitle()})`;

    playSound('achievementSound');
}

// ==========================================
// SISTEMA DE CONQUISTAS
// ==========================================

function checkAchievements() {
    const achievements = gameState.player.achievements;
    const { correctAnswers, languageScores } = gameState.player;

    // Primeira Vitória
    if (correctAnswers === 1 && !achievements.includes('Primeira Vitória')) {
        achievements.push('Primeira Vitória');
    }

    // Série de 5
    if (correctAnswers === 5 && !achievements.includes('Série de 5')) {
        achievements.push('Série de 5');
    }

    // Série de 10
    if (correctAnswers === 10 && !achievements.includes('Série de 10')) {
        achievements.push('Série de 10');
    }

    // Mestre
    if (correctAnswers >= 20 && !achievements.includes('Mestre')) {
        achievements.push('Mestre');
    }

    // Especialista em C#
    if (languageScores['C#'] >= 100 && !achievements.includes('Especialista C#')) {
        achievements.push('Especialista C#');
    }

    // Web Master
    if (languageScores['HTML'] >= 50 &&
        languageScores['CSS'] >= 50 &&
        languageScores['JavaScript'] >= 50 &&
        !achievements.includes('Web Master')) {
        achievements.push('Web Master');
    }

    // Angular Expert
    if (languageScores['Angular'] >= 100 && !achievements.includes('Angular Expert')) {
        achievements.push('Angular Expert');
    }

    // Polímata
    const allLanguagesAbove30 = Object.values(languageScores).every(score => score >= 30);
    if (allLanguagesAbove30 && !achievements.includes('Polímata')) {
        achievements.push('Polímata');
    }

    // Perfeccionista
    const total = correctAnswers + gameState.player.wrongAnswers;
    if (total >= 10 && gameState.player.wrongAnswers === 0 && !achievements.includes('Perfeccionista')) {
        achievements.push('Perfeccionista');
    }
}

function showAchievementNotification(achievementName) {
    const notification = document.getElementById('achievementUnlocked');
    const achievementNameEl = document.getElementById('achievementName');

    notification.style.display = 'flex';
    achievementNameEl.textContent = achievementName;

    playSound('achievementSound');
}

// ==========================================
// ATUALIZAÇÃO DA INTERFACE
// ==========================================

function updatePlayerDisplay() {
    document.getElementById('playerNameDisplay').textContent = gameState.player.name;
    document.getElementById('playerTitle').textContent = getPlayerTitle();
    document.getElementById('playerLevel').textContent = gameState.player.level;
    document.getElementById('playerPoints').textContent = gameState.player.points;

    const accuracy = calculateAccuracy();
    document.getElementById('playerAccuracy').textContent = `${accuracy}%`;
}

function calculateAccuracy() {
    const total = gameState.player.correctAnswers + gameState.player.wrongAnswers;
    if (total === 0) return 0;
    return Math.round((gameState.player.correctAnswers / total) * 100);
}

// ==========================================
// TELA DE RESULTADOS
// ==========================================

function showResults() {
    showScreen('resultsScreen');

    // Estatísticas finais
    document.getElementById('finalCorrect').textContent = gameState.player.correctAnswers;
    document.getElementById('finalWrong').textContent = gameState.player.wrongAnswers;
    document.getElementById('finalAccuracy').textContent = `${calculateAccuracy()}%`;
    document.getElementById('finalPoints').textContent = gameState.player.points;
    document.getElementById('finalLevel').textContent = gameState.player.level;
    document.getElementById('finalTitle').textContent = getPlayerTitle();

    // Badge baseado no desempenho
    const accuracy = calculateAccuracy();
    const rankBadge = document.getElementById('rankBadge');
    if (accuracy >= 90) {
        rankBadge.textContent = '🏆';
    } else if (accuracy >= 70) {
        rankBadge.textContent = '🥇';
    } else if (accuracy >= 50) {
        rankBadge.textContent = '🥈';
    } else {
        rankBadge.textContent = '🥉';
    }

    // Lista de conquistas
    const achievementsList = document.getElementById('achievementsList');
    achievementsList.innerHTML = '';

    if (gameState.player.achievements.length === 0) {
        achievementsList.innerHTML = '<p style="color: var(--text-secondary);">Nenhuma conquista desbloqueada ainda</p>';
    } else {
        gameState.player.achievements.forEach(achievement => {
            const badge = document.createElement('div');
            badge.className = 'achievement-badge';
            badge.textContent = `🏆 ${achievement}`;
            achievementsList.appendChild(badge);
        });
    }

    // Mensagem de performance
    const performanceMessage = document.getElementById('performanceMessage');
    let message = '';

    if (accuracy === 100) {
        message = '🌟 Perfeito! Você acertou todas as questões! Você é um verdadeiro mestre da programação!';
    } else if (accuracy >= 80) {
        message = '🎉 Excelente trabalho! Você tem um ótimo domínio do assunto!';
    } else if (accuracy >= 60) {
        message = '👍 Bom trabalho! Continue praticando para melhorar ainda mais!';
    } else if (accuracy >= 40) {
        message = '💪 Está no caminho certo! Estude mais um pouco e tente novamente!';
    } else {
        message = '📚 Continue estudando! A prática leva à perfeição!';
    }

    performanceMessage.innerHTML = `<p>${message}</p>`;

    // Salva progresso
    saveProgress();
}

// ==========================================
// REINICIAR E NAVEGAÇÃO
// ==========================================

function restartQuiz() {
    // Mantém dados do jogador mas reseta sessão
    gameState.currentQuestionIndex = 0;
    gameState.previousLevel = gameState.player.level;
    gameState.previousAchievements = [...gameState.player.achievements];

    // Recarrega perguntas
    gameState.currentQuestions = filterQuestions(
        gameState.selectedLanguage,
        gameState.selectedDifficulty
    ).slice(0, 10);

    showScreen('quizScreen');
    loadQuestion();
}

function backToStart() {
    showScreen('startScreen');
}

// ==========================================
// PERSISTÊNCIA DE DADOS
// ==========================================

function saveProgress() {
    try {
        localStorage.setItem('quizGameState', JSON.stringify(gameState.player));
    } catch (e) {
        console.error('Erro ao salvar progresso:', e);
    }
}

function loadSavedProgress() {
    try {
        const saved = localStorage.getItem('quizGameState');
        if (saved) {
            const savedPlayer = JSON.parse(saved);
            // Mantém apenas pontos, nível e conquistas
            gameState.player.points = savedPlayer.points || 0;
            gameState.player.level = savedPlayer.level || 1;
            gameState.player.achievements = savedPlayer.achievements || [];
            gameState.player.languageScores = savedPlayer.languageScores || {
                'C#': 0, 'HTML': 0, 'CSS': 0, 'JavaScript': 0, 'Angular': 0
            };
            gameState.player.correctAnswers = savedPlayer.correctAnswers || 0;
            gameState.player.wrongAnswers = savedPlayer.wrongAnswers || 0;
        }
    } catch (e) {
        console.error('Erro ao carregar progresso:', e);
    }
}

function resetProgress() {
    if (confirm('Tem certeza que deseja resetar todo o seu progresso?')) {
        localStorage.removeItem('quizGameState');
        location.reload();
    }
}

// ==========================================
// EFEITOS SONOROS
// ==========================================

function playSound(soundId) {
    try {
        const sound = document.getElementById(soundId);
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log('Áudio não disponível'));
        }
    } catch (e) {
        // Silenciosamente ignora se áudio não estiver disponível
    }
}

// ==========================================
// UTILITÁRIOS
// ==========================================

// Atalhos de teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const activeScreen = document.querySelector('.screen.active');
        if (activeScreen.id === 'feedbackScreen') {
            nextQuestion();
        }
    }
});

// Previne refresh acidental durante o quiz
window.addEventListener('beforeunload', (e) => {
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen && (activeScreen.id === 'quizScreen' || activeScreen.id === 'feedbackScreen')) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Exporta funções globais para os botões HTML
window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
window.skipQuestion = skipQuestion;
window.restartQuiz = restartQuiz;
window.backToStart = backToStart;
window.resetProgress = resetProgress;

console.log('🎮 Quiz Gamificado pronto para jogar!');
