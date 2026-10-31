/* Сюжетні багатошарові анімовані SVG-фони для кожної сцени мультфільму */
const Scenes = {

  /* 0. Старовинне сонячне горище бабусиної хати */
  attic: {
    veil: 'radial-gradient(ellipse at 50% 25%, rgba(255,205,115,0.22) 0%, rgba(25,12,4,0.68) 85%)',
    decor: `<svg class="scene-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="atticWood" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3d2210"/>
          <stop offset="60%" stop-color="#593318"/>
          <stop offset="100%" stop-color="#2b1608"/>
        </linearGradient>
        <linearGradient id="sunRay" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,235,165,0.55)"/>
          <stop offset="100%" stop-color="rgba(255,215,120,0)"/>
        </linearGradient>
      </defs>
      <!-- Дерев'яні схили даху та стіни -->
      <rect width="1200" height="700" fill="url(#atticWood)"/>
      <path d="M0 490 L1200 490 L1200 700 L0 700 Z" fill="#331a0a"/>
      <path d="M0 530 H1200 M0 580 H1200 M0 640 H1200" stroke="#1f0e04" stroke-width="3"/>
      <!-- Крокви даху -->
      <polygon points="0,0 140,0 0,480" fill="#261306"/>
      <polygon points="360,0 440,0 110,490 40,490" fill="#2c1608"/>
      <polygon points="1200,0 1060,0 1200,480" fill="#261306"/>
      <polygon points="840,0 760,0 1090,490 1160,490" fill="#2c1608"/>
      <!-- Кругле слухове вікно на горищі -->
      <circle cx="600" cy="145" r="95" fill="#ffd27d" stroke="#241105" stroke-width="16"/>
      <circle cx="600" cy="145" r="85" fill="#7ec8e3"/>
      <circle cx="630" cy="120" r="28" fill="#fff5c0"/>
      <path d="M520 175 Q560 155 610 172 Q655 155 685 175 L685 230 L520 230 Z" fill="#528a4e"/>
      <line x1="600" y1="50" x2="600" y2="240" stroke="#241105" stroke-width="10"/>
      <line x1="505" y1="145" x2="695" y2="145" stroke="#241105" stroke-width="10"/>
      <!-- Килимок-доріжка на підлозі -->
      <ellipse cx="600" cy="610" rx="340" ry="52" fill="#8c2d2d" stroke="#d49b3b" stroke-width="6" stroke-dasharray="14,8"/>
      <ellipse cx="600" cy="610" rx="250" ry="34" fill="#b84b39"/>
      <!-- Старовинні книги та ліхтар збоку -->
      <rect x="160" y="455" width="95" height="24" rx="4" fill="#8c2323" stroke="#d4a024" stroke-width="2"/>
      <rect x="172" y="432" width="80" height="23" rx="4" fill="#235c3b" stroke="#d4a024" stroke-width="2"/>
      <!-- Сонячні промені з вікна -->
      <polygon class="sunbeam-anim" points="535,190 665,190 960,680 240,680" fill="url(#sunRay)"/>
    </svg>`
  },

  /* 1. Відкрита старовинна скриня на горищі */
  mystery: {
    veil: 'radial-gradient(ellipse at 50% 35%, rgba(255,195,90,0.28) 0%, rgba(30,15,5,0.72) 85%)',
    decor: `<svg class="scene-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="700" fill="#3b200e"/>
      <rect y="480" width="1200" height="220" fill="#291407"/>
      <!-- Скриня на задньому плані, з якої ллється тепле світло -->
      <ellipse cx="600" cy="490" rx="380" ry="180" fill="rgba(255,210,105,0.25)"/>
      <rect x="440" y="380" width="320" height="140" rx="12" fill="#5e3214" stroke="#d4a024" stroke-width="6"/>
      <path d="M430 380 L470 300 L730 300 L770 380 Z" fill="#421d08" stroke="#d4a024" stroke-width="5"/>
      <!-- Теплі іскри світла -->
      <circle class="float-slow" cx="350" cy="240" r="6" fill="#ffe699"/>
      <circle class="float-slow" cx="850" cy="210" r="8" fill="#ffe699"/>
      <circle class="float-slow" cx="500" cy="140" r="5" fill="#ffe699"/>
      <circle class="float-slow" cx="720" cy="150" r="7" fill="#ffe699"/>
    </svg>`
  },

  /* 2. Музична вітальня акустики та звуків */
  lab: {
    veil: 'radial-gradient(ellipse at 50% 35%, rgba(255,210,120,0.2) 0%, rgba(20,12,6,0.72) 85%)',
    decor: `<svg class="scene-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="700" fill="#472818"/>
      <!-- Дерев'яні панелі та шпалери в смужку -->
      <g stroke="rgba(212,160,36,0.14)" stroke-width="18">
        <line x1="100" y1="0" x2="100" y2="500"/><line x1="250" y1="0" x2="250" y2="500"/>
        <line x1="400" y1="0" x2="400" y2="500"/><line x1="800" y1="0" x2="800" y2="500"/>
        <line x1="950" y1="0" x2="950" y2="500"/><line x1="1100" y1="0" x2="1100" y2="500"/>
      </g>
      <rect y="485" width="1200" height="215" fill="#2e180c" stroke="#d4a024" stroke-width="4"/>
      <!-- Великий старовинний грамофон зліва -->
      <g transform="translate(95, 290)">
        <rect x="20" y="130" width="110" height="65" rx="8" fill="#6e3818" stroke="#d4a024" stroke-width="3"/>
        <path d="M75 130 Q75 65 130 50 L185 10 C215 35 215 105 185 125 L130 75" fill="#e6b33d" stroke="#855c08" stroke-width="4"/>
        <ellipse cx="188" cy="68" rx="18" ry="56" fill="#b37e12" stroke="#ffea9f" stroke-width="3"/>
      </g>
      <!-- Акустичні золоті хвилі у повітрі -->
      <circle class="pulse-ring" cx="600" cy="250" r="140" fill="none" stroke="rgba(255,220,130,0.22)" stroke-width="3"/>
      <circle class="pulse-ring" cx="600" cy="250" r="220" fill="none" stroke="rgba(255,220,130,0.15)" stroke-width="2"/>
    </svg>`
  },

  /* 3. Годинникова майстерня слів з рухомими шестернями */
  workshop: {
    veil: 'radial-gradient(ellipse at 50% 35%, rgba(255,180,85,0.22) 0%, rgba(22,12,4,0.75) 85%)',
    decor: `<svg class="scene-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="700" fill="#362010"/>
      <rect y="500" width="1200" height="200" fill="#241409" stroke="#8a5a24" stroke-width="4"/>
      <!-- Великі рухомі латунні шестерні на фоні -->
      <g class="spin-cw" style="transform-origin: 210px 210px;" opacity="0.45">
        <circle cx="210" cy="210" r="95" fill="none" stroke="#d49b2a" stroke-width="26" stroke-dasharray="28,18"/>
        <circle cx="210" cy="210" r="72" fill="none" stroke="#b37b14" stroke-width="18"/>
        <circle cx="210" cy="210" r="25" fill="#d49b2a"/>
      </g>
      <g class="spin-ccw" style="transform-origin: 355px 315px;" opacity="0.45">
        <circle cx="355" cy="315" r="65" fill="none" stroke="#c97a2b" stroke-width="20" stroke-dasharray="22,14"/>
        <circle cx="355" cy="315" r="48" fill="none" stroke="#9e5814" stroke-width="14"/>
      </g>
      <g class="spin-cw" style="transform-origin: 990px 220px;" opacity="0.45">
        <circle cx="990" cy="220" r="105" fill="none" stroke="#d49b2a" stroke-width="28" stroke-dasharray="30,18"/>
        <circle cx="990" cy="220" r="78" fill="none" stroke="#b37b14" stroke-width="18"/>
      </g>
      <!-- Підвісні теплі ліхтарі -->
      <line x1="300" y1="0" x2="300" y2="95" stroke="#1a0d04" stroke-width="5"/>
      <circle cx="300" cy="115" r="22" fill="#ffe694"/>
      <line x1="900" y1="0" x2="900" y2="95" stroke="#1a0d04" stroke-width="5"/>
      <circle cx="900" cy="115" r="22" fill="#ffe694"/>
    </svg>`
  },

  /* 4. Сонячний квітучий сад слів */
  garden: {
    veil: 'radial-gradient(ellipse at 50% 30%, rgba(255,245,160,0.18) 0%, rgba(12,35,15,0.55) 85%)',
    decor: `<svg class="scene-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#6ec6ff"/>
          <stop offset="65%" stop-color="#c8f4d4"/>
          <stop offset="100%" stop-color="#76c442"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#skyGrad)"/>
      <!-- Сонечко та пагорби -->
      <circle cx="1020" cy="115" r="65" fill="#fff394" opacity="0.9"/>
      <path d="M0 440 Q320 350 640 430 Q940 360 1200 420 L1200 700 L0 700 Z" fill="#52a832"/>
      <path d="M0 510 Q420 450 820 510 Q1050 470 1200 500 L1200 700 L0 700 Z" fill="#388520"/>
      <!-- Квітучі дерева по краях -->
      <g class="sway-anim" style="transform-origin: 120px 520px;">
        <path d="M100 540 Q115 380 95 240" stroke="#5c3818" stroke-width="34" fill="none" stroke-linecap="round"/>
        <circle cx="110" cy="210" r="115" fill="#469c2d"/>
        <circle cx="185" cy="240" r="85" fill="#5cb83c"/>
        <circle cx="85" cy="180" r="12" fill="#ff8fa3"/><circle cx="155" cy="210" r="10" fill="#ff8fa3"/><circle cx="125" cy="260" r="11" fill="#fff099"/>
      </g>
      <g class="sway-anim" style="transform-origin: 1080px 520px;">
        <path d="M1100 540 Q1085 380 1105 240" stroke="#5c3818" stroke-width="34" fill="none" stroke-linecap="round"/>
        <circle cx="1090" cy="210" r="115" fill="#469c2d"/>
        <circle cx="1015" cy="240" r="85" fill="#5cb83c"/>
        <circle cx="1075" cy="190" r="12" fill="#ff8fa3"/><circle cx="1025" cy="230" r="11" fill="#fff099"/>
      </g>
    </svg>`
  },

  /* 5. Старовинна бібліотека з високими книжковими шафами та свічками */
  library: {
    veil: 'radial-gradient(ellipse at 50% 35%, rgba(255,195,100,0.22) 0%, rgba(18,10,4,0.76) 85%)',
    decor: `<svg class="scene-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="700" fill="#2c1709"/>
      <!-- Книжкові полиці з кольоровими корінцями -->
      <g fill="#42220d" stroke="#1f0e04" stroke-width="4">
        <rect x="40" y="40" width="280" height="460"/><rect x="880" y="40" width="280" height="460"/>
      </g>
      <!-- Ряди книг -->
      <g>
        <rect x="60" y="70" width="28" height="80" fill="#9e2a2b"/><rect x="92" y="65" width="32" height="85" fill="#2a6f97"/><rect x="128" y="72" width="26" height="78" fill="#386641"/><rect x="158" y="68" width="34" height="82" fill="#b5838d"/><rect x="196" y="64" width="30" height="86" fill="#d4a024"/><rect x="230" y="70" width="36" height="80" fill="#7f4f24"/>
        <rect x="60" y="185" width="34" height="82" fill="#386641"/><rect x="98" y="180" width="28" height="87" fill="#9e2a2b"/><rect x="130" y="184" width="36" height="83" fill="#d4a024"/><rect x="170" y="178" width="30" height="89" fill="#2a6f97"/><rect x="204" y="182" width="34" height="85" fill="#6f1d1b"/>
        <rect x="900" y="70" width="30" height="80" fill="#2a6f97"/><rect x="934" y="66" width="34" height="84" fill="#9e2a2b"/><rect x="972" y="72" width="28" height="78" fill="#d4a024"/><rect x="1004" y="65" width="36" height="85" fill="#386641"/><rect x="1044" y="70" width="32" height="80" fill="#7f4f24"/>
        <rect x="900" y="185" width="34" height="82" fill="#9e2a2b"/><rect x="938" y="180" width="30" height="87" fill="#386641"/><rect x="972" y="184" width="36" height="83" fill="#2a6f97"/><rect x="1012" y="178" width="30" height="89" fill="#d4a024"/>
      </g>
      <rect y="500" width="1200" height="200" fill="#211005" stroke="#a67c38" stroke-width="3"/>
    </svg>`
  },

  /* 6. Підвісний дерев'яний міст над гірською річкою */
  bridge: {
    veil: 'radial-gradient(ellipse at 50% 35%, rgba(255,220,150,0.18) 0%, rgba(10,25,45,0.6) 85%)',
    decor: `<svg class="scene-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="canyonSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f7b267"/>
          <stop offset="50%" stop-color="#f79d65"/>
          <stop offset="100%" stop-color="#70a9a1"/>
        </linearGradient>
        <linearGradient id="riverWater" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1d6fa3"/>
          <stop offset="50%" stop-color="#38a3d1"/>
          <stop offset="100%" stop-color="#1d6fa3"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#canyonSky)"/>
      <!-- Гори на горизонті -->
      <polygon points="0,420 220,180 460,420" fill="#52486b"/>
      <polygon points="340,420 620,140 900,420" fill="#6b5b85"/>
      <polygon points="740,420 1020,190 1200,380 1200,420" fill="#463d5c"/>
      <!-- Гірська річка внизу -->
      <rect y="410" width="1200" height="290" fill="url(#riverWater)"/>
      <path class="water-wave" d="M80 470 Q180 455 280 470 T480 470 M640 530 Q740 515 840 530 T1040 530 M200 610 Q320 595 440 610" stroke="rgba(255,255,255,0.45)" stroke-width="5" fill="none" stroke-linecap="round"/>
      <!-- Канати та опори мосту -->
      <rect x="65" y="180" width="38" height="360" rx="6" fill="#4a2810" stroke="#291506" stroke-width="3"/>
      <rect x="1097" y="180" width="38" height="360" rx="6" fill="#4a2810" stroke="#291506" stroke-width="3"/>
      <path d="M84 210 Q600 370 1116 210" stroke="#c99b52" stroke-width="7" fill="none"/>
      <path d="M84 480 Q600 545 1116 480" stroke="#5c3416" stroke-width="26" fill="none" stroke-dasharray="36,8"/>
    </svg>`
  },

  /* 7. Старовинна редакція газети */
  editorial: {
    veil: 'radial-gradient(ellipse at 50% 35%, rgba(255,215,125,0.22) 0%, rgba(25,12,8,0.75) 85%)',
    decor: `<svg class="scene-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="700" fill="#3a2318"/>
      <rect y="490" width="1200" height="210" fill="#26150d" stroke="#9e7432" stroke-width="4"/>
      <!-- Зелені редакційні лампи під стелею -->
      <g transform="translate(220, 0)">
        <line x1="0" y1="0" x2="0" y2="95" stroke="#d4a024" stroke-width="5"/>
        <path d="M-55 130 L-25 95 L25 95 L55 130 Z" fill="#1f7a3f" stroke="#d4a024" stroke-width="3"/>
      </g>
      <g transform="translate(980, 0)">
        <line x1="0" y1="0" x2="0" y2="95" stroke="#d4a024" stroke-width="5"/>
        <path d="M-55 130 L-25 95 L25 95 L55 130 Z" fill="#1f7a3f" stroke="#d4a024" stroke-width="3"/>
      </g>
    </svg>`
  },

  /* 8. Картинна галерея фразеологізмів */
  gallery: {
    veil: 'radial-gradient(ellipse at 50% 30%, rgba(255,220,140,0.22) 0%, rgba(25,8,14,0.75) 85%)',
    decor: `<svg class="scene-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="700" fill="#591927"/>
      <rect y="495" width="1200" height="205" fill="#3d2212" stroke="#d4a024" stroke-width="5"/>
      <!-- Золоті рами на стінах та оксамитові канати -->
      <rect x="65" y="95" width="130" height="170" rx="6" fill="#381f10" stroke="#e0ad36" stroke-width="10"/>
      <rect x="1005" y="95" width="130" height="170" rx="6" fill="#381f10" stroke="#e0ad36" stroke-width="10"/>
      <!-- Кришталева люстра вгорі -->
      <path d="M540 0 Q600 85 660 0" fill="rgba(255,235,165,0.45)" stroke="#ffd966" stroke-width="4"/>
    </svg>`
  },

  /* 9. Святкова зала переможця */
  finale: {
    veil: 'radial-gradient(ellipse at 50% 30%, rgba(255,225,110,0.38) 0%, rgba(25,12,4,0.75) 85%)',
    decor: `<svg class="scene-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="700" fill="#4a151b"/>
      <!-- Оксамитові куліси та колони -->
      <path d="M0 0 L220 0 Q180 280 80 520 L0 520 Z" fill="#821822" stroke="#d4a024" stroke-width="4"/>
      <path d="M1200 0 L980 0 Q1020 280 1120 520 L1200 520 Z" fill="#821822" stroke="#d4a024" stroke-width="4"/>
      <rect y="500" width="1200" height="200" fill="#2e170a" stroke="#e6b33d" stroke-width="5"/>
      <!-- Промені прожекторів -->
      <polygon points="250,0 350,0 750,700 450,700" fill="rgba(255,230,130,0.16)"/>
      <polygon points="950,0 850,0 450,700 750,700" fill="rgba(255,230,130,0.16)"/>
    </svg>`
  }
};