/* Деталізована векторна графіка персонажів, предметів та анімованих ефектів */
const SVG = {

  /* -------- ПРОФЕСОР СЛІВКО (шарнірна сова з рухомими очима, повіками, дзьобом і крилами) -------- */
  professor: `<svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="owlBodyGrad" cx="45%" cy="35%" r="70%">
        <stop offset="0%" stop-color="#d2af83"/>
        <stop offset="55%" stop-color="#8f6c42"/>
        <stop offset="100%" stop-color="#3f2714"/>
      </radialGradient>
      <radialGradient id="owlBellyGrad" cx="50%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#faeed7"/>
        <stop offset="70%" stop-color="#dfc298"/>
        <stop offset="100%" stop-color="#a88455"/>
      </radialGradient>
      <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7c5832"/>
        <stop offset="60%" stop-color="#4e3318"/>
        <stop offset="100%" stop-color="#291809"/>
      </linearGradient>
      <linearGradient id="goldFrame" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff0a8"/>
        <stop offset="50%" stop-color="#d4a024"/>
        <stop offset="100%" stop-color="#6e4e0a"/>
      </linearGradient>
      <radialGradient id="eyeIris" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#f7b733"/>
        <stop offset="70%" stop-color="#c47110"/>
        <stop offset="100%" stop-color="#5c2c04"/>
      </radialGradient>
    </defs>

    <!-- Тінь під персонажем -->
    <ellipse cx="120" cy="304" rx="72" ry="10" fill="rgba(0,0,0,0.55)"/>

    <!-- Тулуб і лапки -->
    <g class="char-body">
      <!-- Хвіст -->
      <path d="M85 265 L70 298 L120 288 L170 298 L155 265 Z" fill="#3a2310"/>
      
      <!-- Тулуб -->
      <ellipse cx="120" cy="215" rx="74" ry="82" fill="url(#owlBodyGrad)"/>
      <!-- Животик з пір'їнками -->
      <ellipse cx="120" cy="224" rx="52" ry="66" fill="url(#owlBellyGrad)"/>
      <path d="M90 195 Q100 208 110 195 M112 212 Q122 225 132 212 M84 225 Q94 238 104 225 M134 225 Q144 238 154 225 M98 248 Q108 260 118 248 M124 248 Q134 260 144 248"
            stroke="#8a6840" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.65"/>

      <!-- Жилетка з ґудзиками -->
      <path d="M68 168 Q92 220 92 280 L70 272 Q54 220 68 168 Z" fill="#5e191c" stroke="#d4a024" stroke-width="1.5"/>
      <path d="M172 168 Q148 220 148 280 L170 272 Q186 220 172 168 Z" fill="#5e191c" stroke="#d4a024" stroke-width="1.5"/>
      <circle cx="84" cy="215" r="3.5" fill="url(#goldFrame)"/>
      <circle cx="86" cy="240" r="3.5" fill="url(#goldFrame)"/>
      <circle cx="156" cy="215" r="3.5" fill="url(#goldFrame)"/>
      <circle cx="154" cy="240" r="3.5" fill="url(#goldFrame)"/>

      <!-- Метелик на шиї -->
      <g transform="translate(120, 174)">
        <path d="M-26 -12 L0 -2 L-26 12 Q-30 0 -26 -12 Z" fill="#9e1f24" stroke="#4a090c" stroke-width="1.5"/>
        <path d="M26 -12 L0 -2 L26 12 Q30 0 26 -12 Z" fill="#9e1f24" stroke="#4a090c" stroke-width="1.5"/>
        <rect x="-6" y="-7" width="12" height="14" rx="4" fill="#d4353b" stroke="#4a090c" stroke-width="1.5"/>
      </g>

      <!-- Ліве крило (шарнірне) -->
      <g class="char-wing-l" style="transform-origin: 55px 175px;">
        <path d="M55 168 C20 185 16 248 38 272 C52 268 64 235 60 180 Z" fill="url(#wingGrad)"/>
        <path d="M34 210 Q45 230 42 258 M26 225 Q36 242 35 264" stroke="#9e7a52" stroke-width="1.8" fill="none" opacity="0.5"/>
      </g>

      <!-- Праве крило (шарнірне, з указкою) -->
      <g class="char-wing-r" style="transform-origin: 185px 175px;">
        <path d="M185 168 C220 185 224 248 202 272 C188 268 176 235 180 180 Z" fill="url(#wingGrad)"/>
        <path d="M206 210 Q195 230 198 258 M214 225 Q204 242 205 264" stroke="#9e7a52" stroke-width="1.8" fill="none" opacity="0.5"/>
        <!-- Дерев'яна указка -->
        <line x1="202" y1="248" x2="236" y2="178" stroke="#d4a024" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="236" cy="178" r="3" fill="#fff0a8"/>
      </g>

      <!-- Лапки -->
      <g fill="#e0941b" stroke="#7a4b06" stroke-width="1.5">
        <ellipse cx="90" cy="296" rx="9" ry="6"/>
        <ellipse cx="98" cy="298" rx="9" ry="6"/>
        <ellipse cx="82" cy="298" rx="8" ry="5"/>
        <ellipse cx="150" cy="296" rx="9" ry="6"/>
        <ellipse cx="158" cy="298" rx="8" ry="5"/>
        <ellipse cx="142" cy="298" rx="9" ry="6"/>
      </g>

      <!-- Голова (шарнірна) -->
      <g class="char-head" style="transform-origin: 120px 145px;">
        <ellipse cx="120" cy="116" rx="70" ry="60" fill="url(#owlBodyGrad)"/>
        <!-- Вушка-пір'я -->
        <path d="M56 78 L42 32 L86 66 Z" fill="#4a2e16"/>
        <path d="M184 78 L198 32 L154 66 Z" fill="#4a2e16"/>
        <!-- Лицьовий диск -->
        <ellipse cx="90" cy="114" rx="34" ry="34" fill="#f5e6cc" stroke="#8a6840" stroke-width="2"/>
        <ellipse cx="150" cy="114" rx="34" ry="34" fill="#f5e6cc" stroke="#8a6840" stroke-width="2"/>

        <!-- Очі -->
        <circle cx="90" cy="114" r="25" fill="#fffdf9"/>
        <circle cx="150" cy="114" r="25" fill="#fffdf9"/>

        <!-- Рухомі зіниці -->
        <g class="char-pupils">
          <circle cx="90" cy="114" r="16" fill="url(#eyeIris)"/>
          <circle cx="150" cy="114" r="16" fill="url(#eyeIris)"/>
          <circle cx="90" cy="114" r="9.5" fill="#0d0704"/>
          <circle cx="150" cy="114" r="9.5" fill="#0d0704"/>
          <circle cx="95" cy="108" r="4" fill="#ffffff"/>
          <circle cx="155" cy="108" r="4" fill="#ffffff"/>
          <circle cx="85" cy="119" r="2" fill="#ffffff" opacity="0.7"/>
          <circle cx="145" cy="119" r="2" fill="#ffffff" opacity="0.7"/>
        </g>

        <!-- Рухомі повіки для кліпання та емоцій -->
        <g class="char-eyelids">
          <path class="eyelid-top" d="M64 114 A26 26 0 0 1 116 114 L64 114 Z" fill="#8f6c42"/>
          <path class="eyelid-top" d="M124 114 A26 26 0 0 1 176 114 L124 114 Z" fill="#8f6c42"/>
        </g>

        <!-- Брови -->
        <g class="char-brows" style="transform-origin: 120px 85px;">
          <path d="M56 88 Q88 74 112 90" stroke="#3a210e" stroke-width="6.5" stroke-linecap="round" fill="none"/>
          <path d="M184 88 Q152 74 128 90" stroke="#3a210e" stroke-width="6.5" stroke-linecap="round" fill="none"/>
        </g>

        <!-- Окуляри в золотій оправі -->
        <circle cx="90" cy="114" r="29" fill="rgba(255,255,255,0.08)" stroke="url(#goldFrame)" stroke-width="4"/>
        <circle cx="150" cy="114" r="29" fill="rgba(255,255,255,0.08)" stroke="url(#goldFrame)" stroke-width="4"/>
        <path d="M119 112 Q120 105 121 112" stroke="url(#goldFrame)" stroke-width="4" fill="none"/>
        <line x1="61" y1="110" x2="48" y2="104" stroke="url(#goldFrame)" stroke-width="3.5"/>
        <line x1="179" y1="110" x2="192" y2="104" stroke="url(#goldFrame)" stroke-width="3.5"/>

        <!-- Дзьоб (верхня та рухома нижня частина для мовлення) -->
        <path class="char-mouth" d="M111 136 L120 156 L129 136 Z" fill="#7a2018" style="transform-origin: 120px 136px;"/>
        <path d="M108 132 Q120 124 132 132 L120 151 Z" fill="#f09819" stroke="#9e5a08" stroke-width="1.8"/>

        <!-- Академічна шапочка -->
        <polygon points="44,62 120,34 196,62 120,78" fill="#1b1b3a" stroke="#d4a024" stroke-width="1.5"/>
        <path d="M86 66 L86 48 Q120 38 154 48 L154 66" fill="#12122b"/>
        <path d="M120 56 Q165 62 184 96" stroke="url(#goldFrame)" stroke-width="2.5" fill="none"/>
        <circle cx="184" cy="99" r="5" fill="url(#goldFrame)"/>
      </g>
    </g>
  </svg>`,

  /* -------- МАРІЧКА (шарнірна дівчинка з живою мімікою, очима та ручками) -------- */
  girl: `<svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="girlSkin" cx="45%" cy="35%" r="70%">
        <stop offset="0%" stop-color="#ffe7d4"/>
        <stop offset="70%" stop-color="#f5bfa0"/>
        <stop offset="100%" stop-color="#d4916a"/>
      </radialGradient>
      <radialGradient id="girlHair" cx="40%" cy="25%" r="80%">
        <stop offset="0%" stop-color="#9e4f28"/>
        <stop offset="55%" stop-color="#632b10"/>
        <stop offset="100%" stop-color="#2e1104"/>
      </radialGradient>
      <linearGradient id="vestGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#d62839"/>
        <stop offset="60%" stop-color="#9e1422"/>
        <stop offset="100%" stop-color="#5c0811"/>
      </linearGradient>
      <radialGradient id="greenIris" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#68c97a"/>
        <stop offset="70%" stop-color="#287a3e"/>
        <stop offset="100%" stop-color="#0f381a"/>
      </radialGradient>
    </defs>

    <!-- Тінь -->
    <ellipse cx="120" cy="304" rx="64" ry="9" fill="rgba(0,0,0,0.55)"/>

    <g class="char-body">
      <!-- Довге волосся позаду -->
      <path d="M62 105 C42 165 46 235 64 252 C85 245 155 245 176 252 C194 235 198 165 178 105 Z" fill="url(#girlHair)"/>

      <!-- Ніжки та черевички -->
      <rect x="92" y="255" width="16" height="42" rx="6" fill="url(#girlSkin)"/>
      <rect x="132" y="255" width="16" height="42" rx="6" fill="url(#girlSkin)"/>
      <ellipse cx="98" cy="298" rx="15" ry="7" fill="#7a1620" stroke="#3a080c" stroke-width="1.5"/>
      <ellipse cx="142" cy="298" rx="15" ry="7" fill="#7a1620" stroke="#3a080c" stroke-width="1.5"/>

      <!-- Ліва рука (шарнірна) -->
      <g class="char-arm-l" style="transform-origin: 76px 184px;">
        <!-- Пишний рукав вишиванки -->
        <ellipse cx="62" cy="208" rx="18" ry="30" transform="rotate(16 62 208)" fill="#fff8eb" stroke="#d9c6a5" stroke-width="1.5"/>
        <path d="M50 205 L68 212 M48 214 L66 221" stroke="#d62839" stroke-width="2.5" stroke-dasharray="3,2"/>
        <circle cx="52" cy="238" r="11" fill="url(#girlSkin)"/>
      </g>

      <!-- Права рука (шарнірна) -->
      <g class="char-arm-r" style="transform-origin: 164px 184px;">
        <ellipse cx="178" cy="208" rx="18" ry="30" transform="rotate(-16 178 208)" fill="#fff8eb" stroke="#d9c6a5" stroke-width="1.5"/>
        <path d="M190 205 L172 212 M192 214 L174 221" stroke="#d62839" stroke-width="2.5" stroke-dasharray="3,2"/>
        <circle cx="188" cy="238" r="11" fill="url(#girlSkin)"/>
      </g>

      <!-- Сукня та вишита корсетка -->
      <path d="M78 176 Q120 170 162 176 L178 268 Q120 278 62 268 Z" fill="url(#vestGrad)"/>
      <!-- Біла вставка сорочки з вишивкою -->
      <path d="M98 173 L120 220 L142 173 Z" fill="#fff8eb"/>
      <line x1="120" y1="176" x2="120" y2="215" stroke="#d62839" stroke-width="3" stroke-dasharray="4,3"/>
      <!-- Квітковий орнамент на корсетці -->
      <circle cx="92" cy="235" r="5" fill="#ffcf56"/>
      <circle cx="92" cy="235" r="2" fill="#d62839"/>
      <circle cx="148" cy="235" r="5" fill="#ffcf56"/>
      <circle cx="148" cy="235" r="2" fill="#d62839"/>
      <path d="M64 260 Q120 270 176 260" stroke="#ffcf56" stroke-width="3" fill="none"/>

      <!-- Шия -->
      <rect x="108" y="154" width="24" height="24" rx="8" fill="url(#girlSkin)"/>
      <!-- Червоне намисто (коралі) -->
      <path d="M98 172 Q120 188 142 172" stroke="#d62839" stroke-width="5" stroke-linecap="round" stroke-dasharray="1,7" fill="none"/>

      <!-- Голова (шарнірна) -->
      <g class="char-head" style="transform-origin: 120px 155px;">
        <ellipse cx="120" cy="116" rx="50" ry="54" fill="url(#girlSkin)"/>

        <!-- Рум'янець -->
        <ellipse cx="86" cy="130" rx="11" ry="7" fill="#f2798f" opacity="0.45"/>
        <ellipse cx="154" cy="130" rx="11" ry="7" fill="#f2798f" opacity="0.45"/>

        <!-- Очі -->
        <ellipse cx="96" cy="114" rx="13" ry="15" fill="#ffffff"/>
        <ellipse cx="144" cy="114" rx="13" ry="15" fill="#ffffff"/>

        <!-- Рухомі зіниці -->
        <g class="char-pupils">
          <circle cx="96" cy="114" r="9.5" fill="url(#greenIris)"/>
          <circle cx="144" cy="114" r="9.5" fill="url(#greenIris)"/>
          <circle cx="96" cy="114" r="5" fill="#120904"/>
          <circle cx="144" cy="114" r="5" fill="#120904"/>
          <circle cx="99" cy="110" r="2.8" fill="#ffffff"/>
          <circle cx="147" cy="110" r="2.8" fill="#ffffff"/>
        </g>

        <!-- Повіки та вії -->
        <g class="char-eyelids">
          <path class="eyelid-top" d="M82 114 A14 15 0 0 1 110 114 L82 114 Z" fill="#f5bfa0"/>
          <path class="eyelid-top" d="M130 114 A14 15 0 0 1 158 114 L130 114 Z" fill="#f5bfa0"/>
        </g>
        <path d="M82 110 Q96 96 110 110" stroke="#2e1104" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M130 110 Q144 96 158 110" stroke="#2e1104" stroke-width="3" fill="none" stroke-linecap="round"/>

        <!-- Брови -->
        <g class="char-brows">
          <path d="M83 94 Q96 87 108 93" stroke="#52220a" stroke-width="3.2" fill="none" stroke-linecap="round"/>
          <path d="M132 93 Q144 87 157 94" stroke="#52220a" stroke-width="3.2" fill="none" stroke-linecap="round"/>
        </g>

        <!-- Носик -->
        <path d="M117 124 Q120 129 124 124" stroke="#c47e56" stroke-width="2.2" fill="none" stroke-linecap="round"/>

        <!-- Ротик (анімується при мовленні та радості) -->
        <path class="char-mouth" d="M106 140 Q120 153 134 140 Q120 146 106 140 Z" fill="#c93b4b" stroke="#8a1c28" stroke-width="2" stroke-linecap="round" style="transform-origin: 120px 143px;"/>

        <!-- Зачіска та віночок з квітами -->
        <path d="M68 104 C70 52 170 52 172 104 C154 82 132 82 120 90 C108 82 86 82 68 104 Z" fill="url(#girlHair)"/>
        <!-- Квіти у віночку -->
        <g transform="translate(120, 66)">
          <circle cx="-34" cy="8" r="10" fill="#e63946"/>
          <circle cx="-34" cy="8" r="4" fill="#ffb703"/>
          <circle cx="-12" cy="2" r="11" fill="#4cc9f0"/>
          <circle cx="-12" cy="2" r="4" fill="#ffb703"/>
          <circle cx="12" cy="2" r="11" fill="#ffb703"/>
          <circle cx="12" cy="2" r="4" fill="#6b2d5c"/>
          <circle cx="34" cy="8" r="10" fill="#e63946"/>
          <circle cx="34" cy="8" r="4" fill="#ffb703"/>
        </g>
      </g>
    </g>
  </svg>`,

  /* -------- ІЛЮСТРАЦІЇ ДО ЗАВДАННЯ 1 -------- */
  pen: `<svg viewBox="0 0 120 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="penBarrel" x1="0%" x2="100%">
        <stop offset="0%" stop-color="#0b2240"/>
        <stop offset="32%" stop-color="#1d5fa8"/>
        <stop offset="52%" stop-color="#7dc0ff"/>
        <stop offset="72%" stop-color="#1d5fa8"/>
        <stop offset="100%" stop-color="#08182e"/>
      </linearGradient>
      <linearGradient id="penGold" x1="0%" x2="100%">
        <stop offset="0%" stop-color="#7a5812"/>
        <stop offset="45%" stop-color="#ffea9f"/>
        <stop offset="100%" stop-color="#614408"/>
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="228" rx="28" ry="6" fill="rgba(0,0,0,0.35)"/>
    <g transform="rotate(14 60 120)">
      <rect x="44" y="16" width="32" height="14" rx="5" fill="url(#penGold)"/>
      <rect x="42" y="28" width="36" height="62" rx="3" fill="url(#penBarrel)"/>
      <rect x="41" y="90" width="38" height="8" fill="url(#penGold)"/>
      <rect x="45" y="98" width="30" height="92" fill="url(#penBarrel)"/>
      <polygon points="45,190 75,190 63,222 57,222" fill="url(#penGold)"/>
      <polygon points="57,218 63,218 60,228" fill="#0d1b2a"/>
      <path d="M78 34 L86 34 L86 98 Q86 105 79 102" fill="none" stroke="url(#penGold)" stroke-width="5" stroke-linecap="round"/>
      <rect x="52" y="32" width="4" height="150" fill="rgba(255,255,255,0.38)" rx="2"/>
    </g>
  </svg>`,

  childHand: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="handSkin" cx="42%" cy="38%" r="68%">
        <stop offset="0%" stop-color="#ffebd8"/>
        <stop offset="65%" stop-color="#f2bc96"/>
        <stop offset="100%" stop-color="#bf8159"/>
      </radialGradient>
    </defs>
    <ellipse cx="100" cy="184" rx="58" ry="8" fill="rgba(0,0,0,0.3)"/>
    <ellipse cx="102" cy="134" rx="48" ry="44" fill="url(#handSkin)"/>
    <ellipse cx="64" cy="78" rx="12" ry="38" fill="url(#handSkin)" transform="rotate(-14 64 78)"/>
    <ellipse cx="88" cy="62" rx="12.5" ry="46" fill="url(#handSkin)" transform="rotate(-4 88 62)"/>
    <ellipse cx="114" cy="60" rx="12.5" ry="48" fill="url(#handSkin)" transform="rotate(4 114 60)"/>
    <ellipse cx="138" cy="76" rx="11.5" ry="38" fill="url(#handSkin)" transform="rotate(16 138 76)"/>
    <ellipse cx="52" cy="138" rx="15" ry="32" fill="url(#handSkin)" transform="rotate(-42 52 138)"/>
    <path d="M74 128 Q102 142 130 126 M78 148 Q104 158 126 146" stroke="#b5754d" stroke-width="2" fill="none" opacity="0.55" stroke-linecap="round"/>
  </svg>`,

  doorHandle: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="oakDoor" x1="0%" x2="100%">
        <stop offset="0%" stop-color="#5c3419"/>
        <stop offset="50%" stop-color="#7d4925"/>
        <stop offset="100%" stop-color="#45240e"/>
      </linearGradient>
      <radialGradient id="brassKnob" cx="38%" cy="32%" r="70%">
        <stop offset="0%" stop-color="#fff6c2"/>
        <stop offset="50%" stop-color="#d9ab38"/>
        <stop offset="100%" stop-color="#5e4206"/>
      </radialGradient>
    </defs>
    <rect x="14" y="10" width="172" height="180" rx="14" fill="url(#oakDoor)" stroke="#361b09" stroke-width="4"/>
    <rect x="26" y="22" width="148" height="156" rx="8" fill="none" stroke="rgba(255,220,160,0.22)" stroke-width="2"/>
    <!-- Латунна пластина та фігурна ручка -->
    <rect x="112" y="54" width="38" height="96" rx="16" fill="url(#brassKnob)" stroke="#4a3204" stroke-width="2"/>
    <circle cx="131" cy="128" r="7" fill="#291802"/>
    <path d="M126 128 L122 142 L140 142 L136 128 Z" fill="#291802"/>
    <ellipse cx="78" cy="96" rx="56" ry="12" fill="rgba(0,0,0,0.4)"/>
    <path d="M132 86 C100 86 68 78 46 88 C36 93 46 105 64 102 C92 98 114 98 132 98 Z" fill="url(#brassKnob)" stroke="#4a3204" stroke-width="2"/>
    <circle cx="131" cy="92" r="14" fill="url(#brassKnob)" stroke="#4a3204" stroke-width="2"/>
  </svg>`,

  /* -------- ІКОНКИ ІНТЕРФЕЙСУ ТА ЧАСТИНКИ (ЗАМІСТЬ ЕМОДЗІ) -------- */
  arrowLeft: `<svg viewBox="0 0 48 48"><path d="M30 10 L14 24 L30 38" fill="none" stroke="#fff3c4" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrowRight: `<svg viewBox="0 0 48 48"><path d="M18 10 L34 24 L18 38" fill="none" stroke="#fff3c4" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  checkIcon: `<svg viewBox="0 0 48 48"><path d="M10 25 L20 35 L38 13" fill="none" stroke="#fff8dc" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  resetIcon: `<svg viewBox="0 0 48 48"><path d="M14 20 A14 14 0 1 1 12 30 M14 10 L14 21 L25 21" fill="none" stroke="#fff8dc" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  eyeIcon: `<svg viewBox="0 0 48 48"><path d="M4 24 Q24 8 44 24 Q24 40 4 24 Z" fill="none" stroke="#fff8dc" stroke-width="4"/><circle cx="24" cy="24" r="6" fill="#fff8dc"/></svg>`,

  star: `<svg viewBox="0 0 60 60"><polygon points="30,4 38,20 56,22 42,35 46,53 30,44 14,53 18,35 4,22 22,20" fill="#ffd942" stroke="#b57c00" stroke-width="2.5"/></svg>`,
  sparkle: `<svg viewBox="0 0 60 60"><path d="M30 2 Q32 28 58 30 Q32 32 30 58 Q28 32 2 30 Q28 28 30 2 Z" fill="#fff394" stroke="#e09f1f" stroke-width="2"/></svg>`,
  note: `<svg viewBox="0 0 60 60"><path d="M22 42 V14 L46 10 V38" fill="none" stroke="#ffcf48" stroke-width="5" stroke-linecap="round"/><ellipse cx="17" cy="44" rx="8" ry="6" fill="#ffcf48"/><ellipse cx="41" cy="40" rx="8" ry="6" fill="#ffcf48"/></svg>`,
  leaf: `<svg viewBox="0 0 60 60"><path d="M12 48 C10 20 35 10 50 10 C50 25 40 50 12 48 Z" fill="#68d359" stroke="#26731d" stroke-width="2.5"/><path d="M12 48 Q30 30 48 12" stroke="#26731d" stroke-width="2.5" fill="none"/></svg>`,
  gear: `<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="16" fill="#e6b347" stroke="#78520a" stroke-width="4"/><circle cx="30" cy="30" r="7" fill="#4a3006"/><path d="M30 6 V14 M30 46 V54 M6 30 H14 M46 30 H54 M13 13 L19 19 M41 41 L47 47 M47 13 L41 19 M19 41 L13 47" stroke="#e6b347" stroke-width="6" stroke-linecap="round"/></svg>`,
  cloudPuff: `<svg viewBox="0 0 60 60"><path d="M18 42 Q8 42 8 32 Q8 23 17 22 Q20 12 31 12 Q42 12 45 22 Q52 24 52 32 Q52 42 42 42 Z" fill="#d8cfc4" stroke="#8c7f70" stroke-width="2.5"/></svg>`,

  trophy: `<svg viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="trophyGold" x1="0%" x2="100%">
        <stop offset="0%" stop-color="#9e6f0e"/>
        <stop offset="40%" stop-color="#fff2a6"/>
        <stop offset="70%" stop-color="#e0a82e"/>
        <stop offset="100%" stop-color="#6e4803"/>
      </linearGradient>
    </defs>
    <ellipse cx="90" cy="186" rx="56" ry="9" fill="rgba(0,0,0,0.45)"/>
    <rect x="52" y="158" width="76" height="24" rx="5" fill="#4a2810" stroke="#d4a024" stroke-width="2.5"/>
    <rect x="64" y="144" width="52" height="16" rx="4" fill="url(#trophyGold)"/>
    <path d="M78 108 L102 108 L106 144 L74 144 Z" fill="url(#trophyGold)"/>
    <path d="M46 32 H134 C134 86 114 114 90 114 C66 114 46 86 46 32 Z" fill="url(#trophyGold)" stroke="#78520a" stroke-width="2.5"/>
    <path d="M46 44 C18 44 18 84 52 92" fill="none" stroke="url(#trophyGold)" stroke-width="9" stroke-linecap="round"/>
    <path d="M134 44 C162 44 162 84 128 92" fill="none" stroke="url(#trophyGold)" stroke-width="9" stroke-linecap="round"/>
    <polygon points="90,48 96,62 112,64 100,74 103,90 90,82 77,90 80,74 68,64 84,62" fill="#fff9d6"/>
  </svg>`
};