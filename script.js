// =====================================================
// NATTAN FITNESS TRACKER — script.js
// Lógica principal do app
// =====================================================

'use strict';

// =====================================================
// DADOS DOS TREINOS
// =====================================================
const WORKOUT_DATA = [
  // SEGUNDA (índice 0) — Upper A
  {
    day: 'Segunda',
    focus: 'Upper A',
    muscles: 'Peito, Costas e Correção',
    warmup: [
      'Mobilidade torácica — 2x10',
      'Wall slides — 2x12',
      'Face pull leve — 2x20',
      'Prancha lateral — 2x30s cada lado',
      'Série leve do primeiro exercício — 2 séries'
    ],
    exercises: [
      { name: 'Supino reto com halteres', sets: 4, repsMin: 8, repsMax: 10, rest: 90, notes: 'Retrai escápulas antes de descer. Controle na excêntrica.', unilateral: false },
      { name: 'Remada baixa neutra', sets: 4, repsMin: 8, repsMax: 12, rest: 90, notes: 'Puxe o cotovelo para trás, não para cima. Escápulas juntas no final.', unilateral: false },
      { name: 'Supino inclinado com halteres', sets: 3, repsMin: 8, repsMax: 10, rest: 90, notes: '30-45° de inclinação. Ombros não protraem.', unilateral: false },
      { name: 'Puxada alta pegada neutra', sets: 3, repsMin: 10, repsMax: 12, rest: 75, notes: 'Deprima as escápulas antes de puxar. Cotovelo aponta para o chão.', unilateral: false },
      { name: 'Crucifixo unilateral no cabo', sets: 3, repsMin: 12, repsMax: 15, rest: 60, notes: 'Inicia pelo lado direito. Arco amplo, cotovelo levemente flexionado.', unilateral: true, startSide: 'direito' },
      { name: 'Elevação lateral com halteres', sets: 4, repsMin: 12, repsMax: 20, rest: 60, notes: 'Cotovelo levemente flexionado. Não encole os ombros.', unilateral: false },
      { name: 'Face pull', sets: 3, repsMin: 15, repsMax: 20, rest: 60, notes: 'Puxe para a testa. Ativa deltóide posterior e romboides.', unilateral: false },
      { name: 'Tríceps corda', sets: 3, repsMin: 10, repsMax: 15, rest: 60, notes: 'Abra a corda no final. Cotovelo fixo.', unilateral: false },
      { name: 'Rosca direta ou alternada', sets: 3, repsMin: 10, repsMax: 12, rest: 60, notes: 'Supinação completa no topo.', unilateral: false }
    ]
  },
  // TERÇA (índice 1) — Lower A
  {
    day: 'Terça',
    focus: 'Lower A',
    muscles: 'Pernas e Core Anti-rotação',
    warmup: [
      'Mobilidade de quadril — 2x10 cada lado',
      'Agachamento livre sem carga — 2x12',
      'Dead bug — 2x10 cada lado',
      'Ponte de glúteo — 2x15'
    ],
    exercises: [
      { name: 'Agachamento livre ou hack squat', sets: 4, repsMin: 6, repsMax: 10, rest: 120, notes: 'Joelhos alinhados. Coluna neutra. Desça controlado.', unilateral: false },
      { name: 'Terra romeno com halteres/barra', sets: 4, repsMin: 8, repsMax: 10, rest: 120, notes: 'Quadril para trás. Não arredonda a lombar. Sente o isquiotibial.', unilateral: false },
      { name: 'Leg press', sets: 3, repsMin: 10, repsMax: 12, rest: 90, notes: 'Pés centralizados. Joelho não cai para dentro.', unilateral: false },
      { name: 'Mesa flexora', sets: 3, repsMin: 10, repsMax: 15, rest: 75, notes: 'Flexão controlada. Sem impulso.', unilateral: false },
      { name: 'Panturrilha em pé', sets: 4, repsMin: 10, repsMax: 15, rest: 60, notes: 'Amplitude completa. Pausa no topo.', unilateral: false },
      { name: 'Pallof press', sets: 3, repsMin: 12, repsMax: 15, rest: 45, notes: 'Anti-rotação. Respira durante o movimento. Core firme.', unilateral: true, startSide: 'direito' },
      { name: 'Prancha lateral', sets: 3, repsMin: 30, repsMax: 45, rest: 45, notes: 'Quadril elevado. Corpo em linha reta.', unilateral: true, startSide: 'direito' },
      { name: 'Farmer walk unilateral', sets: 3, repsMin: 30, repsMax: 40, rest: 60, notes: 'Ombro deprimido. Core ativado. Não incline o tronco.', unilateral: true, startSide: 'direito' }
    ]
  },
  // QUARTA (índice 2) — Pull Postural
  {
    day: 'Quarta',
    focus: 'Pull Postural',
    muscles: 'Costas, Ombro Posterior e Postura',
    warmup: [
      'Chin tuck — 2x12',
      'Wall slides — 2x12',
      'Face pull leve — 2x20',
      'Alongamento de peitoral — 2x30s'
    ],
    exercises: [
      { name: 'Barra fixa assistida ou puxada alta', sets: 4, repsMin: 6, repsMax: 10, rest: 90, notes: 'Deprima escápulas antes de puxar. Cotovelo aponta para o bolso.', unilateral: false },
      { name: 'Remada apoiada no banco/máquina', sets: 4, repsMin: 8, repsMax: 10, rest: 90, notes: 'Retrai escápulas na contração. Sem balanço de tronco.', unilateral: false },
      { name: 'Remada unilateral com halter', sets: 3, repsMin: 10, repsMax: 12, rest: 75, notes: 'Cotovelo paralelo ao tronco. Inicia pelo lado direito.', unilateral: true, startSide: 'direito' },
      { name: 'Remada baixa aberta', sets: 3, repsMin: 10, repsMax: 12, rest: 75, notes: 'Pegada pronada larga. Ativa romboides e trapézio médio.', unilateral: false },
      { name: 'Crucifixo inverso', sets: 4, repsMin: 12, repsMax: 20, rest: 60, notes: 'Polegar aponta para cima. Contrai escápulas no final.', unilateral: false },
      { name: 'Face pull', sets: 4, repsMin: 15, repsMax: 20, rest: 60, notes: 'Foco em deltóide posterior e trapézio inferior.', unilateral: false },
      { name: 'Y-raise inclinado', sets: 3, repsMin: 12, repsMax: 15, rest: 60, notes: 'Inclinado a 45°. Braços formam Y. Trapézio inferior.', unilateral: false },
      { name: 'Rosca martelo', sets: 3, repsMin: 10, repsMax: 12, rest: 60, notes: 'Polegar aponta para cima. Braquial e braquiorradial.', unilateral: false }
    ]
  },
  // QUINTA (índice 3) — Lower B
  {
    day: 'Quinta',
    focus: 'Lower B',
    muscles: 'Posterior, Glúteos e Estabilidade',
    warmup: [
      'Mobilidade de tornozelo e quadril — 2x10',
      'Ponte de glúteo — 2x15',
      'Dead bug — 2x10',
      'Agachamento leve — 2x12'
    ],
    exercises: [
      { name: 'Terra romeno', sets: 4, repsMin: 6, repsMax: 10, rest: 120, notes: 'Carga maior que na terça. Foco total nos isquiotibiais.', unilateral: false },
      { name: 'Agachamento búlgaro', sets: 3, repsMin: 8, repsMax: 10, rest: 90, notes: 'Inicia pela perna direita. Joelho não passa o pé.', unilateral: true, startSide: 'direito' },
      { name: 'Cadeira extensora', sets: 3, repsMin: 12, repsMax: 15, rest: 75, notes: 'Extensão completa. Pausa isométrica no topo.', unilateral: false },
      { name: 'Flexora sentado ou deitado', sets: 4, repsMin: 10, repsMax: 15, rest: 75, notes: 'Quadril fixo. Amplitude completa.', unilateral: false },
      { name: 'Hip thrust', sets: 4, repsMin: 8, repsMax: 12, rest: 90, notes: 'Contrai glúteo no topo. Não hiperextende a lombar.', unilateral: false },
      { name: 'Panturrilha sentado', sets: 4, repsMin: 12, repsMax: 20, rest: 60, notes: 'Soleus. Amplitude completa e pausa.', unilateral: false },
      { name: 'Dead bug', sets: 3, repsMin: 10, repsMax: 12, rest: 45, notes: 'Lombar colada no chão. Movimento lento e controlado.', unilateral: true, startSide: 'direito' },
      { name: 'Pallof press', sets: 3, repsMin: 12, repsMax: 15, rest: 45, notes: 'Não deixa o tronco rodar. Mantém postura ereta.', unilateral: true, startSide: 'direito' }
    ]
  },
  // SEXTA (índice 4) — Upper B
  {
    day: 'Sexta',
    focus: 'Upper B',
    muscles: 'Estética, Simetria e Hipertrofia',
    warmup: [
      'Mobilidade torácica — 2x10',
      'Wall slides — 2x12',
      'Face pull leve — 2x20',
      'Série leve do primeiro exercício'
    ],
    exercises: [
      { name: 'Supino inclinado com halteres', sets: 4, repsMin: 8, repsMax: 10, rest: 90, notes: 'Foco no peitoral clavicular. Controle total na descida.', unilateral: false },
      { name: 'Puxada alta neutra', sets: 4, repsMin: 8, repsMax: 12, rest: 90, notes: 'Amplitude completa. Deprima escápulas.', unilateral: false },
      { name: 'Desenvolvimento com halteres', sets: 3, repsMin: 8, repsMax: 10, rest: 90, notes: 'Não arqueie a lombar. Core contraído.', unilateral: false },
      { name: 'Remada unilateral na polia', sets: 3, repsMin: 10, repsMax: 12, rest: 75, notes: 'Inicia pelo lado direito.', unilateral: true, startSide: 'direito' },
      { name: 'Crossover unilateral', sets: 3, repsMin: 12, repsMax: 15, rest: 60, notes: 'Arco amplo. Inicia pelo lado direito.', unilateral: true, startSide: 'direito' },
      { name: 'Elevação lateral unilateral', sets: 4, repsMin: 12, repsMax: 20, rest: 60, notes: 'Inicia pelo lado direito. Sem encolher ombro.', unilateral: true, startSide: 'direito' },
      { name: 'Crucifixo inverso', sets: 3, repsMin: 15, repsMax: 20, rest: 60, notes: 'Deltóide posterior. Não usa trapézio.', unilateral: false },
      { name: 'Tríceps testa ou francês', sets: 3, repsMin: 10, repsMax: 12, rest: 60, notes: 'Cotovelos fixos apontando para cima.', unilateral: false },
      { name: 'Rosca inclinada', sets: 3, repsMin: 10, repsMax: 12, rest: 60, notes: 'Amplitude máxima. Supinação completa no topo.', unilateral: false }
    ]
  },
  // SÁBADO (índice 5) — Opcional
  {
    day: 'Sábado',
    focus: 'Postura/Mobilidade',
    muscles: 'Opcional — Ativo e Leve',
    warmup: [],
    optional: true,
    exercises: [
      { name: 'Caminhada inclinada', sets: 1, repsMin: 25, repsMax: 35, rest: 0, notes: '25-35 minutos em inclinação moderada.', unilateral: false },
      { name: 'Chin tuck', sets: 3, repsMin: 12, repsMax: 12, rest: 30, notes: 'Queixo para dentro, não para baixo.', unilateral: false },
      { name: 'Wall slides', sets: 3, repsMin: 12, repsMax: 12, rest: 30, notes: 'Costas na parede, deslize braços mantendo contato total.', unilateral: false },
      { name: 'Alongamento de peitoral', sets: 3, repsMin: 40, repsMax: 40, rest: 30, notes: 'Braços em L na porta, empurre o peito para frente.', unilateral: false },
      { name: 'Extensão torácica', sets: 3, repsMin: 10, repsMax: 10, rest: 30, notes: 'Rola sobre a torácica, não na lombar.', unilateral: false },
      { name: 'Face pull com elástico', sets: 3, repsMin: 20, repsMax: 20, rest: 30, notes: 'Puxe para a testa, cotovelos acima dos ombros.', unilateral: false },
      { name: 'Prancha lateral', sets: 3, repsMin: 30, repsMax: 30, rest: 30, notes: 'Quadril elevado, corpo em linha reta.', unilateral: true, startSide: 'direito' }
    ]
  },
  // DOMINGO (índice 6) — Descanso
  {
    day: 'Domingo',
    focus: 'Descanso',
    muscles: 'Recuperação',
    warmup: [],
    rest: true,
    exercises: []
  }
];

// =====================================================
// NÍVEIS E XP
// =====================================================
const LEVELS = [
  { level: 1,  xp: 0,     name: 'Frango Consciente 🐔' },
  { level: 2,  xp: 100,   name: 'Novato Motivado' },
  { level: 3,  xp: 250,   name: 'Iniciante Focado' },
  { level: 4,  xp: 450,   name: 'Pupilo do Shape' },
  { level: 5,  xp: 700,   name: 'Recruta da Hipertrofia 💪' },
  { level: 6,  xp: 1000,  name: 'Atleta em Formação' },
  { level: 7,  xp: 1350,  name: 'Guerreiro do Ferro' },
  { level: 8,  xp: 1750,  name: 'Veterano da Academia' },
  { level: 9,  xp: 2200,  name: 'Mestre do Aquecimento' },
  { level: 10, xp: 2700,  name: 'Shape em Construção 🏗️' },
  { level: 15, xp: 5000,  name: 'Destruidor de Plateaus' },
  { level: 20, xp: 9000,  name: 'Monstro Postural 🦍' },
  { level: 25, xp: 14000, name: 'Senhor da Progressão' },
  { level: 30, xp: 20000, name: 'Tanque Alinhado 🛡️' },
  { level: 40, xp: 32000, name: 'Lenda da Hipertrofia' },
  { level: 50, xp: 50000, name: 'Projeto Hollywood 🎬' }
];

// =====================================================
// EXERCÍCIOS POSTURAIS
// =====================================================
const POSTURA_EXERCISES = [
  { name: 'Chin Tuck', sets: '2x12', cue: 'Queixo para dentro, não para baixo. Ativa flexores cervicais profundos.', timed: false },
  { name: 'Wall Slides', sets: '2x12', cue: 'Costas na parede, deslize braços mantendo contato total.', timed: false },
  { name: 'Alongamento de Peitoral na Porta', sets: '2x40s', cue: 'Braços em L, empurre suavemente o peito para frente.', timed: true, seconds: 40 },
  { name: 'Extensão Torácica (chão/foam roller)', sets: '2x10', cue: 'Rola sobre a torácica, não na lombar.', timed: false },
  { name: 'Face Pull com Elástico', sets: '2x20', cue: 'Puxe para a testa, cotovelos acima dos ombros.', timed: false },
  { name: 'Prancha Lateral', sets: '2x30s cada lado', cue: 'Quadril elevado, corpo em linha reta.', timed: true, seconds: 30 }
];

// =====================================================
// ESTADO DA APLICAÇÃO
// =====================================================
const STORAGE_KEY = 'nattan_fitness_data';

const DEFAULT_DATA = {
  profile: { name: 'Nattan', height: 180, currentWeight: 77 },
  xp: 0,
  level: 1,
  streak: 0,
  lastTrainingDate: null,
  weekTrainingDays: [],
  weightHistory: [],
  workoutHistory: [],
  personalRecords: {},
  dietLog: {},
  sleepLog: {},
  postureLog: {},
  currentSession: null
};

let appData = {};

// Estado da sessão de treino atual (em memória)
let sessionState = {
  active: false,
  dayIndex: null,
  startTime: null,
  timerInterval: null,
  setsCompleted: {},   // { exIndex: { setIndex: { weight, reps } } }
  warmupDone: [],
  prsAchieved: [],
  xpEarned: 0
};

// AudioContext compartilhado — criado no primeiro gesto do usuário (requisito Safari iOS)
let audioCtx = null;

// Estado do timer de descanso
let restTimerState = {
  active: false,
  remaining: 0,
  total: 0,
  interval: null,
  exerciseName: ''
};

// =====================================================
// PERSISTÊNCIA
// =====================================================
function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  } catch (e) {
    console.error('Erro ao salvar dados:', e);
  }
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      appData = Object.assign({}, DEFAULT_DATA, JSON.parse(raw));
      // Garante sub-objetos existam
      appData.profile     = appData.profile     || DEFAULT_DATA.profile;
      appData.dietLog     = appData.dietLog     || {};
      appData.sleepLog    = appData.sleepLog    || {};
      appData.postureLog  = appData.postureLog  || {};
      appData.personalRecords = appData.personalRecords || {};
      appData.weightHistory   = appData.weightHistory   || [];
      appData.workoutHistory  = appData.workoutHistory  || [];
      appData.weekTrainingDays = appData.weekTrainingDays || [];
    } else {
      appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
      saveData();
    }
  } catch (e) {
    console.error('Erro ao carregar dados:', e);
    appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

// =====================================================
// UTILITÁRIOS DE DATA
// =====================================================
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function todayDayIndex() {
  // 0 = segunda, 6 = domingo
  const d = new Date().getDay(); // 0=dom, 1=seg...
  return (d + 6) % 7;
}

function formatDate(isoStr) {
  if (!isoStr) return '—';
  const d = new Date(isoStr + 'T12:00:00');
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });
}

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}min ${s < 10 ? '0' : ''}${s}s`;
}

// =====================================================
// XP E NÍVEIS
// =====================================================
function getLevelInfo(xp) {
  let current = LEVELS[0];
  let next = LEVELS[1];
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].xp) {
      current = LEVELS[i];
      next = LEVELS[i + 1] || null;
    } else {
      break;
    }
  }
  return { current, next };
}

function addXP(amount, reason) {
  const before = appData.xp;
  appData.xp += amount;

  const infoBefore = getLevelInfo(before);
  const infoAfter  = getLevelInfo(appData.xp);

  appData.level = infoAfter.current.level;

  if (infoAfter.current.level > infoBefore.current.level) {
    showToast(`🎉 LEVEL UP! ${infoAfter.current.name}`, 'xp', 4000);
  }

  showToast(`+${amount} XP ${reason || ''}`, 'xp');
  saveData();
  updateDashboard();
}

// =====================================================
// TOASTS
// =====================================================
function showToast(msg, type = '', duration = 2800) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast' + (type ? ' ' + type : '');
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, duration);
}

// =====================================================
// NAVEGAÇÃO
// =====================================================
function navigateTo(screenName) {
  // Esconde todas as telas
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  // Mostra a tela alvo
  const screen = document.getElementById('screen-' + screenName);
  if (screen) screen.classList.add('active');

  const navBtn = document.querySelector(`.nav-btn[data-screen="${screenName}"]`);
  if (navBtn) navBtn.classList.add('active');

  // Atualiza título do header
  const titles = {
    dashboard: 'NattanFit 💪',
    treino: 'Treino',
    historico: 'Histórico',
    dieta: 'Dieta',
    postura: 'Postura'
  };
  document.getElementById('header-title').textContent = titles[screenName] || 'NattanFit';

  // Renderiza conteúdo específico da tela
  if (screenName === 'dashboard') updateDashboard();
  if (screenName === 'treino')    renderTreinoScreen();
  if (screenName === 'historico') renderHistorico();
  if (screenName === 'dieta')     renderDietaScreen();
  if (screenName === 'postura')   renderPosturaScreen();
}

// =====================================================
// DASHBOARD
// =====================================================
function updateDashboard() {
  const todayIdx = todayDayIndex();
  const todayData = WORKOUT_DATA[todayIdx];

  // Treino de hoje
  document.getElementById('today-day-name').textContent = todayData.day + ' — ' + todayData.focus;
  document.getElementById('today-muscle-groups').textContent = todayData.muscles;

  if (todayData.rest) {
    document.getElementById('btn-start-today').textContent = '😴 Dia de Descanso';
    document.getElementById('btn-start-today').disabled = true;
    document.getElementById('btn-start-today').style.opacity = '0.5';
  } else {
    document.getElementById('btn-start-today').textContent = 'Iniciar Treino de Hoje';
    document.getElementById('btn-start-today').disabled = false;
    document.getElementById('btn-start-today').style.opacity = '1';
  }

  // XP
  const info = getLevelInfo(appData.xp);
  document.getElementById('dash-level-name').textContent = info.current.name;

  if (info.next) {
    const progress = ((appData.xp - info.current.xp) / (info.next.xp - info.current.xp)) * 100;
    document.getElementById('dash-xp-numbers').textContent =
      `${appData.xp} XP — Nível ${info.current.level} • Próximo: ${info.next.xp} XP`;
    document.getElementById('dash-xp-bar').style.width = Math.min(100, progress) + '%';
  } else {
    document.getElementById('dash-xp-numbers').textContent = `${appData.xp} XP — Nível Máximo!`;
    document.getElementById('dash-xp-bar').style.width = '100%';
  }

  // Stats
  updateStreak();
  document.getElementById('dash-streak').textContent = appData.streak;
  document.getElementById('dash-weight').textContent = appData.profile.currentWeight || '—';

  // Treinos na semana
  const thisWeek = getThisWeekTrainings();
  document.getElementById('dash-week').textContent = thisWeek + '/5';

  // Próximo treino
  const nextIdx = (todayIdx + 1) % 7;
  const nextData = WORKOUT_DATA[nextIdx];
  document.getElementById('next-day-name').textContent = nextData.day + ' — ' + nextData.focus;
  document.getElementById('next-muscle-groups').textContent = nextData.muscles;
}

function getThisWeekTrainings() {
  const now = new Date();
  const startOfWeek = new Date(now);
  const day = now.getDay();
  const diff = (day === 0) ? 6 : day - 1; // segunda como início
  startOfWeek.setDate(now.getDate() - diff);
  startOfWeek.setHours(0, 0, 0, 0);

  return appData.workoutHistory.filter(w => {
    const d = new Date(w.date);
    return d >= startOfWeek;
  }).length;
}

function updateStreak() {
  if (!appData.lastTrainingDate) {
    appData.streak = 0;
    return;
  }

  const today = new Date(todayStr());
  const lastDate = new Date(appData.lastTrainingDate);
  const diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));

  if (diffDays > 1) {
    appData.streak = 0;
    saveData();
  }
}

// =====================================================
// TELA DE TREINO
// =====================================================
let selectedDayIndex = todayDayIndex();

function renderTreinoScreen() {
  // Marca o dia atual nos pills
  const pills = document.querySelectorAll('.day-pill');
  const todayIdx = todayDayIndex();

  pills.forEach(pill => {
    const idx = parseInt(pill.dataset.day);
    pill.classList.remove('active', 'today');
    if (idx === selectedDayIndex) pill.classList.add('active');
    if (idx === todayIdx) pill.classList.add('today');
  });

  renderSelectedDay();
}

function selectDay(idx) {
  selectedDayIndex = idx;
  renderTreinoScreen();
}

function renderSelectedDay() {
  const container = document.getElementById('workout-day-content');
  const data = WORKOUT_DATA[selectedDayIndex];
  const finishBtn = document.getElementById('btn-finish-workout');

  // Botão finalizar — só aparece quando sessão ativa no dia selecionado
  if (sessionState.active && sessionState.dayIndex === selectedDayIndex) {
    finishBtn.classList.add('visible');
  } else {
    finishBtn.classList.remove('visible');
  }

  if (data.rest) {
    container.innerHTML = `
      <div class="card rest-day-card">
        <div class="rest-icon">😴</div>
        <h2>Dia de Descanso</h2>
        <p>Descanse, coma bem e durma pelo menos 7 horas.<br>A recuperação é onde o músculo cresce.</p>
      </div>`;
    return;
  }

  if (data.optional) {
    container.innerHTML = `
      <div class="workout-day-header">
        <h2>${data.day} — ${data.focus}</h2>
        <p>${data.muscles}</p>
      </div>
      <div class="card optional-card">
        <h3>🧘 Dia Opcional</h3>
        <p>Atividade leve de postura e mobilidade. Sem pressão — faça se sentir bem.</p>
        <ul>${data.exercises.map(e =>
          `<li>${e.name} — ${e.sets}x${e.repsMin}${e.repsMax !== e.repsMin ? '-' + e.repsMax : ''}</li>`
        ).join('')}</ul>
      </div>`;
    return;
  }

  let html = `
    <div class="workout-day-header">
      <h2>${data.day} — ${data.focus}</h2>
      <p>${data.muscles}</p>
    </div>`;

  // Botão iniciar (só se não houver sessão ativa neste dia)
  if (!sessionState.active || sessionState.dayIndex !== selectedDayIndex) {
    html += `<button class="btn btn-primary btn-full mb-12" onclick="startWorkout(${selectedDayIndex})">▶️ Iniciar Treino</button>`;
  } else {
    html += `<div class="badge badge-green" style="margin-bottom:12px;display:block;text-align:center;padding:10px;">⏱️ Treino em andamento</div>`;
  }

  // Aquecimento
  if (data.warmup.length > 0) {
    const warmupDone = (sessionState.warmupDone || []).every(Boolean) &&
                       sessionState.warmupDone.length === data.warmup.length;
    html += `
      <div class="warmup-section">
        <button class="warmup-toggle" onclick="toggleWarmup(this)">
          🔥 Aquecimento ${warmupDone ? '✅' : ''} <span class="arrow">▾</span>
        </button>
        <div class="warmup-body" id="warmup-body">
          <ul>
            ${data.warmup.map((w, i) => {
              const done = sessionState.warmupDone && sessionState.warmupDone[i];
              return `<li>
                <div class="warmup-check ${done ? 'done' : ''}" onclick="toggleWarmupItem(${i}, this)"></div>
                <span style="${done ? 'text-decoration:line-through;color:var(--text-muted)' : ''}">${w}</span>
              </li>`;
            }).join('')}
          </ul>
        </div>
      </div>`;
  }

  // Cards de exercícios
  data.exercises.forEach((ex, exIdx) => {
    const setsData = (sessionState.setsCompleted[exIdx] || {});
    const completedSetsCount = Object.keys(setsData).length;
    const allDone = completedSetsCount >= ex.sets;

    html += buildExerciseCard(ex, exIdx, data.exercises.length, allDone);
  });

  container.innerHTML = html;
}

function buildExerciseCard(ex, exIdx, totalExercises, allDone) {
  const setsData = sessionState.setsCompleted[exIdx] || {};
  const cardClass = allDone ? (sessionState.prsAchieved.includes(exIdx) ? 'exercise-card pr-achieved' : 'exercise-card completed') : 'exercise-card';

  let html = `<div class="${cardClass}" id="exercise-card-${exIdx}">`;

  // Cabeçalho
  html += `<div class="exercise-header">
    <div>
      <div class="exercise-name">${ex.name}</div>
      ${allDone ? `<div style="margin-top:4px">${sessionState.prsAchieved.includes(exIdx) ? '<span class="badge badge-gold">🏆 Novo Recorde!</span>' : '<span class="badge badge-green">✅ Concluído</span>'}</div>` : ''}
    </div>
    ${allDone ? '<span style="font-size:24px">' + (sessionState.prsAchieved.includes(exIdx) ? '🏆' : '✅') + '</span>' : ''}
  </div>`;

  // Meta e descanso
  html += `<div class="exercise-meta">${ex.sets} séries × ${ex.repsMin}${ex.repsMax !== ex.repsMin ? '-' + ex.repsMax : ''} reps &nbsp;|&nbsp; ⏱ ${ex.rest}s descanso</div>`;

  // Cue técnico
  html += `<div class="exercise-cue">"${ex.notes}"</div>`;

  // Badge unilateral
  if (ex.unilateral) {
    html += `<div class="unilateral-badge">⚡ Unilateral — Inicia pelo lado ${ex.startSide}</div>`;
  }

  // Labels das colunas de série
  html += `<div class="set-inputs-header">
    <span>Série</span>
    <span>Kg</span>
    <span>Reps</span>
    <span></span>
  </div>`;

  // Linhas de série
  html += `<div class="sets-container">`;
  for (let s = 0; s < ex.sets; s++) {
    const setDone = setsData[s] !== undefined;
    const setData = setsData[s] || {};
    const isActive = sessionState.active && (sessionState.dayIndex === selectedDayIndex);

    html += `<div class="set-row ${setDone ? 'completed' : ''}" id="set-row-${exIdx}-${s}">
      <div class="set-num">${s + 1}</div>
      <input type="number" class="set-input" id="weight-${exIdx}-${s}"
        placeholder="kg" step="0.5" min="0" max="500"
        value="${setData.weight !== undefined ? setData.weight : ''}"
        ${!isActive ? 'disabled' : ''} />
      <input type="number" class="set-input" id="reps-${exIdx}-${s}"
        placeholder="reps" step="1" min="0" max="999"
        value="${setData.reps !== undefined ? setData.reps : ''}"
        ${!isActive ? 'disabled' : ''} />
      <button class="set-check-btn ${setDone ? 'done' : ''}" id="check-${exIdx}-${s}"
        onclick="completeSet(${exIdx}, ${s}, ${ex.rest})"
        ${!isActive ? 'disabled style="opacity:0.3"' : ''}>
        ${setDone ? '✓' : '○'}
      </button>
    </div>`;
  }
  html += '</div>';

  // Notas/desconforto
  html += `<button class="exercise-notes-toggle" onclick="toggleNotes(this, ${exIdx})">💬 Anotações / Desconforto ▾</button>
  <div class="exercise-notes-body" id="notes-body-${exIdx}">
    <textarea placeholder="Ex: senti leve desconforto no ombro direito, reduzi carga..."
      onchange="saveExerciseNote(${exIdx}, this.value)"
    >${(sessionState.setsCompleted['note_' + exIdx] || '')}</textarea>
  </div>`;

  html += '</div>'; // fim do card
  return html;
}

function toggleWarmup(btn) {
  btn.classList.toggle('open');
  const body = document.getElementById('warmup-body');
  if (body) body.classList.toggle('open');
}

function toggleWarmupItem(index, el) {
  if (!sessionState.active) return;
  if (!sessionState.warmupDone) sessionState.warmupDone = [];
  sessionState.warmupDone[index] = !sessionState.warmupDone[index];
  el.classList.toggle('done');

  // Verifica se todo aquecimento foi feito
  const data = WORKOUT_DATA[sessionState.dayIndex];
  if (sessionState.warmupDone.filter(Boolean).length === data.warmup.length && data.warmup.length > 0) {
    addXP(30, '🔥 Aquecimento completo');
  }
}

function toggleNotes(btn, exIdx) {
  const body = document.getElementById('notes-body-' + exIdx);
  if (!body) return;
  body.classList.toggle('open');
  btn.textContent = body.classList.contains('open')
    ? '💬 Anotações / Desconforto ▴'
    : '💬 Anotações / Desconforto ▾';
}

function saveExerciseNote(exIdx, value) {
  sessionState.setsCompleted['note_' + exIdx] = value;
}

// =====================================================
// SESSÃO DE TREINO
// =====================================================
function startWorkout(dayIndex) {
  if (sessionState.active) {
    if (sessionState.dayIndex !== dayIndex) {
      if (!confirm('Há um treino em andamento. Deseja trocar de dia e perder o progresso?')) return;
      stopWorkoutTimer();
    } else {
      return; // já ativo no mesmo dia
    }
  }

  sessionState = {
    active: true,
    dayIndex: dayIndex,
    startTime: Date.now(),
    timerInterval: null,
    setsCompleted: {},
    warmupDone: [],
    prsAchieved: [],
    xpEarned: 0
  };

  // Inicia timer no header
  startWorkoutTimer();

  showToast('Treino iniciado! 💪', 'success');
  renderTreinoScreen();
}

function startWorkoutTimer() {
  const timerEl = document.getElementById('header-timer');
  timerEl.classList.add('active');

  sessionState.timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - sessionState.startTime) / 1000);
    timerEl.textContent = '⏱ ' + formatDuration(elapsed);
  }, 1000);
}

function stopWorkoutTimer() {
  if (sessionState.timerInterval) {
    clearInterval(sessionState.timerInterval);
    sessionState.timerInterval = null;
  }
  const timerEl = document.getElementById('header-timer');
  timerEl.classList.remove('active');
  timerEl.textContent = '';
}

function completeSet(exIdx, setIdx, restSeconds) {
  if (!sessionState.active) {
    showToast('Inicie o treino primeiro!', '');
    return;
  }

  const weightInput = document.getElementById(`weight-${exIdx}-${setIdx}`);
  const repsInput   = document.getElementById(`reps-${exIdx}-${setIdx}`);

  const weight = parseFloat(weightInput.value) || 0;
  const reps   = parseInt(repsInput.value)   || 0;

  // Salva a série
  if (!sessionState.setsCompleted[exIdx]) sessionState.setsCompleted[exIdx] = {};
  sessionState.setsCompleted[exIdx][setIdx] = { weight, reps };

  // Verifica PR
  const ex = WORKOUT_DATA[sessionState.dayIndex].exercises[exIdx];
  checkAndUpdatePR(ex.name, weight, reps, exIdx);

  // Atualiza visual da linha
  const row = document.getElementById(`set-row-${exIdx}-${setIdx}`);
  if (row) row.classList.add('completed');

  const checkBtn = document.getElementById(`check-${exIdx}-${setIdx}`);
  if (checkBtn) { checkBtn.classList.add('done'); checkBtn.textContent = '✓'; }

  // Verifica se todas as séries do exercício estão completas
  const totalSets = WORKOUT_DATA[sessionState.dayIndex].exercises[exIdx].sets;
  const completedSets = Object.keys(sessionState.setsCompleted[exIdx]).length;

  if (completedSets >= totalSets) {
    const card = document.getElementById(`exercise-card-${exIdx}`);
    if (card) {
      if (sessionState.prsAchieved.includes(exIdx)) {
        card.className = 'exercise-card pr-achieved';
      } else {
        card.className = 'exercise-card completed';
      }
    }
  }

  // Inicia timer de descanso
  if (restSeconds > 0) {
    startRestTimer(restSeconds, ex.name);
  }
}

function checkAndUpdatePR(exerciseName, weight, reps, exIdx) {
  if (weight <= 0) return;

  const key = exerciseName.toLowerCase().replace(/\s+/g, '_');
  const existing = appData.personalRecords[key];
  const newVolume = weight * reps;
  const existingVolume = existing ? existing.weight * existing.reps : 0;

  if (!existing || newVolume > existingVolume) {
    appData.personalRecords[key] = {
      name: exerciseName,
      weight,
      reps,
      date: todayStr()
    };
    saveData();

    if (!sessionState.prsAchieved.includes(exIdx)) {
      sessionState.prsAchieved.push(exIdx);
      sessionState.xpEarned += 50;
      showToast(`🏆 Novo Recorde! ${exerciseName}`, 'pr');
    }
  }
}

function finishWorkout() {
  if (!sessionState.active) return;

  const duration = Math.floor((Date.now() - sessionState.startTime) / 1000);
  const dayData  = WORKOUT_DATA[sessionState.dayIndex];

  // Conta exercícios com pelo menos 1 série completa
  let exCompleted = 0;
  dayData.exercises.forEach((ex, i) => {
    if (sessionState.setsCompleted[i] && Object.keys(sessionState.setsCompleted[i]).length > 0) {
      exCompleted++;
    }
  });

  // XP base
  let xpTotal = 100;
  sessionState.xpEarned += 100;

  // Bônus de 5 treinos na semana
  const weekCount = getThisWeekTrainings() + 1;
  if (weekCount >= 5) {
    xpTotal += 300;
    sessionState.xpEarned += 300;
  }

  // Salva no histórico
  const sessionRecord = {
    date: todayStr(),
    dayIndex: sessionState.dayIndex,
    dayName: dayData.day,
    focus: dayData.focus,
    duration,
    xpEarned: sessionState.xpEarned,
    exercisesCompleted: exCompleted,
    prs: sessionState.prsAchieved.map(i => dayData.exercises[i].name),
    sets: JSON.parse(JSON.stringify(sessionState.setsCompleted))
  };

  appData.workoutHistory.unshift(sessionRecord);

  // Atualiza streak
  const today = todayStr();
  if (appData.lastTrainingDate !== today) {
    const last = appData.lastTrainingDate ? new Date(appData.lastTrainingDate) : null;
    const now  = new Date(today);
    if (last) {
      const diff = Math.floor((now - last) / (1000 * 60 * 60 * 24));
      if (diff <= 1) {
        appData.streak += 1;
      } else {
        appData.streak = 1;
      }
    } else {
      appData.streak = 1;
    }
    appData.lastTrainingDate = today;
  }

  saveData();
  addXP(sessionState.xpEarned, '💪 Treino concluído');

  // Mostra modal
  showWorkoutCompleteModal(duration, exCompleted, sessionRecord.prs, sessionState.xpEarned);

  // Para timer
  stopWorkoutTimer();
  stopRestTimer();
}

function showWorkoutCompleteModal(duration, exCompleted, prs, xpEarned) {
  const content = document.getElementById('modal-stats-content');

  let html = `
    <div class="modal-stat-row">
      <span class="modal-stat-label">Duração</span>
      <span class="modal-stat-val">${formatDuration(duration)}</span>
    </div>
    <div class="modal-stat-row">
      <span class="modal-stat-label">Exercícios</span>
      <span class="modal-stat-val">${exCompleted} realizados</span>
    </div>
    <div class="modal-stat-row">
      <span class="modal-stat-label">XP Ganho</span>
      <span class="modal-stat-val" style="color:var(--accent-gold)">+${xpEarned} XP</span>
    </div>`;

  if (prs.length > 0) {
    html += `<div class="modal-stat-row">
      <span class="modal-stat-label">Recordes Batidos</span>
      <span class="modal-stat-val" style="color:var(--accent-gold)">${prs.length} 🏆</span>
    </div>
    <div class="modal-prs">`;
    prs.forEach(pr => {
      html += `<div class="modal-pr-item">🏆 ${pr}</div>`;
    });
    html += '</div>';
  }

  content.innerHTML = html;
  document.getElementById('workout-complete-modal').classList.add('visible');
}

function closeWorkoutModal() {
  document.getElementById('workout-complete-modal').classList.remove('visible');

  // Reset sessão
  sessionState = {
    active: false,
    dayIndex: null,
    startTime: null,
    timerInterval: null,
    setsCompleted: {},
    warmupDone: [],
    prsAchieved: [],
    xpEarned: 0
  };

  document.getElementById('btn-finish-workout').classList.remove('visible');
  renderTreinoScreen();
  navigateTo('dashboard');
}

// =====================================================
// TIMER DE DESCANSO
// =====================================================
const TIMER_CIRCUMFERENCE = 2 * Math.PI * 54; // r=54

function startRestTimer(seconds, exerciseName) {
  stopRestTimer(); // para qualquer timer anterior

  restTimerState = {
    active: true,
    remaining: seconds,
    total: seconds,
    interval: null,
    exerciseName
  };

  const overlay = document.getElementById('rest-timer-overlay');
  const display = document.getElementById('timer-display');
  const ring    = document.getElementById('timer-ring');
  const nameEl  = document.getElementById('timer-exercise-name');

  nameEl.textContent = exerciseName;
  display.textContent = seconds;
  ring.style.strokeDashoffset = '0';

  overlay.classList.add('visible');

  restTimerState.interval = setInterval(() => {
    restTimerState.remaining--;

    if (restTimerState.remaining <= 0) {
      playBeep();
      stopRestTimer();
      return;
    }

    const progress = restTimerState.remaining / restTimerState.total;
    const offset   = TIMER_CIRCUMFERENCE * (1 - progress);

    display.textContent = restTimerState.remaining;
    ring.style.strokeDashoffset = offset;

    // Muda cor quando fica próximo do fim
    if (restTimerState.remaining <= 5) {
      ring.style.stroke = '#ef4444';
    } else {
      ring.style.stroke = '#3b82f6';
    }
  }, 1000);
}

function stopRestTimer() {
  if (restTimerState.interval) {
    clearInterval(restTimerState.interval);
    restTimerState.interval = null;
  }
  restTimerState.active = false;
  document.getElementById('rest-timer-overlay').classList.remove('visible');
  document.getElementById('timer-ring').style.stroke = '#3b82f6';
}

function skipTimer() {
  stopRestTimer();
}

function addTimerSeconds(s) {
  if (!restTimerState.active) return;
  restTimerState.remaining += s;
  restTimerState.total += s;
}

// =====================================================
// SOM (Web Audio API)
// AudioContext é criado no primeiro gesto do usuário (obrigatório no Safari iOS).
// =====================================================
function unlockAudio() {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // Buffer silencioso desbloqueia o contexto no Safari
    const buf = audioCtx.createBuffer(1, 1, 22050);
    const src = audioCtx.createBufferSource();
    src.buffer = buf;
    src.connect(audioCtx.destination);
    src.start(0);
  } catch (e) {}
}

function playBeep() {
  if (!audioCtx) return;
  try {
    const doBeep = () => {
      const osc  = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.2);
    };
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().then(doBeep).catch(() => {});
    } else {
      doBeep();
    }
  } catch (e) {
    console.log('Web Audio não suportado');
  }
}

// =====================================================
// HISTÓRICO
// =====================================================
function renderHistorico() {
  renderWeightChart();
  renderPRTable();
  renderWorkoutLog();
}

function renderWeightChart() {
  const svg = document.getElementById('weight-chart-svg');
  const data = appData.weightHistory;

  if (!data || data.length < 2) {
    svg.innerHTML = `<text x="200" y="90" text-anchor="middle" fill="#64748b" font-size="13">Adicione pelo menos 2 registros de peso</text>`;
    return;
  }

  const recent = data.slice(-20); // últimos 20 pontos
  const weights = recent.map(d => d.weight);
  const minW = Math.min(...weights) - 0.5;
  const maxW = Math.max(...weights) + 0.5;
  const range = maxW - minW || 1;

  const W = 400, H = 140, PAD = 24;
  const chartW = W - PAD * 2;
  const chartH = H - PAD * 2;

  const points = recent.map((d, i) => {
    const x = PAD + (i / (recent.length - 1)) * chartW;
    const y = PAD + chartH - ((d.weight - minW) / range) * chartH;
    return { x, y, d };
  });

  // Linha
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  // Área
  const areaD = pathD + ` L${points[points.length-1].x},${PAD + chartH} L${points[0].x},${PAD + chartH} Z`;

  let svgContent = `
    <defs>
      <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <path d="${areaD}" fill="url(#wg)"/>
    <path d="${pathD}" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`;

  // Pontos
  points.forEach((p, i) => {
    svgContent += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="#3b82f6"/>`;
    // Labels dos pontos inicial e final
    if (i === 0 || i === points.length - 1) {
      svgContent += `<text x="${p.x.toFixed(1)}" y="${(p.y - 8).toFixed(1)}" text-anchor="middle" fill="#f1f5f9" font-size="11">${p.d.weight}kg</text>`;
    }
  });

  // Linha de referência
  svgContent += `<line x1="${PAD}" y1="${PAD + chartH}" x2="${W - PAD}" y2="${PAD + chartH}" stroke="#334155" stroke-width="1"/>`;

  // Data início e fim
  if (recent.length >= 2) {
    svgContent += `
      <text x="${PAD}" y="${H - 4}" fill="#64748b" font-size="10">${formatDate(recent[0].date)}</text>
      <text x="${W - PAD}" y="${H - 4}" fill="#64748b" font-size="10" text-anchor="end">${formatDate(recent[recent.length-1].date)}</text>`;
  }

  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.innerHTML = svgContent;
}

function renderPRTable() {
  const wrap = document.getElementById('pr-table-wrap');
  const prs  = Object.values(appData.personalRecords);

  if (prs.length === 0) {
    wrap.innerHTML = `<div class="empty-state"><div class="empty-icon">🏋️</div>Nenhum recorde ainda</div>`;
    return;
  }

  // Ordena por data (mais recente primeiro)
  prs.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  let html = `<table class="pr-table">
    <thead>
      <tr>
        <th>Exercício</th>
        <th>Carga</th>
        <th>Reps</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>`;

  prs.forEach(pr => {
    html += `<tr>
      <td class="pr-name">${pr.name}</td>
      <td class="pr-val">${pr.weight}kg</td>
      <td>${pr.reps}</td>
      <td style="font-size:11px;color:var(--text-muted)">${formatDate(pr.date)}</td>
    </tr>`;
  });

  html += '</tbody></table>';
  wrap.innerHTML = html;
}

function renderWorkoutLog() {
  const list = document.getElementById('workout-log-list');
  const history = appData.workoutHistory;

  if (!history || history.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">📋</div>Nenhum treino registrado ainda</div>`;
    return;
  }

  let html = '';
  history.slice(0, 30).forEach((session, i) => {
    html += `
      <div class="workout-log-item" onclick="toggleWorkoutLogItem(this)">
        <div class="workout-log-header">
          <div>
            <div class="workout-log-date">${session.dayName} — ${session.focus}</div>
            <div class="workout-log-meta">${formatDate(session.date)} • ${formatDuration(session.duration)} • ${session.exercisesCompleted} exercícios</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <div class="workout-log-xp">+${session.xpEarned} XP</div>
            <div class="workout-log-arrow">▾</div>
          </div>
        </div>
        <div class="workout-log-details">
          ${session.prs && session.prs.length > 0 ? `<div style="color:var(--accent-gold);font-size:12px;margin-bottom:8px;padding:6px 0">🏆 Recordes: ${session.prs.join(', ')}</div>` : ''}
          ${renderSessionSetDetails(session)}
        </div>
      </div>`;
  });

  list.innerHTML = html;
  list.innerHTML = html;
}

function renderSessionSetDetails(session) {
  if (!session.sets) return '<p style="color:var(--text-muted);font-size:13px">Detalhes não disponíveis</p>';

  const dayData = WORKOUT_DATA[session.dayIndex];
  if (!dayData) return '';

  let html = '';
  dayData.exercises.forEach((ex, i) => {
    const exSets = session.sets[i];
    if (!exSets || Object.keys(exSets).length === 0) return;

    const setsArr = Object.entries(exSets)
      .filter(([k]) => !isNaN(parseInt(k)))
      .map(([, v]) => v)
      .filter(v => v && (v.weight || v.reps));

    if (setsArr.length === 0) return;

    const setTexts = setsArr.map((s, idx) =>
      `${s.weight || 0}kg×${s.reps || 0}`
    ).join(' | ');

    html += `<div class="workout-log-exercise">
      <span>${ex.name}</span>
      <span style="color:var(--accent-blue)">${setTexts}</span>
    </div>`;
  });

  return html || '<p style="color:var(--text-muted);font-size:13px">Sem detalhes de séries</p>';
}

function toggleWorkoutLogItem(el) {
  el.classList.toggle('open');
}

// =====================================================
// DIETA
// =====================================================
function renderDietaScreen() {
  const today = todayStr();
  const dietToday = appData.dietLog[today] || {};

  // Restaura checkboxes
  ['proteina', 'creatina', 'agua', 'pretreino', 'frutas'].forEach(key => {
    const box = document.getElementById('dc-' + key);
    if (box) {
      if (dietToday[key]) {
        box.classList.add('checked');
      } else {
        box.classList.remove('checked');
      }
    }
  });

  // Sono
  const sleepToday = appData.sleepLog[today];
  const yesBtn = document.getElementById('sleep-yes');
  const noBtn  = document.getElementById('sleep-no');

  if (yesBtn && noBtn) {
    yesBtn.classList.remove('selected-yes', 'selected-no');
    noBtn.classList.remove('selected-yes', 'selected-no');

    if (sleepToday === true)  yesBtn.classList.add('selected-yes');
    if (sleepToday === false) noBtn.classList.add('selected-no');
  }
}

function toggleDietCheck(el) {
  const key   = el.dataset.key;
  const today = todayStr();
  const box   = el.querySelector('.diet-checkbox');

  if (!appData.dietLog[today]) appData.dietLog[today] = {};
  appData.dietLog[today][key] = !appData.dietLog[today][key];
  box.classList.toggle('checked', appData.dietLog[today][key]);
  saveData();

  // Verifica se completou tudo
  const all = ['proteina', 'creatina', 'agua', 'pretreino', 'frutas'];
  const allDone = all.every(k => appData.dietLog[today][k]);
  if (allDone) {
    addXP(30, '🥗 Checklist de dieta completo');
    showToast('🎉 Dieta do dia concluída!', 'success');
  }
}

function setSleep(value) {
  const today = todayStr();

  // Verifica se já foi registrado hoje
  if (appData.sleepLog[today] !== undefined) return;

  appData.sleepLog[today] = value;
  saveData();

  const yesBtn = document.getElementById('sleep-yes');
  const noBtn  = document.getElementById('sleep-no');

  yesBtn.classList.remove('selected-yes', 'selected-no');
  noBtn.classList.remove('selected-yes', 'selected-no');

  if (value) {
    yesBtn.classList.add('selected-yes');
    addXP(20, '😴 Dormiu bem');
  } else {
    noBtn.classList.add('selected-no');
    showToast('Tente dormir mais amanhã 😴', '');
  }
}

function toggleMeal(btn) {
  const body = btn.nextElementSibling;
  btn.classList.toggle('open');
  body.classList.toggle('open');
}

// =====================================================
// POSTURA
// =====================================================
function renderPosturaScreen() {
  const today    = todayStr();
  const postLog  = appData.postureLog[today] || {};

  // Streak postural
  const streakEl = document.getElementById('postura-streak-text');
  if (streakEl) streakEl.textContent = `Sequência postural: ${appData.postureStreak || 0} dias`;

  const list = document.getElementById('postura-exercises-list');
  if (!list) return;

  let html = '';
  POSTURA_EXERCISES.forEach((ex, i) => {
    const done = postLog['ex_' + i] || false;
    html += `
      <div class="postura-exercise-card ${done ? 'done' : ''}" id="postura-card-${i}">
        <div class="postura-ex-header">
          <div class="postura-check ${done ? 'done' : ''}" onclick="togglePostura(${i}, this)"></div>
          <div class="postura-ex-name">${ex.name}</div>
          <div class="postura-ex-sets">${ex.sets}</div>
        </div>
        <div class="postura-ex-cue">${ex.cue}</div>
        ${ex.timed ? `<button class="postura-timer-btn" onclick="startRestTimer(${ex.seconds}, '${ex.name}')">⏱ Iniciar Timer ${ex.seconds}s</button>` : ''}
      </div>`;
  });

  list.innerHTML = html;
}

function togglePostura(idx, el) {
  const today   = todayStr();
  if (!appData.postureLog[today]) appData.postureLog[today] = {};

  const key = 'ex_' + idx;
  appData.postureLog[today][key] = !appData.postureLog[today][key];
  const done = appData.postureLog[today][key];

  el.classList.toggle('done', done);
  const card = document.getElementById('postura-card-' + idx);
  if (card) card.classList.toggle('done', done);

  saveData();
}

function completePosturaRoutine() {
  const today = todayStr();

  if (appData.postureLog[today] && appData.postureLog[today].completed) {
    showToast('Rotina já concluída hoje! ✅', 'success');
    return;
  }

  if (!appData.postureLog[today]) appData.postureLog[today] = {};
  appData.postureLog[today].completed = true;

  // Atualiza streak postural
  const lastPosture = appData.lastPostureDate;
  const todayD = new Date(today);

  if (lastPosture) {
    const lastD = new Date(lastPosture);
    const diff  = Math.floor((todayD - lastD) / (1000 * 60 * 60 * 24));
    if (diff <= 1) {
      appData.postureStreak = (appData.postureStreak || 0) + 1;
    } else {
      appData.postureStreak = 1;
    }
  } else {
    appData.postureStreak = 1;
  }

  appData.lastPostureDate = today;
  saveData();

  addXP(30, '🧘 Rotina postural completa');
  showToast('🎉 Rotina concluída! +30 XP', 'success');

  const streakEl = document.getElementById('postura-streak-text');
  if (streakEl) streakEl.textContent = `Sequência postural: ${appData.postureStreak} dias`;
}

// =====================================================
// PESO CORPORAL
// =====================================================
function saveWeight(source) {
  const inputId = source === 'diet' ? 'diet-weight-input' : 'dash-weight-input';
  const input   = document.getElementById(inputId);
  const val     = parseFloat(input.value);

  if (isNaN(val) || val < 30 || val > 300) {
    showToast('Peso inválido. Use entre 30 e 300 kg.', '');
    return;
  }

  appData.weightHistory.push({ date: todayStr(), weight: val });
  appData.profile.currentWeight = val;
  saveData();

  input.value = '';
  showToast(`⚖️ Peso ${val}kg registrado!`, 'success');
  updateDashboard();
}

// =====================================================
// CONFIGURAÇÕES / EXPORT / IMPORT
// =====================================================
function openSettings() {
  document.getElementById('settings-modal').classList.add('visible');
}

function closeSettings() {
  document.getElementById('settings-modal').classList.remove('visible');
}

function closeSettingsIfOutside(e) {
  if (e.target === document.getElementById('settings-modal')) closeSettings();
}

function exportData() {
  const json  = JSON.stringify(appData, null, 2);
  const blob  = new Blob([json], { type: 'application/json' });
  const url   = URL.createObjectURL(blob);
  const today = todayStr();
  const a     = document.createElement('a');
  a.href      = url;
  a.download  = `nattan-treino-${today}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📥 Dados exportados!', 'success');
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed.profile || !parsed.hasOwnProperty('xp')) {
        throw new Error('Formato inválido');
      }
      if (confirm('Tem certeza? Isso substituirá todos os dados atuais.')) {
        appData = parsed;
        saveData();
        navigateTo('dashboard');
        showToast('✅ Dados importados com sucesso!', 'success');
        closeSettings();
      }
    } catch (err) {
      alert('Arquivo inválido. Certifique-se de importar um backup do NattanFit.');
    }
  };
  reader.readAsText(file);
  // Limpa o input para permitir importar o mesmo arquivo novamente
  event.target.value = '';
}

function resetData() {
  if (confirm('ATENÇÃO: Isso apagará TODOS os seus dados de treino, XP e histórico. Tem certeza?')) {
    if (confirm('Última confirmação — apagar tudo definitivamente?')) {
      localStorage.removeItem(STORAGE_KEY);
      appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
      saveData();
      closeSettings();
      navigateTo('dashboard');
      showToast('🔄 Dados resetados', '');
    }
  }
}

// =====================================================
// MODAL DE PROGRESSÃO
// =====================================================
function openProgression() {
  document.getElementById('progression-modal').classList.add('visible');
}

function closeProgression() {
  document.getElementById('progression-modal').classList.remove('visible');
}

function closeProgressionIfOutside(e) {
  if (e.target === document.getElementById('progression-modal')) closeProgression();
}

// =====================================================
// SERVICE WORKER
// =====================================================
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      console.log('[App] Service Worker registrado:', reg.scope);
    }).catch(err => {
      console.log('[App] Falha ao registrar Service Worker:', err);
    });
  }
}

// =====================================================
// EVENT LISTENERS
// =====================================================
function bindEvents() {
  // Desbloqueia AudioContext no primeiro toque/clique (Safari iOS exige gesto do usuário)
  document.addEventListener('touchstart', unlockAudio, { passive: true, once: true });
  document.addEventListener('click',      unlockAudio, { once: true });

  // Botão de configurações no header
  document.getElementById('btn-settings').addEventListener('click', openSettings);

  // Botão iniciar treino de hoje (dashboard)
  document.getElementById('btn-start-today').addEventListener('click', () => {
    navigateTo('treino');
    const todayIdx = todayDayIndex();
    selectedDayIndex = todayIdx;
    renderTreinoScreen();
    // Scroll para o topo
    setTimeout(() => {
      const sel = document.querySelector('.day-pill.active');
      if (sel) sel.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }, 100);
  });

  // Seleção de dias
  document.querySelectorAll('.day-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      selectedDayIndex = parseInt(pill.dataset.day);
      renderTreinoScreen();
    });
  });

  // Botão finalizar treino
  document.getElementById('btn-finish-workout').addEventListener('click', () => {
    if (confirm('Finalizar o treino de hoje?')) finishWorkout();
  });

  // Salvar peso (dashboard)
  document.getElementById('btn-save-weight').addEventListener('click', () => saveWeight('dash'));

  // Salvar peso (dieta)
  document.getElementById('btn-save-weight-diet').addEventListener('click', () => saveWeight('diet'));

  // Enter no input de peso
  document.getElementById('dash-weight-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveWeight('dash');
  });
  document.getElementById('diet-weight-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveWeight('diet');
  });

  // Botão completar rotina postural
  document.getElementById('btn-complete-postura').addEventListener('click', completePosturaRoutine);

  // Botão regras de progressão
  document.getElementById('btn-progression-info').addEventListener('click', openProgression);
}

// =====================================================
// INICIALIZAÇÃO
// =====================================================
function init() {
  loadData();
  registerServiceWorker();
  bindEvents();

  // Renderiza tela inicial
  navigateTo('dashboard');

  // Restaura sessão em andamento se existia (segurança)
  // (sessões são em memória — se a página recarregou, não há sessão ativa)

  console.log('[NattanFit] App inicializado. XP:', appData.xp, '| Nível:', appData.level);
}

// Inicia quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
