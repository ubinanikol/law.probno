// Основи на правото – SPA за 11 клас (Поправена версия)
// =========================================================

// Данни за всички 15 теми
const TOPICS_DATA = {
  "topics": [
    {
      "id": 1,
      "title": "Същност, система, структура и източници на правото. Методи на правно регулиране.",
      "theory": `
        <div class="topic-section">
          <h3>🔍 Същност на правото</h3>
          <p><strong class="term" data-tooltip="Система от общозадължителни правила на поведение, утвърдени или санкционирани от държавата">Правото</strong> е основната регулативна система в обществото, която осигурява ред и справедливост чрез установяване на общозадължителни правила за поведение.</p>
          
          <h3>🏗️ Структура на правната норма</h3>
          <ol>
            <li><span class="term" data-tooltip="Описва условията, при които се прилага нормата">Хипотеза</span> - условие за прилагане на нормата</li>
            <li><span class="term" data-tooltip="Самото правило на поведение">Диспозиция</span> - правилото за поведение (право, задължение, забрана)</li>
            <li><span class="term" data-tooltip="Неблагоприятните последици при нарушение">Санкция</span> - последица при неспазване на нормата</li>
          </ol>

          <h3>📚 Източници на правото (йерархия)</h3>
          <div class="sources-hierarchy">
            <div class="source-level">1. <span class="term" data-tooltip="Основният закон на държавата с най-висока юридическа сила">Конституция</span></div>
            <div class="source-level">2. <span class="term" data-tooltip="Ратифицирани и обнародвани международни договори">Международни договори</span></div>
            <div class="source-level">3. <span class="term" data-tooltip="Нормативни актове, приети от Народното събрание">Закони</span></div>
            <div class="source-level">4. <span class="term" data-tooltip="Постановления, наредби, правилници и инструкции">Подзаконови нормативни актове</span></div>
          </div>

          <h3>⚖️ Методи на правно регулиране</h3>
          <ul>
            <li><span class="term" data-tooltip="Категорично предписание без възможност за отклонение">Императивен метод</span> - задължително изпълнение (напр. наказателно право)</li>
            <li><span class="term" data-tooltip="Предоставя възможност за избор в рамките на закона">Диспозитивен метод</span> - свобода на договаряне (напр. гражданско право)</li>
            <li><span class="term" data-tooltip="Препоръчва желаното поведение без принуда">Препоръчителен метод</span> - насърчава определено поведение</li>
          </ul>
        </div>
      `,
      "flashcards": [
        {"term": "Правна норма", "definition": "Общозадължително правило за поведение, установено или санкционирано от държавата."},
        {"term": "Източник на правото", "definition": "Форма, в която намира израз правната норма (напр. закон, подзаконов акт)."},
        {"term": "Императивен метод", "definition": "Метод на власт и подчинение при правно регулиране - категорично предписание."},
        {"term": "Диспозитивен метод", "definition": "Метод на равнопоставеност - страните могат да уредят отношенията си по различен начин."}
      ],
      "quiz": [
        {"q": "Кой акт има най-висока юридическа сила в България?", "answers": ["Закон", "Конституция", "Министерска наредба", "Постановление на МС"], "correctIndex": 1, "explanation": "Конституцията е върховен закон според чл. 5 КРБ."},
        {"q": "Кой от изброените е пример за неписан източник на правото?", "answers": ["Правен обичай", "Закон", "Декрет", "Наредба"], "correctIndex": 0, "explanation": "Обичаят е неписан източник на правото."},
        {"q": "При кой метод субектите са равнопоставени?", "answers": ["Императивен", "Диспозитивен", "Препоръчителен", "Комбиниран"], "correctIndex": 1, "explanation": "Диспозитивният метод предполага равнопоставеност на страните."},
        {"q": "Хипотезата на правната норма съдържа:", "answers": ["Правилото за поведение", "Условието за прилагане", "Санкцията", "Субекта"], "correctIndex": 1, "explanation": "Хипотезата определя условията за прилагане на нормата."},
        {"q": "Диспозицията може да предписва:", "answers": ["Само права", "Само задължения", "Права, задължения или забрани", "Само санкции"], "correctIndex": 2, "explanation": "Диспозицията може да съдържа различни видове правила."}
      ],
      "examples": ["Конституцията като върховен източник на правото в България - чл. 5 КРБ", "Подзаконови нормативни актове – пример: Наредба №1 на МОН за учебното време"],
      "links": ["https://bg.wikipedia.org/wiki/Право"]
    },
    {
      "id": 2,
      "title": "Субекти на правото – понятие и видове. Физически и юридически лица.",
      "theory": `
        <div class="topic-section">
          <h3>👥 Понятие за субекти на правото</h3>
          <p><span class="term" data-tooltip="Носител на субективни права и задължения в правоотношенията">Субект на правото</span> е всеки носител на права и задължения в правните отношения.</p>
          
          <h3>📋 Видове субекти</h3>
          <div class="subjects-grid">
            <div class="subject-card">
              <h4>👤 Физически лица</h4>
              <ul>
                <li><span class="term" data-tooltip="Способност да се притежават права и да се поемат задължения">Правоспособност</span> - от раждането до смъртта</li>
                <li><span class="term" data-tooltip="Способност да се упражняват права чрез собствени действия">Дееспособност</span> - пълна от 18 години</li>
                <li><span class="term" data-tooltip="Способност да се носи отговорност за вреди">Деликтоспособност</span> - от 14 години за деликти</li>
              </ul>
            </div>
            
            <div class="subject-card">
              <h4>🏢 Юридически лица</h4>
              <ul>
                <li><span class="term" data-tooltip="Дружества, които търсят печалба">Търговски дружества</span> - ЕТ, ООД, АД, ЕАД и др.</li>
                <li><span class="term" data-tooltip="Организации с обществено-полезна цел">ЮЛНЦ</span> - сдружения, фондации</li>
                <li><span class="term" data-tooltip="Субект с публично-правен статут">Държавата</span> като юридическо лице</li>
                <li><span class="term" data-tooltip="Самостоятелни административни единици">Общини</span> и областни администрации</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      "flashcards": [
        {"term": "Правоспособност", "definition": "Способността да бъдеш носител на права и задължения. Възниква с раждането."},
        {"term": "Дееспособност", "definition": "Способността самостоятелно да упражняваш права и поемаш задължения."},
        {"term": "Юридическо лице", "definition": "Организация, призната от закона като самостоятелен субект на правото."}
      ],
      "quiz": [
        {"q": "От кой момент физическото лице придобива гражданска правоспособност?", "answers": ["От зачеването", "От раждането", "От 18 години", "От регистрацията"], "correctIndex": 1, "explanation": "Чл. 1 ЗЛС - правоспособността възниква с раждането."},
        {"q": "Пълнолетието в България се достига на:", "answers": ["16 години", "17 години", "18 години", "21 години"], "correctIndex": 2, "explanation": "Чл. 4 ЗЛС определя пълнолетието на 18 години."}
      ],
      "examples": ["Регистрация по ЕГН при раждане на дете в НСИ"],
      "links": ["https://bg.wikipedia.org/wiki/Физическо_лице"]
    }
    // Останалите теми трябва да бъдат допълнени с реално съдържание
  ]
};

// =========================================================
// Състояние на приложението
// =========================================================
const progressMap = {};

// Инициализиране на прогреса
function initProgress() {
  TOPICS_DATA.topics.forEach(t => {
    progressMap[t.id] = { read: false, quizScore: 0 };
  });
}

// Помощни функции
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function calcCompletedPercentage() {
  const total = TOPICS_DATA.topics.length;
  const completed = Object.values(progressMap).filter(p => p.quizScore >= 80).length;
  return { completed, total, percent: Math.round((completed / total) * 100) };
}

function showErrorMessage(message) {
  console.error('Грешка:', message);
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.cssText = `
    position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
    background: #fee; color: #c33; padding: 1rem; border-radius: 4px;
    border: 1px solid #fcc; z-index: 9999;
  `;
  errorDiv.textContent = message;
  document.body.prepend(errorDiv);
  
  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.parentNode.removeChild(errorDiv);
    }
  }, 5000);
}

// DOM елементи
let sidebar, topicsList, menuToggle, progressFill, progressText;
let topicTitleEl, topicContentEl, topicBadgeEl;
let startQuizBtn, markCompleteBtn;
let quizModal, closeModalBtn;
let tooltip, successAnimation;

// Quiz runtime
let currentTopic = null;
let quizData = [];
let shuffledQuestions = [];
let currentQIndex = 0;
let selectedAnswers = [];

// Flashcards runtime
let flashIndex = 0;
let flashFlipped = false;

// =========================================================
// Инициализация с error handling
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  try {
    console.log('Инициализиране на приложението...');
    
    cacheDom();
    
    if (!sidebar) {
      throw new Error('Липсва sidebar element - проверете HTML структурата');
    }
    
    initProgress();
    buildSidebar();
    attachGlobalEvents();
    
    // Безопасен избор на първата тема
    if (TOPICS_DATA.topics && TOPICS_DATA.topics.length > 0) {
      selectTopic(TOPICS_DATA.topics[0]);
    } else {
      throw new Error('Няма налични теми за зареждане');
    }
    
    console.log('Приложението е заредено успешно!');
  } catch (error) {
    console.error('Грешка при зареждане:', error);
    showErrorMessage('Възникна грешка при зареждане на приложението: ' + error.message);
  }
});

function cacheDom() {
  sidebar = document.getElementById('sidebar');
  topicsList = document.getElementById('topicsList');
  menuToggle = document.getElementById('menuToggle');
  progressFill = document.getElementById('progressFill');
  progressText = document.getElementById('progressText');
  
  topicTitleEl = document.getElementById('topicTitle');
  topicContentEl = document.getElementById('topicContent');
  topicBadgeEl = document.getElementById('topicBadge');
  
  startQuizBtn = document.getElementById('startQuizBtn');
  markCompleteBtn = document.getElementById('markCompleteBtn');
  
  quizModal = document.getElementById('quizModal');
  closeModalBtn = document.getElementById('closeModalBtn');
  
  tooltip = document.getElementById('tooltip');
  successAnimation = document.getElementById('successAnimation');

  // Reset progress бутон
  const resetBtn = document.getElementById('resetProgress');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetProgress);
  }
}

function attachGlobalEvents() {
  // Sidebar toggle за мобилни
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      const isOpen = sidebar.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
    });
  }

  // Quiz modal затваряне - ФИКСИРАНО
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeQuizModal();
    });
  }
  
  if (quizModal) {
    quizModal.addEventListener('click', (e) => {
      if (e.target === quizModal || e.target.classList.contains('modal__overlay')) {
        e.preventDefault();
        e.stopPropagation();
        closeQuizModal();
      }
    });
  }

  // Tooltip събития
  document.addEventListener('mouseover', maybeShowTooltip);
  document.addEventListener('mouseout', maybeHideTooltip);
  document.addEventListener('mousemove', (e) => {
    if (tooltip && !tooltip.classList.contains('hidden')) {
      positionTooltip(e);
    }
  });

  // Escape key за затваряне на модал - ФИКСИРАНО
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      if (quizModal && !quizModal.classList.contains('hidden')) {
        closeQuizModal();
      }
    }
  });
}

// =========================================================
// Sidebar и навигация
// =========================================================
function buildSidebar() {
  if (!topicsList) {
    console.warn('Topics list element not found');
    return;
  }
  
  topicsList.innerHTML = '';
  TOPICS_DATA.topics.forEach((topic, index) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'sidebar__item';
    btn.innerHTML = `${topic.title}`;
    btn.setAttribute('role', 'menuitem');
    btn.setAttribute('tabindex', '0');
    
    btn.addEventListener('click', () => {
      selectTopic(topic);
      // Затваряме sidebar на мобилни устройства
      if (window.innerWidth <= 768 && sidebar) {
        sidebar.classList.remove('open');
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Keyboard navigation
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
    
    li.appendChild(btn);
    topicsList.appendChild(li);
  });
  
  refreshSidebarStatus();
  updateProgressBar();
}

function refreshSidebarStatus() {
  if (!topicsList) return;
  
  const buttons = topicsList.querySelectorAll('.sidebar__item');
  buttons.forEach((btn, idx) => {
    const topic = TOPICS_DATA.topics[idx];
    if (!topic) return;
    
    const progress = progressMap[topic.id];
    btn.classList.remove('active', 'completed');

    if (progress && progress.quizScore >= 80) {
      btn.classList.add('completed');
    }
  });
}

function updateProgressBar() {
  const { percent, completed, total } = calcCompletedPercentage();
  if (progressFill) progressFill.style.width = `${percent}%`;
  if (progressText) progressText.textContent = `${completed}/${total}`;
  
  if (percent === 100) {
    setTimeout(() => showSuccessAnimation(), 500);
  }
}

// =========================================================
// Избор на тема с error handling
// =========================================================
function selectTopic(topic) {
  if (!topic || !topic.id) {
    console.error('Invalid topic provided');
    showErrorMessage('Невалидна тема');
    return;
  }
  
  console.log('Зареждане на тема:', topic.title);
  currentTopic = topic;
  
  // Безопасно отбелязване като прочетена
  if (progressMap[topic.id]) {
    progressMap[topic.id].read = true;
  }
  
  refreshSidebarStatus();
  updateProgressBar();

  // Активна тема в sidebar
  if (topicsList) {
    const btns = topicsList.querySelectorAll('.sidebar__item');
    btns.forEach((b) => b.classList.remove('active'));
    const idx = TOPICS_DATA.topics.findIndex((t) => t.id === topic.id);
    if (btns[idx]) btns[idx].classList.add('active');
  }

  // Заглавие
  if (topicTitleEl) topicTitleEl.textContent = topic.title;

  // Съдържание
  renderTopicContent(topic);

  // Badge за статус
  updateTopicBadge();

  // Бутони за действие
  if (startQuizBtn) {
    startQuizBtn.onclick = (e) => {
      e.preventDefault();
      console.log('Стартиране на тест...');
      startQuiz();
    };
  }
  
  if (markCompleteBtn) {
    markCompleteBtn.onclick = (e) => {
      e.preventDefault();
      console.log('Отбелязване на тема...');
      markTopicComplete();
    };
  }
}

function updateTopicBadge() {
  if (!topicBadgeEl || !currentTopic) return;
  
  const prog = progressMap[currentTopic.id];
  if (!prog) return;
  
  if (prog.quizScore >= 80) {
    topicBadgeEl.textContent = `✓ Тест: ${prog.quizScore}%`;
    topicBadgeEl.style.display = 'inline-block';
  } else if (prog.read) {
    topicBadgeEl.textContent = '📖 Прочетена';
    topicBadgeEl.style.display = 'inline-block';
  } else {
    topicBadgeEl.style.display = 'none';
  }
}

function renderTopicContent(topic) {
  if (!topicContentEl) {
    console.warn('Topic content element not found');
    return;
  }
  
  let html = '';
  
  // Основно теоретично съдържание
  html += topic.theory || '<div class="topic-section"><p>Съдържанието ще бъде добавено скоро...</p></div>';

  // Флашкарти
  if (topic.flashcards && topic.flashcards.length > 0) {
    html += renderFlashcardsSection(topic);
  }

  // Тест
  if (topic.quiz && topic.quiz.length > 0) {
    html += renderQuizSection(topic);
  }

  // Практически примери
  if (topic.examples && topic.examples.length > 0) {
    html += renderExamplesSection(topic);
  }

  // Полезни линкове
  if (topic.links && topic.links.length > 0) {
    html += renderLinksSection(topic);
  }

  topicContentEl.innerHTML = html;

  // Инициализиране на флашкартите
  if (topic.flashcards && topic.flashcards.length > 0) {
    setTimeout(() => initFlashcards(topic), 100);
  }
}

function renderFlashcardsSection(topic) {
  const firstCard = topic.flashcards[0];
  return `
    <details class="topic-section" style="margin-top: 2rem;">
      <summary style="font-weight: 600; cursor: pointer; margin-bottom: 1rem;"><strong>🧠 Флешкарти</strong></summary>
      <div class="flashcard-container" style="display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 1rem 0;">
        <div id="flashcard" class="flashcard">
          <div class="flashcard-inner" id="flashcardInner">
            <div class="front">
              ${firstCard.term}
            </div>
            <div class="back">
              ${firstCard.definition}
            </div>
          </div>
        </div>
        <div class="flash-controls">
          <button id="prevFlash" class="btn btn--sm btn--secondary">⬅ Назад</button>
          <button id="flipFlash" class="btn btn--sm btn--primary">🔄 Обърни</button>
          <button id="nextFlash" class="btn btn--sm btn--secondary">Напред ➡</button>
        </div>
        <div id="flashCounter" style="font-size: 0.9rem; color: #718096;">1 / ${topic.flashcards.length}</div>
      </div>
    </details>`;
}

function renderQuizSection(topic) {
  const progress = progressMap[topic.id] || { quizScore: 0 };
  return `
    <details class="topic-section" style="margin-top: 2rem;">
      <summary style="font-weight: 600; cursor: pointer; margin-bottom: 1rem;">
        <strong>🎯 Тест ${topic.quiz.length} въпроса</strong>
        ${progress.quizScore > 0 ? ` - Последен резултат: ${progress.quizScore}%` : ''}
      </summary>
      <p>Тестът съдържа ${topic.quiz.length} въпроса. За да преминете темата успешно, трябва да постигнете поне 80%.</p>
      <button class="btn btn--primary" onclick="LawApp.startQuiz()">
        🎯 Започни теста
      </button>
    </details>`;
}

function renderExamplesSection(topic) {
  return `
    <details class="topic-section" style="margin-top: 2rem;">
      <summary style="font-weight: 600; cursor: pointer; margin-bottom: 1rem;"><strong>🛠️ Практически примери</strong></summary>
      <ul style="margin-left: 1rem;">
        ${topic.examples.map((ex) => `<li style="margin-bottom: 0.5rem;">${ex}</li>`).join('')}
      </ul>
    </details>`;
}

function renderLinksSection(topic) {
  return `
    <details class="topic-section" style="margin-top: 2rem;">
      <summary style="font-weight: 600; cursor: pointer; margin-bottom: 1rem;"><strong>🔗 Полезни линкове</strong></summary>
      <ul style="margin-left: 1rem;">
        ${topic.links.map((link) => `<li style="margin-bottom: 0.5rem;"><a href="${link}" target="_blank" rel="noopener">${link}</a></li>`).join('')}
      </ul>
    </details>`;
}

function markTopicComplete() {
  if (!currentTopic) return;
  
  const progress = progressMap[currentTopic.id];
  if (!progress) return;
  
  const isCompleted = progress.read;
  if (isCompleted) {
    progress.read = false;
    progress.quizScore = 0;
  } else {
    progress.read = true;
  }
  
  refreshSidebarStatus();
  updateProgressBar();
  updateTopicBadge();
}

// =========================================================
// Флашкарти с подобрено error handling
// =========================================================
function initFlashcards(topic) {
  if (!topic || !topic.flashcards || topic.flashcards.length === 0) {
    console.warn('No flashcards available for topic');
    return;
  }
  
  console.log('Инициализиране на флашкарти за:', topic.title);
  
  const flashcardEl = document.getElementById('flashcard');
  const prevBtn = document.getElementById('prevFlash');
  const nextBtn = document.getElementById('nextFlash');
  const flipBtn = document.getElementById('flipFlash');
  const counterEl = document.getElementById('flashCounter');
  const innerEl = document.getElementById('flashcardInner');
  
  if (!flashcardEl || !innerEl) {
    console.warn('Flashcard elements not found');
    return;
  }
  
  flashIndex = 0;
  flashFlipped = false;

  function renderFlashcard() {
    if (flashIndex < 0 || flashIndex >= topic.flashcards.length) {
      console.error('Invalid flashcard index:', flashIndex);
      return;
    }
    
    const card = topic.flashcards[flashIndex];
    const front = flashcardEl.querySelector('.front');
    const back = flashcardEl.querySelector('.back');
    
    if (front) front.textContent = card.term;
    if (back) back.textContent = card.definition;
    if (counterEl) counterEl.textContent = `${flashIndex + 1} / ${topic.flashcards.length}`;
    
    // Рестартиране на анимацията
    flashFlipped = false;
    innerEl.style.transform = 'rotateY(0deg)';
  }

  function flipCard() {
    flashFlipped = !flashFlipped;
    innerEl.style.transform = flashFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
  }

  // Event listeners с премахване на стари
  if (prevBtn) {
    prevBtn.replaceWith(prevBtn.cloneNode(true));
    document.getElementById('prevFlash').addEventListener('click', (e) => {
      e.preventDefault();
      flashIndex = (flashIndex - 1 + topic.flashcards.length) % topic.flashcards.length;
      renderFlashcard();
    });
  }
  
  if (nextBtn) {
    nextBtn.replaceWith(nextBtn.cloneNode(true));
    document.getElementById('nextFlash').addEventListener('click', (e) => {
      e.preventDefault();
      flashIndex = (flashIndex + 1) % topic.flashcards.length;
      renderFlashcard();
    });
  }
  
  if (flipBtn) {
    flipBtn.replaceWith(flipBtn.cloneNode(true));
    document.getElementById('flipFlash').addEventListener('click', (e) => {
      e.preventDefault();
      flipCard();
    });
  }
  
  if (flashcardEl) {
    // Clone to remove old listeners
    const newFlashcard = flashcardEl.cloneNode(true);
    flashcardEl.parentNode.replaceChild(newFlashcard, flashcardEl);
    newFlashcard.addEventListener('click', flipCard);
  }

  renderFlashcard();
}

// =========================================================
// Quiz система - ФИКСИРАНА и подобрена
// =========================================================
function startQuiz() {
  console.log('Стартиране на тест за:', currentTopic?.title);
  
  if (!currentTopic || !currentTopic.quiz || currentTopic.quiz.length === 0) {
    showErrorMessage('Няма налични въпроси за тази тема.');
    return;
  }

  try {
    quizData = currentTopic.quiz;
    shuffledQuestions = shuffle([...quizData]);
    currentQIndex = 0;
    selectedAnswers = new Array(shuffledQuestions.length).fill(null);
    
    openQuizModal();
    renderQuizQuestion();
  } catch (error) {
    console.error('Грешка при стартиране на тест:', error);
    showErrorMessage('Възникна грешка при стартиране на теста.');
  }
}

function openQuizModal() {
  if (!quizModal) {
    console.error('Quiz modal element not found');
    return;
  }
  
  console.log('Отваряне на модал за тест...');
  quizModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Focus management
  setTimeout(() => {
    const firstFocusable = quizModal.querySelector('button:not([disabled]), input:not([disabled])');
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }, 100);
}

function closeQuizModal() {
  console.log('Затваряне на модал за тест...');
  if (quizModal) {
    quizModal.classList.add('hidden');
    document.body.style.overflow = '';
    
    // Return focus to quiz button
    setTimeout(() => {
      if (startQuizBtn) {
        startQuizBtn.focus();
      }
    }, 100);
  }
}

function renderQuizQuestion() {
  if (!quizModal || !shuffledQuestions || shuffledQuestions.length === 0) {
    console.warn('No quiz modal or questions');
    return;
  }
  
  if (currentQIndex < 0 || currentQIndex >= shuffledQuestions.length) {
    console.error('Invalid question index:', currentQIndex);
    return;
  }
  
  console.log(`Показване на въпрос ${currentQIndex + 1}`);
  
  const q = shuffledQuestions[currentQIndex];
  const body = quizModal.querySelector('.modal__body');
  const footer = quizModal.querySelector('.modal__footer');
  const progress = quizModal.querySelector('#quizProgress');
  const heading = quizModal.querySelector('#quizHeading');

  if (heading) heading.textContent = `🎯 Въпрос ${currentQIndex + 1}`;
  if (progress) progress.textContent = `${currentQIndex + 1} от ${shuffledQuestions.length}`;

  if (body) {
    const inputType = Array.isArray(q.correctIndex) ? 'checkbox' : 'radio';
    const inputName = Array.isArray(q.correctIndex) ? 'quizAnswers' : 'quizAnswer';
    
    body.innerHTML = `
      <div class="quiz-question">${q.q}</div>
      <ul class="quiz-options">
        ${q.answers
          .map(
            (choice, i) => `
            <li>
              <label>
                <input type="${inputType}" name="${inputName}" value="${i}" ${
                  Array.isArray(q.correctIndex) 
                    ? (selectedAnswers[currentQIndex] && selectedAnswers[currentQIndex].includes(i) ? 'checked' : '')
                    : (selectedAnswers[currentQIndex] === i ? 'checked' : '')
                }>
                <span>${choice}</span>
              </label>
            </li>`
          )
          .join('')}
      </ul>`;

    // Запазване на отговора
    const inputs = body.querySelectorAll(`input[name="${inputName}"]`);
    inputs.forEach((input) => {
      input.addEventListener('change', (e) => {
        if (Array.isArray(q.correctIndex)) {
          // Multi-choice
          if (!selectedAnswers[currentQIndex]) selectedAnswers[currentQIndex] = [];
          if (e.target.checked) {
            if (!selectedAnswers[currentQIndex].includes(parseInt(e.target.value))) {
              selectedAnswers[currentQIndex].push(parseInt(e.target.value));
            }
          } else {
            selectedAnswers[currentQIndex] = selectedAnswers[currentQIndex].filter(x => x !== parseInt(e.target.value));
          }
        } else {
          // Single choice
          selectedAnswers[currentQIndex] = parseInt(e.target.value);
        }
        
        // Визуален feedback
        updateQuestionStyles(body, inputName);
      });
    });
    
    // Initial styles
    updateQuestionStyles(body, inputName);
  }

  if (footer) {
    footer.innerHTML = `
      ${currentQIndex > 0 ? '<button class="btn btn--secondary" id="prevQuestion">⬅ Назад</button>' : '<span></span>'}
      <button class="btn btn--primary" id="nextQuestion">${currentQIndex === shuffledQuestions.length - 1 ? '🏁 Завърши' : 'Напред ➡'}</button>
    `;

    const prevBtn = footer.querySelector('#prevQuestion');
    const nextBtn = footer.querySelector('#nextQuestion');
    
    if (prevBtn) {
      prevBtn.onclick = (e) => {
        e.preventDefault();
        currentQIndex--;
        renderQuizQuestion();
      };
    }
    
    if (nextBtn) {
      nextBtn.onclick = (e) => {
        e.preventDefault();
        if (currentQIndex === shuffledQuestions.length - 1) {
          finishQuiz();
        } else {
          currentQIndex++;
          renderQuizQuestion();
        }
      };
    }
  }
}

function updateQuestionStyles(body, inputName) {
  const labels = body.querySelectorAll('label');
  labels.forEach(label => {
    const input = label.querySelector('input');
    if (input && input.checked) {
      label.style.borderColor = 'var(--color-primary)';
      label.style.background = 'var(--gradient-subtle)';
    } else {
      label.style.borderColor = 'var(--color-border-light)';
      label.style.background = 'transparent';
    }
  });
}

function finishQuiz() {
  if (!shuffledQuestions || !selectedAnswers) {
    console.error('Quiz data is invalid');
    showErrorMessage('Грешка при обработка на резултатите');
    return;
  }
  
  console.log('Завършване на теста...');
  let correct = 0;
  
  shuffledQuestions.forEach((q, i) => {
    const userAnswer = selectedAnswers[i];
    
    if (Array.isArray(q.correctIndex)) {
      // Multi-choice въпрос
      const userAnswers = userAnswer || [];
      const correctAnswers = q.correctIndex;
      
      if (arraysEqual(userAnswers.sort(), correctAnswers.sort())) {
        correct++;
      }
    } else {
      // Single choice въпрос
      if (userAnswer === q.correctIndex) {
        correct++;
      }
    }
  });
  
  const percent = Math.round((correct / shuffledQuestions.length) * 100);
  
  // Безопасно записване на резултата
  if (currentTopic && currentTopic.id && progressMap[currentTopic.id]) {
    progressMap[currentTopic.id].quizScore = percent;
  }
  
  console.log(`Резултат: ${correct}/${shuffledQuestions.length} (${percent}%)`);
  
  refreshSidebarStatus();
  updateProgressBar();
  updateTopicBadge();
  
  showQuizResults(correct, percent);
}

// Помощна функция за сравняване на масиви
function arraysEqual(a, b) {
  return Array.isArray(a) && Array.isArray(b) && 
         a.length === b.length && 
         a.every((val, i) => val === b[i]);
}

function showQuizResults(score, percent) {
  const body = quizModal.querySelector('.modal__body');
  const footer = quizModal.querySelector('.modal__footer');
  const heading = quizModal.querySelector('#quizHeading');
  const progress = quizModal.querySelector('#quizProgress');

  if (heading) heading.textContent = '🎉 Резултати от теста';
  if (progress) progress.textContent = '';

  const emoji = percent >= 80 ? '🏆' : percent >= 60 ? '😊' : percent >= 40 ? '😐' : '😞';
  const message = percent >= 80 ? 'Отличен резултат!' : percent >= 60 ? 'Добър резултат!' : 'Можете да се подобрите!';

  let html = `
    <div class="result-summary">
      <div style="font-size: 3rem; margin-bottom: 1rem;">${emoji}</div>
      <h3>${message}</h3>
      <p style="font-size: 1.2rem;">Верни отговори: <strong>${score}</strong> от ${shuffledQuestions.length} (<strong>${percent}%</strong>)</p>
    </div>
    
    <h4>Подробен преглед:</h4>
  `;

  shuffledQuestions.forEach((q, i) => {
    const userAnswer = selectedAnswers[i];
    let isCorrect = false;
    
    if (Array.isArray(q.correctIndex)) {
      const userAnswers = userAnswer || [];
      const correctAnswers = q.correctIndex;
      isCorrect = arraysEqual(userAnswers.sort(), correctAnswers.sort());
    } else {
      isCorrect = userAnswer === q.correctIndex;
    }
    
    let userAnswerText = 'Без отговор';
    if (Array.isArray(q.correctIndex)) {
      if (userAnswer && userAnswer.length > 0) {
        userAnswerText = userAnswer.map(idx => q.answers[idx]).join(', ');
      }
    } else {
      if (userAnswer !== null && userAnswer !== undefined) {
        userAnswerText = q.answers[userAnswer];
      }
    }
    
    let correctAnswerText = '';
    if (Array.isArray(q.correctIndex)) {
      correctAnswerText = q.correctIndex.map(idx => q.answers[idx]).join(', ');
    } else {
      correctAnswerText = q.answers[q.correctIndex];
    }
    
    html += `
      <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
        <p><strong>Въпрос ${i + 1}:</strong> ${q.q}</p>
        <p><strong>Вашият отговор:</strong> ${userAnswerText} ${isCorrect ? '✓' : '✗'}</p>
        ${!isCorrect ? `<p><strong>Правилният отговор:</strong> ${correctAnswerText}</p>` : ''}
        <p><em>💡 Обяснение:</em> ${q.explanation}</p>
      </div>
    `;
  });

  if (body) body.innerHTML = html;

  if (footer) {
    footer.innerHTML = `
      <button class="btn btn--secondary" id="retryQuiz">🔄 Опитай отново</button>
      <button class="btn btn--primary" id="closeQuiz">✓ Затвори</button>
    `;
    
    const retryBtn = footer.querySelector('#retryQuiz');
    const closeBtn = footer.querySelector('#closeQuiz');
    
    if (retryBtn) {
      retryBtn.onclick = (e) => {
        e.preventDefault();
        startQuiz();
      };
    }
    if (closeBtn) {
      closeBtn.onclick = (e) => {
        e.preventDefault();
        closeQuizModal();
      };
    }
  }
}

// =========================================================
// Tooltip система
// =========================================================
function maybeShowTooltip(e) {
  const termEl = e.target.closest('.term');
  if (termEl && termEl.dataset.tooltip && tooltip) {
    const content = tooltip.querySelector('.tooltip-content');
    if (content) content.textContent = termEl.dataset.tooltip;
    
    tooltip.classList.remove('hidden');
    tooltip.classList.add('visible');
    positionTooltip(e);
  }
}

function maybeHideTooltip(e) {
  if (!e.target.closest('.term') && tooltip) {
    tooltip.classList.add('hidden');
    tooltip.classList.remove('visible');
  }
}

function positionTooltip(e) {
  if (!tooltip) return;
  
  const offset = 12;
  const x = e.clientX + offset;
  const y = e.clientY - offset;
  
  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
}

// =========================================================
// Анимация при завършване
// =========================================================
function showSuccessAnimation() {
  if (!successAnimation || !successAnimation.classList.contains('hidden')) return;
  
  successAnimation.classList.remove('hidden');
  
  // Автоматично затваряне след 4 секунди
  setTimeout(() => {
    successAnimation.classList.add('hidden');
  }, 4000);
  
  // Focus management
  const closeBtn = successAnimation.querySelector('button');
  if (closeBtn) closeBtn.focus();
}

// =========================================================
// Reset прогрес
// =========================================================
function resetProgress() {
  if (confirm('Сигурни ли сте, че искате да нулирате целия прогрес?')) {
    TOPICS_DATA.topics.forEach(t => {
      progressMap[t.id] = { read: false, quizScore: 0 };
    });
    
    refreshSidebarStatus();
    updateProgressBar();
    updateTopicBadge();
    
    alert('Прогресът е нулиран!');
  }
}

// =========================================================
// Global functions - модуларизирани
// =========================================================
const LawApp = {
  startQuiz: startQuiz,
  selectTopic: selectTopic,
  resetProgress: resetProgress,
  closeQuizModal: closeQuizModal
};

// За backward compatibility
window.LawApp = LawApp;
window.startQuiz = startQuiz;
