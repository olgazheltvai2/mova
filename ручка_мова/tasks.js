/* Навчальні завдання гри-мультфільму (без вступного та фінального слайдів) */
const Tasks = [];

/* Допоміжна функція для випадкового перемішування масиву (алгоритм Фішера — Єйтса) */
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ================= 1. БАГАТОЗНАЧНЕ СЛОВО ================= */
Tasks.push({
  id: 'guess',
  scene: 'mystery',
  enterAnim: 'enter-fly',
  render(el) {
    el.innerHTML = `
      <div class="parchment-scroll">
        <div class="image-row">
          <div class="image-card">${SVG.pen}<p>Кулькова…</p></div>
          <div class="image-card">${SVG.childHand}<p>Дитяча…</p></div>
          <div class="image-card">${SVG.doorHandle}<p>Дверна…</p></div>
        </div>
        <div class="options" id="guessOptions">
          <button class="option" data-answer="рука">рука</button>
          <button class="option" data-answer="ручка">ручка</button>
          <button class="option" data-answer="палець">палець</button>
          <button class="option" data-answer="двері">двері</button>
        </div>
      </div>
    `;
    el.querySelectorAll('#guessOptions .option').forEach(btn => {
      btn.onclick = () => {
        const ok = btn.dataset.answer === 'ручка';
        btn.classList.remove('wrong');
        void btn.offsetWidth;
        btn.classList.add(ok ? 'correct' : 'wrong');
        window.triggerFeedback(ok, btn);
        if (ok) {
          el.querySelectorAll('.image-card').forEach(c => c.classList.add('celebrate-card'));
          el.querySelectorAll('#guessOptions .option').forEach(b => b.disabled = true);
        }
      };
    });
  }
});

/* ================= 2. СКЛАДИ ТА НАГОЛОС ================= */
Tasks.push({
  id: 'sound',
  scene: 'lab',
  enterAnim: 'enter-unroll',
  render(el) {
    const letters = ['р', 'у', 'ч', 'к', 'а'];
    const correctStressIdx = 1; // наголос на «у»
    const correctSplitIdx = 2;  // поділ на склади: руч | ка

    el.innerHTML = `
      <div class="parchment-scroll">
        <div class="xylophone-frame">
          <div class="stress-sound-word" id="syllableWord"></div>
        </div>

        <div class="syllables" id="syllablePreview"></div>

        <div class="action-bar">
          <button class="btn secondary icon-action" id="checkSound" aria-label="Перевірити">${SVG.checkIcon}</button>
          <button class="btn icon-action" id="resetSound" aria-label="Скинути">${SVG.resetIcon}</button>
        </div>
      </div>
    `;

    const wordBox = el.querySelector('#syllableWord');
    const previewBox = el.querySelector('#syllablePreview');
    let stressIdx = -1;
    const splits = new Set();

    const updatePreview = () => {
      previewBox.innerHTML = '';
      let currentSyllable = '';
      letters.forEach((l, i) => {
        currentSyllable += (i === stressIdx ? l + '\u0301' : l);
        if (splits.has(i) || i === letters.length - 1) {
          const pill = document.createElement('div');
          pill.className = 'syllable-box';
          pill.textContent = currentSyllable;
          previewBox.appendChild(pill);
          currentSyllable = '';
        }
      });
    };

    const build = () => {
      wordBox.innerHTML = '';
      stressIdx = -1;
      splits.clear();

      letters.forEach((l, i) => {
        /* Плитка літери (клік ставить або знімає наголос) */
        const tile = document.createElement('button');
        tile.type = 'button';
        tile.className = 'sound-letter';
        tile.dataset.idx = i;
        tile.innerHTML = `
          <span class="accent-mark">´</span>
          <span class="letter-char">${l}</span>
        `;
        tile.onclick = () => {
          stressIdx = (stressIdx === i) ? -1 : i;
          wordBox.querySelectorAll('.sound-letter').forEach((b, idx) => {
            b.classList.toggle('stress', idx === stressIdx);
          });
          window.SFX && window.SFX.note(420 + i * 55);
          updatePreview();
        };
        wordBox.appendChild(tile);

        /* Проміжок між літерами для поділу на склади */
        if (i < letters.length - 1) {
          const divider = document.createElement('button');
          divider.type = 'button';
          divider.className = 'syllable-divider';
          divider.dataset.split = i;
          divider.innerHTML = `<span class="divider-bar"></span>`;
          divider.onclick = () => {
            if (splits.has(i)) splits.delete(i);
            else splits.add(i);
            divider.classList.toggle('active', splits.has(i));
            window.SFX && window.SFX.click();
            updatePreview();
          };
          wordBox.appendChild(divider);
        }
      });
      updatePreview();
    };

    build();

    el.querySelector('#checkSound').onclick = (e) => {
      const ok = (stressIdx === correctStressIdx) && (splits.size === 1) && splits.has(correctSplitIdx);
      wordBox.classList.remove('shake-anim', 'glow-ok');
      void wordBox.offsetWidth;
      wordBox.classList.add(ok ? 'glow-ok' : 'shake-anim');
      window.triggerFeedback(ok, e.currentTarget);
    };

    el.querySelector('#resetSound').onclick = () => {
      window.SFX && window.SFX.click();
      build();
    };
  }
});

/* ================= 3. БУДОВА СЛОВА ================= */
Tasks.push({
  id: 'structure',
  scene: 'workshop',
  enterAnim: 'enter-slide',
  render(el) {
    el.innerHTML = `
      <div class="parchment-scroll">
        <div class="structure-word" id="structBox">
          <div class="structure-part">
            <div class="part-letters root">руч</div>
            <select class="part-select" id="sel1">
              <option value="">—</option>
              <option value="root">корінь</option>
              <option value="prefix">префікс</option>
              <option value="suffix">суфікс</option>
              <option value="ending">закінчення</option>
            </select>
          </div>
          <div class="structure-part">
            <div class="part-letters suffix">к</div>
            <select class="part-select" id="sel2">
              <option value="">—</option>
              <option value="root">корінь</option>
              <option value="prefix">префікс</option>
              <option value="suffix">суфікс</option>
              <option value="ending">закінчення</option>
            </select>
          </div>
          <div class="structure-part">
            <div class="part-letters ending">а</div>
            <select class="part-select" id="sel3">
              <option value="">—</option>
              <option value="root">корінь</option>
              <option value="prefix">префікс</option>
              <option value="suffix">суфікс</option>
              <option value="ending">закінчення</option>
            </select>
          </div>
        </div>
        <div class="action-bar">
          <button class="btn secondary icon-action" id="checkStruct" aria-label="Перевірити">${SVG.checkIcon}</button>
        </div>
      </div>
    `;
    const box = el.querySelector('#structBox');
    el.querySelectorAll('.part-select').forEach(s => {
      s.onchange = () => window.SFX && window.SFX.click();
    });
    el.querySelector('#checkStruct').onclick = (e) => {
      const v1 = el.querySelector('#sel1').value;
      const v2 = el.querySelector('#sel2').value;
      const v3 = el.querySelector('#sel3').value;
      const ok = v1 === 'root' && v2 === 'suffix' && v3 === 'ending';
      box.classList.remove('shake-anim', 'glow-ok');
      void box.offsetWidth;
      box.classList.add(ok ? 'glow-ok' : 'shake-anim');
      window.triggerFeedback(ok, e.currentTarget);
    };
  }
});

/* ================= 4. СПІЛЬНОКОРЕНЕВІ СЛОВА ================= */
Tasks.push({
  id: 'derivatives',
  scene: 'garden',
  enterAnim: 'enter-pop',
  render(el) {
    const validAdj = ['ручний','ручна','ручне','ручні','ручковий','наручний','зручний','підручний','безрукий','однорукий','дворукий'];
    const validVerb = ['ручитися','ручатися','ручкатися','приручити','приручати','вручити','вручати','доручити','доручати','виручити','виручати','поручитися'];

    el.innerHTML = `
      <div class="parchment-scroll">
        <div class="word-input-row">
          <label>Прикметник:</label>
          <input type="text" id="adjInput" placeholder="…">
        </div>
        <div class="word-input-row">
          <label>Дієслово:</label>
          <input type="text" id="verbInput" placeholder="…">
        </div>
        <div class="action-bar">
          <button class="btn secondary icon-action" id="checkDeriv" aria-label="Перевірити">${SVG.checkIcon}</button>
          <button class="btn icon-action" id="showExamples" aria-label="Показати приклади">${SVG.eyeIcon}</button>
        </div>
        <div id="examplesBox" style="display:none;margin-top:14px;" class="edit-box">
          <p><strong>Прикметники:</strong> ручний, ручковий, наручний, зручний.</p>
          <p style="margin:0;"><strong>Дієслова:</strong> ручитися, ручкатися, приручити, вручити.</p>
        </div>
      </div>
    `;
    const adjIn = el.querySelector('#adjInput');
    const verbIn = el.querySelector('#verbInput');

    el.querySelector('#checkDeriv').onclick = (e) => {
      const a = adjIn.value.trim().toLowerCase();
      const v = verbIn.value.trim().toLowerCase();
      const aOk = validAdj.includes(a) || (a.includes('руч') || a.includes('рук'));
      const vOk = validVerb.includes(v) || (v.includes('руч') || v.includes('рук'));
      const ok = a.length >= 4 && v.length >= 4 && aOk && vOk;
      adjIn.classList.toggle('input-ok', a.length >= 4 && aOk);
      verbIn.classList.toggle('input-ok', v.length >= 4 && vOk);
      window.triggerFeedback(ok, e.currentTarget);
    };

    el.querySelector('#showExamples').onclick = (e) => {
      const box = el.querySelector('#examplesBox');
      box.style.display = 'block';
      window.triggerFeedback(true, e.currentTarget);
    };
  }
});

/* ================= 5. ВІДМІНКИ ================= */
Tasks.push({
  id: 'cases',
  scene: 'library',
  enterAnim: 'enter-fade',
  render(el) {
    el.innerHTML = `
      <div class="parchment-scroll library-book-layout">
        <table class="case-table">
          <thead><tr><th>Відмінок</th><th>Форма</th></tr></thead>
          <tbody>
            <tr><td>Називний</td><td>ручка</td></tr>
            <tr><td>Родовий</td><td>ручки</td></tr>
            <tr><td>Давальний</td><td class="alt">ручці (к → ц)</td></tr>
            <tr><td>Знахідний</td><td>ручку</td></tr>
            <tr><td>Орудний</td><td>ручкою</td></tr>
            <tr><td>Місцевий</td><td class="alt">на ручці (к → ц)</td></tr>
            <tr><td>Кличний</td><td>ручко!</td></tr>
          </tbody>
        </table>
        <div class="cases-sentences">
          <div class="word-input-row">
            <label>1. Мама дала мені нову</label>
            <input type="text" id="c1" placeholder="…">.
          </div>
          <div class="word-input-row">
            <label>2.</label>
            <input type="text" id="c2" placeholder="…">
            <span>лежить на столі.</span>
          </div>
          <div class="word-input-row">
            <label>3. Завдяки</label>
            <input type="text" id="c3" placeholder="…">
            <span>я написав листа.</span>
          </div>
          <div class="action-bar">
            <button class="btn secondary icon-action" id="checkCases" aria-label="Перевірити">${SVG.checkIcon}</button>
          </div>
        </div>
      </div>
    `;
    el.querySelector('#checkCases').onclick = (e) => {
      const c1 = el.querySelector('#c1');
      const c2 = el.querySelector('#c2');
      const c3 = el.querySelector('#c3');
      const ok1 = c1.value.trim().toLowerCase() === 'ручку';
      const ok2 = c2.value.trim().toLowerCase() === 'ручка';
      const ok3 = c3.value.trim().toLowerCase() === 'ручці';
      c1.classList.toggle('input-ok', ok1); c1.classList.toggle('input-bad', !ok1);
      c2.classList.toggle('input-ok', ok2); c2.classList.toggle('input-bad', !ok2);
      c3.classList.toggle('input-ok', ok3); c3.classList.toggle('input-bad', !ok3);
      window.triggerFeedback(ok1 && ok2 && ok3, e.currentTarget);
    };
  }
});

/* ================= 6. КОМИ МІЖ ОДНОРІДНИМИ ЧЛЕНАМИ ================= */
Tasks.push({
  id: 'commas',
  scene: 'bridge',
  enterAnim: 'enter-unroll',
  render(el) {
    const sentences = [
      { words: ['У','пеналі','лежали','ручка','олівець','і','гумка.'], commas: [3] },
      { words: ['Ручка','може','писати','малювати','та','креслити.'], commas: [2] },
      { words: ['Марічка','взяла','ручку','зошит','і','щоденник.'], commas: [2] }
    ];
    el.innerHTML = `
      <div class="parchment-scroll">
        <div id="commaList"></div>
        <div class="action-bar">
          <button class="btn secondary icon-action" id="checkCommas" aria-label="Перевірити">${SVG.checkIcon}</button>
        </div>
      </div>
    `;
    const list = el.querySelector('#commaList');
    sentences.forEach((s, sIdx) => {
      const div = document.createElement('div');
      div.className = 'comma-sentence';
      s.words.forEach((w, i) => {
        const span = document.createElement('span');
        span.className = 'bridge-word';
        span.textContent = w;
        div.appendChild(span);
        if (i < s.words.length - 1) {
          const gap = document.createElement('button');
          gap.type = 'button';
          gap.className = 'comma-gap';
          gap.dataset.sent = sIdx;
          gap.dataset.idx = i;
          gap.onclick = () => {
            gap.classList.toggle('placed');
            window.SFX && window.SFX.click();
          };
          div.appendChild(gap);
        }
      });
      list.appendChild(div);
    });

    el.querySelector('#checkCommas').onclick = (e) => {
      let ok = true;
      el.querySelectorAll('.comma-gap').forEach(g => {
        const should = sentences[+g.dataset.sent].commas.includes(+g.dataset.idx);
        const placed = g.classList.contains('placed');
        if (should !== placed) ok = false;
      });
      list.classList.remove('shake-anim', 'glow-ok');
      void list.offsetWidth;
      list.classList.add(ok ? 'glow-ok' : 'shake-anim');
      window.triggerFeedback(ok, e.currentTarget);
    };
  }
});

/* ================= 7. РЕДАГУВАННЯ ТЕКСТУ ================= */
Tasks.push({
  id: 'edit',
  scene: 'editorial',
  enterAnim: 'enter-fly',
  render(el) {
    el.innerHTML = `
      <div class="parchment-scroll">
        <div class="edit-box">
          «Марина взяла в руки ручку і почала писати лист. Раптом дверна ручка скрипнула, і в кімнату зайшов молодший брат, тримаючи в руках зламану ручку від велосипеда».
        </div>
        <textarea class="editor" id="editArea" placeholder="…"></textarea>
        <div class="action-bar">
          <button class="btn secondary icon-action" id="checkEditBtn" aria-label="Перевірити">${SVG.checkIcon}</button>
          <button class="btn icon-action" id="showEditAnswer" aria-label="Показати зразок">${SVG.eyeIcon}</button>
        </div>
        <div id="editAnswer" style="display:none;margin-top:12px;" class="edit-box">
          «Марина взяла кулькову ручку і почала писати лист. Раптом двері скрипнули — до кімнати зайшов молодший брат. У долонях він тримав зламану деталь від велосипеда».
        </div>
      </div>
    `;
    const area = el.querySelector('#editArea');
    el.querySelector('#checkEditBtn').onclick = (e) => {
      const txt = area.value.trim().toLowerCase();
      const count = (txt.match(/ручк|рук/g) || []).length;
      const ok = txt.length > 40 && count <= 2;
      area.classList.toggle('input-ok', ok);
      window.triggerFeedback(ok, e.currentTarget);
    };
    el.querySelector('#showEditAnswer').onclick = (e) => {
      el.querySelector('#editAnswer').style.display = 'block';
      window.triggerFeedback(true, e.currentTarget);
    };
  }
});

/* ================= 8. ФРАЗЕОЛОГІЗМИ (РАНДОМНИЙ ПОРЯДОК ВІДПОВІДЕЙ) ================= */
Tasks.push({
  id: 'phrases',
  scene: 'gallery',
  enterAnim: 'enter-slide',
  render(el) {
    const items = [
      { text: 'Дійти до ручки', correct: 'опинитися в скрутному становищі',
        options: ['опинитися в скрутному становищі', 'одержати подарунок', 'стати відомим', 'знайти скарб'] },
      { text: 'Взяти себе в руки', correct: 'заспокоїтися, опанувати себе',
        options: ['заспокоїтися, опанувати себе', 'зробити зарядку', 'привітатися', 'взяти щось у долоні'] },
      { text: 'Носити на руках', correct: 'дуже піклуватися, любити',
        options: ['дуже піклуватися, любити', 'нести вантаж', 'робити подарунки', 'качати дитину'] },
      { text: 'З легкої руки', correct: 'завдяки чиємусь почину',
        options: ['завдяки чиємусь почину', 'дуже швидко', 'недбало', 'легко й просто'] },
      { text: 'Опустити руки', correct: 'втратити надію, здатися',
        options: ['втратити надію, здатися', 'відпочити', 'заснути', 'покласти руки на стіл'] },
      { text: 'Бути під рукою', correct: 'бути поруч, доступним',
        options: ['бути поруч, доступним', 'тримати щось рукою', 'бути начальником', 'стояти під чимось'] }
    ];
    el.innerHTML = `
      <div class="parchment-scroll phrases-grid" id="phraseList"></div>
    `;
    const list = el.querySelector('#phraseList');
    items.forEach((item, i) => {
      /* Випадково перемішуємо варіанти відповідей для кожного фразеологізму */
      const shuffledOptions = shuffleArray(item.options);
      const div = document.createElement('div');
      div.className = 'phrase-item';
      div.innerHTML = `
        <div class="phrase-text">«${item.text}»</div>
        <div class="phrase-options">
          ${shuffledOptions.map((o) =>
            `<button data-i="${i}" data-correct="${o === item.correct}">${o}</button>`
          ).join('')}
        </div>
      `;
      list.appendChild(div);
    });
    list.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn || btn.disabled) return;
      const ok = btn.dataset.correct === 'true';
      btn.classList.remove('wrong');
      void btn.offsetWidth;
      btn.classList.add(ok ? 'correct' : 'wrong');
      window.triggerFeedback(ok, btn);
      if (ok) {
        btn.closest('.phrase-item').querySelectorAll('button').forEach(b => b.disabled = true);
      }
    });
  }
});