/* Головний рушій мультфільму: звук, рандомний рух очей, емоції та навігація */
const state = { currentSlide: 0, totalSlides: Tasks.length };

const $slide = document.getElementById('slide');
const $dl = document.getElementById('dialogLeft');
const $dr = document.getElementById('dialogRight');
const $btnPrev = document.getElementById('btnPrev');
const $btnNext = document.getElementById('btnNext');
const $board = document.getElementById('gameBoard');
const $decor = document.getElementById('sceneDecor');
const $veil = document.getElementById('sceneVeil');
const $crystals = document.getElementById('crystals');
const $fxStage = document.getElementById('fxStage');
const $cutscene = document.getElementById('cutscene');

/* Ховаємо текстові оверлеї та бульбашки */
if ($cutscene) $cutscene.hidden = true;
if ($dl) $dl.textContent = '';
if ($dr) $dr.textContent = '';

/* -------- ЗВУКОВИЙ РУШІЙ (Web Audio API) -------- */
const SFX = (() => {
  let ctx = null;
  const init = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
  };

  const playTone = (freq, type = 'sine', dur = 0.2, delay = 0, vol = 0.14) => {
    init();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t = ctx.currentTime + delay;
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  };

  return {
    click() {
      playTone(540, 'triangle', 0.08, 0, 0.12);
    },
    note(freq = 523) {
      playTone(freq, 'triangle', 0.28, 0, 0.18);
      playTone(freq * 1.5, 'sine', 0.22, 0.03, 0.08);
    },
    win() {
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
      notes.forEach((n, i) => playTone(n, 'triangle', 0.32, i * 0.075, 0.16));
      setTimeout(() => playTone(1567.98, 'sine', 0.45, 0, 0.12), 340);
    },
    wrong() {
      init();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = ctx.currentTime;
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(240, t);
      osc.frequency.exponentialRampToValueAtTime(115, t + 0.32);
      gain.gain.setValueAtTime(0.13, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.36);
    },
    woosh() {
      playTone(310, 'sine', 0.18, 0, 0.09);
      playTone(460, 'triangle', 0.22, 0.06, 0.09);
    }
  };
})();
window.SFX = SFX;

/* -------- ІНІЦІАЛІЗАЦІЯ ПЕРСОНАЖІВ ТА НАВІГАЦІЙНИХ ІКОНОК -------- */
document.getElementById('avatarProfessor').innerHTML = SVG.professor;
document.getElementById('avatarGirl').innerHTML = SVG.girl;
$btnPrev.innerHTML = SVG.arrowLeft;
$btnNext.innerHTML = SVG.arrowRight;

/* -------- КРИСТАЛИ ПРОГРЕСУ (для всіх 8 навчальних завдань) -------- */
Tasks.forEach((t, i) => {
  const c = document.createElement('span');
  c.className = 'crystal';
  c.dataset.idx = i;
  c.onclick = () => goTo(i);
  $crystals.appendChild(c);
});

/* -------- РАНДОМНЕ ПЕРЕВЕДЕННЯ ПОГЛЯДУ ПЕРСОНАЖІВ (БЕЗ КЛІПАННЯ) -------- */
function shiftGazeRandomly() {
  document.querySelectorAll('.char-pupils').forEach(pupilGroup => {
    /* Випадковий кут і амплітуда погляду (інколи повертають погляд у центр) */
    const lookCenter = Math.random() < 0.25;
    const dx = lookCenter ? 0 : (Math.random() * 11 - 5.5);
    const dy = lookCenter ? 0 : (Math.random() * 8 - 4);
    pupilGroup.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
  });
}

function scheduleNextGaze() {
  const nextDelay = 900 + Math.random() * 1700;
  setTimeout(() => {
    shiftGazeRandomly();
    scheduleNextGaze();
  }, nextDelay);
}
scheduleNextGaze();

/* -------- ЕМОЦІЇ ПЕРСОНАЖІВ ТА БЕЗСЛОВЕСНИЙ ФІДБЕК -------- */
function react(char, mood, svgKeys = []) {
  const wrap = char === 'left'
    ? document.getElementById('charLeft')
    : document.getElementById('charRight');
  const fxBox = char === 'left'
    ? document.getElementById('fxProfessor')
    : document.getElementById('fxGirl');

  wrap.dataset.mood = 'idle';
  void wrap.offsetWidth;
  wrap.dataset.mood = mood;
  setTimeout(() => { wrap.dataset.mood = 'idle'; }, 1350);

  if (svgKeys.length) {
    fxBox.innerHTML = '';
    svgKeys.forEach((key, i) => {
      const p = document.createElement('div');
      p.className = 'fx-particle';
      p.innerHTML = SVG[key] || SVG.star;
      p.style.left = (i * 28 - 10) + 'px';
      p.style.bottom = '0px';
      p.style.setProperty('--dx', ((i % 2 === 0 ? 1 : -1) * 32 + 'px'));
      p.style.animationDelay = (i * 0.12) + 's';
      fxBox.appendChild(p);
      setTimeout(() => p.remove(), 1500);
    });
  }
}

function triggerFeedback(isOk, originEl) {
  if (isOk) {
    SFX.win();
    react('right', 'happy', ['star', 'sparkle', 'star']);
    react('left', 'happy', ['sparkle', 'note']);
    spawnStageBurst(originEl, ['star', 'sparkle', 'leaf', 'note'], 14);
  } else {
    SFX.wrong();
    react('left', 'think', ['cloudPuff']);
    react('right', 'sad', ['cloudPuff']);
    spawnStageBurst(originEl, ['cloudPuff'], 5);
  }
}
window.triggerFeedback = triggerFeedback;

function spawnStageBurst(originEl, keys, count) {
  const boardRect = $board.getBoundingClientRect();
  let x = boardRect.width / 2;
  let y = boardRect.height / 2;
  if (originEl) {
    const r = originEl.getBoundingClientRect();
    x = r.left - boardRect.left + r.width / 2;
    y = r.top - boardRect.top + r.height / 2;
  }
  for (let i = 0; i < count; i++) {
    const node = document.createElement('div');
    node.className = 'burst-item';
    node.innerHTML = SVG[keys[i % keys.length]];
    const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.4);
    const dist = 65 + Math.random() * 100;
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    node.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
    node.style.setProperty('--ty', `${Math.sin(angle) * dist - 30}px`);
    node.style.setProperty('--rot', `${(Math.random() * 160 - 80).toFixed(0)}deg`);
    $fxStage.appendChild(node);
    setTimeout(() => node.remove(), 1100);
  }
}

/* -------- РЕНДЕР СЛАЙДА -------- */
function renderSlide(i, fromNav = false) {
  const task = Tasks[i];
  if (!task) return;

  const scene = Scenes[task.scene] || Scenes.attic;
  $board.dataset.scene = task.scene || 'attic';
  $veil.style.background = scene.veil;
  $decor.innerHTML = scene.decor || '';

  const left = document.getElementById('charLeft');
  const right = document.getElementById('charRight');
  if (fromNav) {
    left.classList.remove('walk-in');
    right.classList.remove('walk-in');
    void left.offsetWidth;
    left.classList.add('walk-in');
    right.classList.add('walk-in');
  }
  /* Вітальний жест крилом і рукою + нове положення очей */
  shiftGazeRandomly();
  left.dataset.mood = 'talk';
  right.dataset.mood = 'talk';
  setTimeout(() => {
    left.dataset.mood = 'idle';
    right.dataset.mood = 'idle';
  }, 900);

  $slide.innerHTML = '';
  $slide.className = 'slide';
  void $slide.offsetWidth;
  $slide.classList.add(task.enterAnim || 'enter-fade');
  task.render($slide);

  $btnPrev.disabled = state.currentSlide === 0;
  $btnNext.disabled = state.currentSlide === state.totalSlides - 1;
  updateCrystals();
}

function updateCrystals() {
  $crystals.querySelectorAll('.crystal').forEach(c => {
    const idx = +c.dataset.idx;
    c.classList.toggle('done', idx <= state.currentSlide);
  });
}

function goTo(i) {
  if (i < 0 || i >= state.totalSlides) return;
  SFX.woosh();
  state.currentSlide = i;
  renderSlide(i, true);
}
window.goToSlide = goTo;

$btnPrev.onclick = () => goTo(state.currentSlide - 1);
$btnNext.onclick = () => goTo(state.currentSlide + 1);

document.addEventListener('DOMContentLoaded', () => renderSlide(0));

document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea, select')) return;
  if (e.key === 'ArrowRight') goTo(state.currentSlide + 1);
  if (e.key === 'ArrowLeft') goTo(state.currentSlide - 1);
});