/* ========================================================
   小法槌 · 法治科普网页游戏 - 核心逻辑
   纯前端实现，无框架依赖
   ======================================================== */

'use strict';

/* ========================================================
   第一部分：SVG 场景插画库
   每个函数返回一个 SVG 字符串，渲染到场景容器
   ======================================================== */

const SCENE_W = 1280;
const SCENE_H = 720;

// --- 法官办公室（共用场景，参数化案号） ---
function svg_office(caseNum) {
  return `
  <svg class="scene-svg" viewBox="0 0 ${SCENE_W} ${SCENE_H}" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="office-wall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#D4CDB8"/>
        <stop offset="100%" stop-color="#B8A88A"/>
      </linearGradient>
      <linearGradient id="office-desk" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5C3A21"/>
        <stop offset="100%" stop-color="#3D2817"/>
      </linearGradient>
      <linearGradient id="office-light" x1="0.3" y1="0" x2="0.7" y2="1">
        <stop offset="0%" stop-color="rgba(255,240,200,0.25)"/>
        <stop offset="60%" stop-color="rgba(255,240,200,0)"/>
      </linearGradient>
      <linearGradient id="floor-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8B7355"/>
        <stop offset="100%" stop-color="#6B5538"/>
      </linearGradient>
    </defs>
    <!-- 墙面 -->
    <rect x="0" y="0" width="${SCENE_W}" height="${SCENE_H}" fill="url(#office-wall)"/>
    <!-- 地板 -->
    <rect x="0" y="520" width="${SCENE_W}" height="200" fill="url(#floor-grad)"/>
    <!-- 窗户及阳光 -->
    <rect x="60" y="60" width="260" height="340" fill="#A8C4D8" rx="4"/>
    <rect x="60" y="60" width="260" height="340" fill="url(#office-light)"/>
    <line x1="190" y1="60" x2="190" y2="400" stroke="#8B7D5C" stroke-width="4"/>
    <line x1="60" y1="230" x2="320" y2="230" stroke="#8B7D5C" stroke-width="4"/>
    <rect x="56" y="400" width="268" height="10" fill="#5C3A21" rx="2"/>
    <!-- 窗外梧桐 -->
    <circle cx="110" cy="140" r="50" fill="#5A8A5A" opacity="0.6"/>
    <circle cx="170" cy="120" r="45" fill="#6A9A6A" opacity="0.5"/>
    <circle cx="250" cy="150" r="40" fill="#5A8A5A" opacity="0.5"/>
    <rect x="150" y="180" width="8" height="50" fill="#4A3A2A" opacity="0.4"/>
    <rect x="240" y="170" width="6" height="60" fill="#4A3A2A" opacity="0.4"/>
    <!-- 阳光光束 -->
    <polygon points="120,60 200,60 320,520 240,520" fill="rgba(255,245,210,0.08)"/>
    <!-- 墙面标语 -->
    <rect x="450" y="70" width="620" height="70" fill="rgba(0,0,0,0.06)" rx="4"/>
    <text x="760" y="115" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="26" font-weight="700" fill="#8B7355" letter-spacing="6">努力让人民群众在每一个司法案件中感受到公平正义</text>
    <!-- 文件柜 -->
    <rect x="1080" y="80" width="160" height="320" fill="#4A3828" rx="4"/>
    <rect x="1090" y="95" width="140" height="130" fill="#3D2817" rx="2"/>
    <rect x="1090" y="240" width="140" height="140" fill="#3D2817" rx="2"/>
    <circle cx="1215" cy="160" r="4" fill="#C9A961"/>
    <circle cx="1215" cy="310" r="4" fill="#C9A961"/>
    <!-- 书籍 -->
    <rect x="1095" y="100" width="14" height="120" fill="#8B4513"/>
    <rect x="1112" y="100" width="14" height="120" fill="#5A3A2A"/>
    <rect x="1129" y="100" width="14" height="120" fill="#6B4226"/>
    <rect x="1146" y="100" width="14" height="120" fill="#4A5D4A"/>
    <rect x="1163" y="100" width="14" height="120" fill="#8B6914"/>
    <rect x="1180" y="100" width="14" height="120" fill="#5A3A5A"/>
    <text x="1155" y="135" font-size="8" fill="#C9A961" text-anchor="middle" writing-mode="tb">民法典</text>
    <!-- 办公桌 -->
    <rect x="380" y="440" width="560" height="160" fill="url(#office-desk)" rx="6"/>
    <rect x="380" y="440" width="560" height="12" fill="#6B4828" rx="6"/>
    <rect x="400" y="600" width="20" height="80" fill="#3D2817"/>
    <rect x="900" y="600" width="20" height="80" fill="#3D2817"/>
    <!-- 桌面物品 -->
    <!-- 国旗 -->
    <rect x="930" y="420" width="6" height="80" fill="#8B7355"/>
    <rect x="936" y="425" width="40" height="26" fill="#C0392B"/>
    <polygon points="946,432 948,438 954,438 949,442 951,448 946,444 941,448 943,442 938,438 944,438" fill="#D4AF37"/>
    <!-- 党旗 -->
    <rect x="385" y="420" width="6" height="80" fill="#8B7355"/>
    <rect x="391" y="425" width="36" height="24" fill="#C0392B"/>
    <text x="409" y="442" text-anchor="middle" font-size="14" fill="#D4AF37">★</text>
    <!-- 保温杯 -->
    <rect x="830" y="415" width="32" height="50" fill="#E8E0D0" rx="4"/>
    <rect x="830" y="415" width="32" height="8" fill="#D4CDB8" rx="4"/>
    <ellipse cx="846" cy="425" rx="8" ry="3" fill="#C9A961" opacity="0.4"/>
    <!-- 迷你法槌摆件 -->
    <rect x="780" y="438" width="40" height="6" fill="#8B7355" rx="2"/>
    <rect x="792" y="428" width="16" height="18" fill="#5C3A21" rx="2"/>
    <!-- 老花镜 -->
    <circle cx="745" cy="445" r="10" fill="none" stroke="#333" stroke-width="2"/>
    <circle cx="770" cy="445" r="10" fill="none" stroke="#333" stroke-width="2"/>
    <line x1="755" y1="445" x2="760" y2="445" stroke="#333" stroke-width="2"/>
    <!-- 卷宗袋 (3个叠放) -->
    <g id="case-files-group">
      <rect x="420" y="475" width="120" height="100" fill="#C4A882" rx="3"/>
      <rect x="420" y="475" width="120" height="100" fill="none" stroke="#A88B6A" stroke-width="1" rx="3"/>
      <rect x="425" y="470" width="120" height="100" fill="#D4BC98" rx="3"/>
      <rect x="425" y="470" width="120" height="100" fill="none" stroke="#B89E7A" stroke-width="1" rx="3"/>
      <rect x="430" y="465" width="120" height="100" fill="#DCC8A6" rx="3"/>
      <rect x="430" y="465" width="120" height="100" fill="none" stroke="#C4A882" stroke-width="1" rx="3"/>
      <!-- 卷宗袋文字 -->
      <text x="490" y="495" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="11" fill="#5C3A21" font-weight="600">青城区人民法院</text>
      <text x="490" y="510" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="9" fill="#5C3A21">诉讼卷宗</text>
      <rect x="445" y="518" width="90" height="18" fill="rgba(255,255,255,0.5)" rx="2"/>
      <text x="490" y="530" text-anchor="middle" font-size="9" fill="#3D2817" font-weight="600">${caseNum}</text>
    </g>
    <!-- 墙角阴影 -->
    <rect x="0" y="0" width="${SCENE_W}" height="${SCENE_H}" fill="rgba(0,0,0,0)" pointer-events="none"/>
  </svg>`;
}

// --- 公寓楼道（第一关 搜证1） ---
function svg_hallway() {
  return `
  <svg class="scene-svg" viewBox="0 0 ${SCENE_W} ${SCENE_H}" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="wall-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#D4C896"/>
        <stop offset="70%" stop-color="#C4B886"/>
        <stop offset="100%" stop-color="#A89868"/>
      </linearGradient>
      <linearGradient id="floor-grad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#9A9A9A"/>
        <stop offset="100%" stop-color="#7A7A7A"/>
      </linearGradient>
    </defs>
    <!-- 墙面 -->
    <rect x="0" y="0" width="${SCENE_W}" height="${SCENE_H}" fill="url(#wall-grad)"/>
    <!-- 地面 -->
    <polygon points="0,440 ${SCENE_W},440 ${SCENE_W},${SCENE_H} 0,${SCENE_H}" fill="url(#floor-grad2)"/>
    <!-- 水渍印 -->
    <ellipse cx="200" cy="620" rx="60" ry="15" fill="rgba(0,0,0,0.08)"/>
    <ellipse cx="600" cy="660" rx="80" ry="18" fill="rgba(0,0,0,0.06)"/>
    <!-- 楼梯 -->
    <polygon points="0,440 0,200 280,200 280,260 220,260 220,320 160,320 160,380 100,380 100,440" fill="#8A8A8A" stroke="#6A6A6A" stroke-width="2"/>
    <line x1="0" y1="200" x2="0" y2="440" stroke="#5A5A5A" stroke-width="3"/>
    <!-- 扶手 -->
    <line x1="280" y1="200" x2="280" y2="440" stroke="#8B7355" stroke-width="6"/>
    <line x1="40" y1="220" x2="270" y2="220" stroke="#8B7355" stroke-width="3"/>
    <line x1="40" y1="280" x2="270" y2="280" stroke="#8B7355" stroke-width="3"/>
    <!-- 墙面纹理 -->
    <line x1="0" y1="400" x2="${SCENE_W}" y2="400" stroke="#B8A878" stroke-width="1" opacity="0.5"/>
    <!-- 监控摄像头 -->
    <g>
      <rect x="560" y="80" width="70" height="40" fill="#2C2C2C" rx="6"/>
      <circle cx="595" cy="100" r="16" fill="#1A1A1A" stroke="#444" stroke-width="2"/>
      <circle cx="595" cy="100" r="10" fill="#0D0D0D"/>
      <circle cx="595" cy="100" r="4" fill="#C0392B" opacity="0.8"/>
      <rect x="585" y="118" width="20" height="6" fill="#2C2C2C"/>
    </g>
    <!-- 防盗门 -->
    <rect x="780" y="260" width="180" height="320" fill="#4A3A2A" rx="4"/>
    <rect x="790" y="275" width="160" height="140" fill="#3D2817" rx="2"/>
    <rect x="790" y="425" width="160" height="145" fill="#3D2817" rx="2"/>
    <circle cx="940" cy="420" r="6" fill="#C9A961"/>
    <!-- 猫笼 -->
    <g>
      <rect x="990" y="440" width="120" height="100" fill="none" stroke="#8B7355" stroke-width="3"/>
      <line x1="990" y1="465" x2="1110" y2="465" stroke="#8B7355" stroke-width="2"/>
      <line x1="990" y1="490" x2="1110" y2="490" stroke="#8B7355" stroke-width="2"/>
      <line x1="990" y1="515" x2="1110" y2="515" stroke="#8B7355" stroke-width="2"/>
      <line x1="1015" y1="440" x2="1015" y2="540" stroke="#8B7355" stroke-width="2"/>
      <line x1="1045" y1="440" x2="1045" y2="540" stroke="#8B7355" stroke-width="2"/>
      <line x1="1075" y1="440" x2="1075" y2="540" stroke="#8B7355" stroke-width="2"/>
      <!-- 笼门打开 -->
      <line x1="990" y1="440" x2="970" y2="460" stroke="#8B7355" stroke-width="3"/>
      <line x1="990" y1="540" x2="970" y2="560" stroke="#8B7355" stroke-width="3"/>
      <line x1="970" y1="460" x2="970" y2="560" stroke="#8B7355" stroke-width="2"/>
      <!-- 断裂锁扣 -->
      <rect x="992" y="438" width="8" height="6" fill="#C0392B"/>
      <line x1="996" y1="438" x2="1004" y2="430" stroke="#C0392B" stroke-width="2" stroke-dasharray="3,2"/>
    </g>
    <!-- 猫粮袋 -->
    <g>
      <path d="M 350 580 L 360 520 L 420 520 L 430 580 Z" fill="#8B7355"/>
      <ellipse cx="390" cy="520" rx="30" ry="8" fill="#6B5538"/>
      <text x="390" y="555" text-anchor="middle" font-size="10" fill="#D4CDB8">猫粮</text>
      <!-- 散落猫粮 -->
      <circle cx="440" cy="590" r="3" fill="#D4A86A"/>
      <circle cx="455" cy="595" r="3" fill="#D4A86A"/>
      <circle cx="465" cy="588" r="2.5" fill="#D4A86A"/>
    </g>
    <!-- 猫窝 -->
    <g>
      <ellipse cx="520" cy="600" rx="50" ry="25" fill="#3A6B8A"/>
      <path d="M 470 600 Q 520 560 570 600" fill="#2A5B7A" stroke="#1A4B6A" stroke-width="1"/>
      <ellipse cx="520" cy="600" rx="20" ry="12" fill="#1A4B6A"/>
    </g>
    <!-- 猫爪印 -->
    <g opacity="0.6">
      <circle cx="280" cy="580" r="6" fill="#8B5A2B"/>
      <circle cx="272" cy="570" r="2.5" fill="#8B5A2B"/>
      <circle cx="280" cy="566" r="2.5" fill="#8B5A2B"/>
      <circle cx="288" cy="570" r="2.5" fill="#8B5A2B"/>
      <circle cx="340" cy="620" r="6" fill="#8B5A2B"/>
      <circle cx="332" cy="610" r="2.5" fill="#8B5A2B"/>
      <circle cx="340" cy="606" r="2.5" fill="#8B5A2B"/>
      <circle cx="348" cy="610" r="2.5" fill="#8B5A2B"/>
      <circle cx="420" cy="660" r="6" fill="#8B5A2B"/>
      <circle cx="412" cy="650" r="2.5" fill="#8B5A2B"/>
      <circle cx="420" cy="646" r="2.5" fill="#8B5A2B"/>
      <circle cx="428" cy="650" r="2.5" fill="#8B5A2B"/>
    </g>
    <!-- 血点 -->
    <circle cx="310" cy="590" r="2" fill="#C0392B" opacity="0.5"/>
    <circle cx="375" cy="635" r="2" fill="#C0392B" opacity="0.5"/>
    <circle cx="450" cy="675" r="1.5" fill="#C0392B" opacity="0.5"/>
    <!-- 橘猫毛 -->
    <line x1="540" y1="595" x2="548" y2="600" stroke="#E8A020" stroke-width="1" opacity="0.6"/>
    <line x1="545" y1="590" x2="553" y2="595" stroke="#E8A020" stroke-width="1" opacity="0.6"/>
  </svg>`;
}

// --- 物业监控室（第一关 搜证2） ---
function svg_monitor_room() {
  return `
  <svg class="scene-svg" viewBox="0 0 ${SCENE_W} ${SCENE_H}" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="dark-room" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2C2C2C"/>
        <stop offset="100%" stop-color="#1A1A1A"/>
      </linearGradient>
      <linearGradient id="screen-glow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stop-color="rgba(180,200,220,0.3)"/>
        <stop offset="100%" stop-color="rgba(120,140,160,0)"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="${SCENE_W}" height="${SCENE_H}" fill="url(#dark-room)"/>
    <!-- 显示器光晕 -->
    <ellipse cx="400" cy="300" rx="300" ry="200" fill="rgba(150,170,190,0.08)"/>
    <ellipse cx="880" cy="280" rx="260" ry="180" fill="rgba(150,170,190,0.08)"/>
    <!-- 墙面标识 -->
    <rect x="500" y="40" width="280" height="60" fill="#8B0000" rx="4"/>
    <text x="640" y="78" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="22" fill="#FFFFFF" font-weight="700" letter-spacing="8">监控重地 闲人免进</text>
    <!-- 显示器1 -->
    <g>
      <rect x="100" y="140" width="460" height="300" fill="#0D0D0D" rx="6" stroke="#333" stroke-width="3"/>
      <rect x="115" y="155" width="430" height="250" fill="#1A1A2E"/>
      <!-- 监控画面 -->
      <rect x="125" y="165" width="410" height="230" fill="#2A2A3E"/>
      <!-- 画面内容：楼道 -->
      <rect x="125" y="165" width="410" height="230" fill="url(#screen-glow)"/>
      <polygon points="125,165 535,165 535,395 125,395" fill="none" stroke="#333" stroke-width="1"/>
      <!-- 画面中的楼道场景 -->
      <rect x="125" y="280" width="410" height="115" fill="#3A3A4E"/>
      <rect x="125" y="165" width="410" height="115" fill="#2E2E3E"/>
      <rect x="200" y="200" width="120" height="200" fill="#383848" opacity="0.5"/>
      <rect x="380" y="200" width="100" height="200" fill="#383848" opacity="0.5"/>
      <!-- 小人 -->
      <circle cx="330" cy="250" r="10" fill="#9A9A9A"/>
      <rect x="322" y="260" width="16" height="40" fill="#7A7A8A"/>
      <!-- 猫 -->
      <ellipse cx="420" cy="290" rx="14" ry="8" fill="#8A7A5A"/>
      <circle cx="430" cy="285" r="6" fill="#8A7A5A"/>
      <!-- 时间戳 -->
      <text x="140" y="385" font-size="11" fill="#00FF00" font-family="monospace">CAM-03  2026-03-15 14:22:08</text>
      <rect x="110" y="405" width="4" height="12" fill="#444"/>
    </g>
    <!-- 显示器2 -->
    <g>
      <rect x="640" y="140" width="420" height="280" fill="#0D0D0D" rx="6" stroke="#333" stroke-width="3"/>
      <rect x="655" y="155" width="390" height="230" fill="#1A1A2E"/>
      <rect x="665" y="165" width="370" height="210" fill="#2A2A3E"/>
      <polygon points="665,165 1035,165 1035,375 665,375" fill="none" stroke="#333" stroke-width="1"/>
      <!-- 画面内容：小区大门 -->
      <rect x="665" y="280" width="370" height="95" fill="#3A3A4E"/>
      <rect x="665" y="165" width="370" height="115" fill="#2E2E3E"/>
      <rect x="750" y="200" width="80" height="175" fill="#383848" opacity="0.5"/>
      <rect x="900" y="200" width="80" height="175" fill="#383848" opacity="0.5"/>
      <text x="680" y="365" font-size="11" fill="#00FF00" font-family="monospace">CAM-01  2026-03-15 14:22:08</text>
    </g>
    <!-- 办公桌 -->
    <rect x="80" y="460" width="1000" height="80" fill="#3D2817" rx="4"/>
    <rect x="100" y="540" width="16" height="140" fill="#2D1B0F"/>
    <rect x="1044" y="540" width="16" height="140" fill="#2D1B0F"/>
    <!-- 值班登记本 -->
    <rect x="200" y="430" width="120" height="40" fill="#D4CDB8" rx="2" stroke="#A89868" stroke-width="1"/>
    <line x1="210" y1="445" x2="310" y2="445" stroke="#999" stroke-width="0.5"/>
    <line x1="210" y1="455" x2="310" y2="455" stroke="#999" stroke-width="0.5"/>
    <!-- 搪瓷茶缸 -->
    <rect x="400" y="425" width="40" height="45" fill="#E8E0D0" rx="4"/>
    <rect x="400" y="425" width="40" height="8" fill="#C0392B" rx="4"/>
    <text x="420" y="450" text-anchor="middle" font-size="7" fill="#C0392B">值班</text>
    <!-- 钥匙串 -->
    <circle cx="520" cy="445" r="6" fill="none" stroke="#8B7355" stroke-width="2"/>
    <rect x="526" y="443" width="20" height="4" fill="#8B7355" rx="1"/>
    <rect x="526" y="449" width="16" height="4" fill="#8B7355" rx="1"/>
    <!-- 保安制服外套 -->
    <g>
      <rect x="920" y="580" width="100" height="100" fill="#2A4858" rx="6"/>
      <rect x="960" y="580" width="20" height="100" fill="#1A3848"/>
      <rect x="940" y="590" width="60" height="4" fill="#C9A961"/>
      <text x="970" y="610" text-anchor="middle" font-size="8" fill="#C9A961">保安</text>
    </g>
    <!-- 椅子 -->
    <rect x="560" y="560" width="120" height="20" fill="#2C2C2C" rx="4"/>
    <rect x="560" y="500" width="120" height="60" fill="none" stroke="#444" stroke-width="2" rx="4"/>
    <rect x="570" y="580" width="8" height="80" fill="#444"/>
    <rect x="662" y="580" width="8" height="80" fill="#444"/>
  </svg>`;
}

// --- 法庭（共用场景） ---
function svg_courtroom() {
  return `
  <svg class="scene-svg" viewBox="0 0 ${SCENE_W} ${SCENE_H}" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="court-wall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#C4B898"/>
        <stop offset="100%" stop-color="#A89878"/>
      </linearGradient>
      <linearGradient id="bench-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5C3A21"/>
        <stop offset="100%" stop-color="#3D2817"/>
      </linearGradient>
      <linearGradient id="floor-court" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8B7355"/>
        <stop offset="100%" stop-color="#6B5538"/>
      </linearGradient>
      <radialGradient id="emblem-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="rgba(201,169,97,0.2)"/>
        <stop offset="100%" stop-color="rgba(201,169,97,0)"/>
      </radialGradient>
    </defs>
    <!-- 墙面 -->
    <rect x="0" y="0" width="${SCENE_W}" height="${SCENE_H}" fill="url(#court-wall)"/>
    <!-- 地面 -->
    <rect x="0" y="500" width="${SCENE_W}" height="220" fill="url(#floor-court)"/>
    <!-- 国徽光晕 -->
    <ellipse cx="640" cy="90" rx="120" ry="80" fill="url(#emblem-glow)"/>
    <!-- 国徽 -->
    <g>
      <circle cx="640" cy="90" r="55" fill="#C0392B"/>
      <circle cx="640" cy="90" r="55" fill="none" stroke="#D4AF37" stroke-width="3"/>
      <!-- 天安门简化 -->
      <rect x="610" y="80" width="60" height="25" fill="#D4AF37"/>
      <rect x="615" y="72" width="50" height="10" fill="#D4AF37"/>
      <rect x="620" y="65" width="40" height="8" fill="#D4AF37"/>
      <polygon points="612,80 612,72 615,72 615,80" fill="#C0392B"/>
      <polygon points="668,80 668,72 665,72 665,80" fill="#C0392B"/>
      <rect x="628" y="88" width="4" height="10" fill="#C0392B"/>
      <rect x="638" y="88" width="4" height="10" fill="#C0392B"/>
      <rect x="648" y="88" width="4" height="10" fill="#C0392B"/>
      <!-- 麦穗 -->
      <path d="M 590 100 Q 640 130 690 100" fill="none" stroke="#D4AF37" stroke-width="3"/>
      <text x="640" y="110" text-anchor="middle" font-size="8" fill="#D4AF37">★</text>
    </g>
    <!-- 法台 -->
    <g>
      <rect x="440" y="220" width="400" height="140" fill="url(#bench-grad)" rx="6"/>
      <rect x="440" y="220" width="400" height="12" fill="#6B4828" rx="6"/>
      <rect x="460" y="360" width="20" height="140" fill="#3D2817"/>
      <rect x="800" y="360" width="20" height="140" fill="#3D2817"/>
      <!-- 法桌 -->
      <rect x="470" y="250" width="340" height="80" fill="#4A3220" rx="4"/>
      <!-- 法槌 -->
      <ellipse cx="560" cy="290" rx="22" ry="5" fill="#3D2817" opacity="0.4"/>
      <rect x="548" y="275" width="28" height="12" rx="3" fill="#5C3A21"/>
      <rect x="560" y="285" width="4" height="20" fill="#5C3A21"/>
      <!-- 法官席铭牌 -->
      <rect x="610" y="265" width="120" height="30" fill="#2D1B0F" rx="2"/>
      <text x="670" y="285" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="14" fill="#C9A961" font-weight="600">审判员</text>
    </g>
    <!-- 法官 -->
    <g>
      <!-- 法官身体（法袍） -->
      <ellipse cx="640" cy="210" rx="40" ry="50" fill="#1A1A2E"/>
      <path d="M 600 200 Q 640 160 680 200 L 690 250 L 590 250 Z" fill="#1A1A2E"/>
      <!-- 头 -->
      <circle cx="640" cy="170" r="22" fill="#D4A88A"/>
      <!-- 头发 -->
      <path d="M 618 165 Q 640 145 662 165" fill="#3A3A3A"/>
      <!-- 眼睛 -->
      <circle cx="632" cy="170" r="2" fill="#333"/>
      <circle cx="648" cy="170" r="2" fill="#333"/>
      <!-- 领带/领子 -->
      <polygon points="630,190 650,190 640,210" fill="#C0392B"/>
      <rect x="630" y="190" width="20" height="3" fill="#FFFFFF"/>
    </g>
    <!-- 书记员席 -->
    <g>
      <rect x="920" y="320" width="200" height="80" fill="url(#bench-grad)" rx="4"/>
      <rect x="940" y="340" width="160" height="50" fill="#4A3220" rx="2"/>
      <rect x="935" y="400" width="16" height="100" fill="#3D2817"/>
      <rect x="1089" y="400" width="16" height="100" fill="#3D2817"/>
      <rect x="960" y="345" width="120" height="24" fill="#2D1B0F" rx="2"/>
      <text x="1020" y="362" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="12" fill="#C9A961">书记员</text>
      <!-- 书记员 -->
      <ellipse cx="1020" cy="300" rx="24" ry="30" fill="#2A4858"/>
      <circle cx="1020" cy="270" r="16" fill="#E8C8A8"/>
      <path d="M 1004 265 Q 1020 250 1036 265" fill="#4A3828"/>
    </g>
    <!-- 原告席 -->
    <g>
      <rect x="280" y="400" width="180" height="70" fill="url(#bench-grad)" rx="4"/>
      <rect x="295" y="415" width="150" height="40" fill="#4A3220" rx="2"/>
      <rect x="300" y="420" width="80" height="20" fill="#2D1B0F" rx="2"/>
      <text x="340" y="435" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="12" fill="#C9A961">原告席</text>
      <!-- 原告人物 -->
      <ellipse cx="340" cy="380" rx="18" ry="22" fill="#4A6A4A"/>
      <circle cx="340" cy="360" r="13" fill="#D4A88A"/>
    </g>
    <!-- 被告席 -->
    <g>
      <rect x="820" y="400" width="180" height="70" fill="url(#bench-grad)" rx="4"/>
      <rect x="835" y="415" width="150" height="40" fill="#4A3220" rx="2"/>
      <rect x="840" y="420" width="80" height="20" fill="#2D1B0F" rx="2"/>
      <text x="880" y="435" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="12" fill="#C9A961">被告席</text>
      <!-- 被告人物 -->
      <ellipse cx="880" cy="380" rx="18" ry="22" fill="#5A3A2A"/>
      <circle cx="880" cy="360" r="13" fill="#C8A878"/>
    </g>
    <!-- 木质栏杆 -->
    <rect x="100" y="480" width="${SCENE_W - 200}" height="6" fill="#5C3A21"/>
    <rect x="120" y="480" width="4" height="60" fill="#5C3A21"/>
    <rect x="300" y="480" width="4" height="60" fill="#5C3A21"/>
    <rect x="500" y="480" width="4" height="60" fill="#5C3A21"/>
    <rect x="700" y="480" width="4" height="60" fill="#5C3A21"/>
    <rect x="900" y="480" width="4" height="60" fill="#5C3A21"/>
    <rect x="1100" y="480" width="4" height="60" fill="#5C3A21"/>
    <!-- 旁听区座椅 -->
    <g opacity="0.6">
      <rect x="160" y="580" width="40" height="40" fill="#6B5538" rx="3"/>
      <rect x="240" y="580" width="40" height="40" fill="#6B5538" rx="3"/>
      <rect x="320" y="580" width="40" height="40" fill="#6B5538" rx="3"/>
      <rect x="900" y="580" width="40" height="40" fill="#6B5538" rx="3"/>
      <rect x="980" y="580" width="40" height="40" fill="#6B5538" rx="3"/>
      <rect x="1060" y="580" width="40" height="40" fill="#6B5538" rx="3"/>
    </g>
  </svg>`;
}

// --- 公司办公区（第二关 搜证1） ---
function svg_office_area() {
  return `
  <svg class="scene-svg" viewBox="0 0 ${SCENE_W} ${SCENE_H}" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="office-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#E8E8E8"/>
        <stop offset="100%" stop-color="#D0D0D0"/>
      </linearGradient>
      <linearGradient id="floor-office" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#C0C0C0"/>
        <stop offset="100%" stop-color="#A0A0A0"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="${SCENE_W}" height="${SCENE_H}" fill="url(#office-bg)"/>
    <rect x="0" y="480" width="${SCENE_W}" height="240" fill="url(#floor-office)"/>
    <!-- 天花板灯 -->
    <rect x="200" y="0" width="120" height="8" fill="#FFF" opacity="0.8"/>
    <rect x="560" y="0" width="120" height="8" fill="#FFF" opacity="0.8"/>
    <rect x="920" y="0" width="120" height="8" fill="#FFF" opacity="0.8"/>
    <!-- 业绩榜白板 -->
    <g>
      <rect x="60" y="60" width="300" height="200" fill="#FFFFFF" stroke="#8B7355" stroke-width="4" rx="4"/>
      <text x="210" y="90" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="16" fill="#333" font-weight="700">月度业绩榜</text>
      <line x1="80" y1="100" x2="340" y2="100" stroke="#999" stroke-width="1"/>
      <text x="90" y="120" font-size="11" fill="#555">赵明 · 运营</text>
      <rect x="200" y="110" width="120" height="10" fill="#4CAF50" rx="2"/>
      <text x="330" y="120" font-size="10" fill="#555">128%</text>
      <text x="90" y="145" font-size="11" fill="#555">李芳 · 运营</text>
      <rect x="200" y="135" width="90" height="10" fill="#4CAF50" rx="2"/>
      <text x="330" y="145" font-size="10" fill="#555">95%</text>
      <text x="90" y="170" font-size="11" fill="#555">王强 · 运营</text>
      <rect x="200" y="160" width="75" height="10" fill="#FF9800" rx="2"/>
      <text x="330" y="170" font-size="10" fill="#555">82%</text>
      <text x="90" y="195" font-size="11" fill="#555">陈丽 · 运营</text>
      <rect x="200" y="185" width="100" height="10" fill="#4CAF50" rx="2"/>
      <text x="330" y="195" font-size="10" fill="#555">108%</text>
      <text x="90" y="225" font-size="10" fill="#C0392B" font-weight="600">⚠ 项目上线前全员加班冲刺</text>
    </g>
    <!-- 考勤制度 -->
    <g>
      <rect x="1000" y="80" width="220" height="260" fill="#FFF8E8" stroke="#C9A961" stroke-width="2" rx="4"/>
      <rect x="1000" y="80" width="220" height="36" fill="#3D2817" rx="4"/>
      <text x="1110" y="104" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="14" fill="#C9A961" font-weight="700">考勤管理制度</text>
      <text x="1015" y="135" font-size="11" fill="#555" font-weight="600">一、工作时间</text>
      <text x="1020" y="152" font-size="10" fill="#777">周一至周五 9:00-18:00</text>
      <text x="1015" y="175" font-size="11" fill="#555" font-weight="600">二、加班管理</text>
      <rect x="1015" y="180" width="190" height="36" fill="rgba(192,57,43,0.1)" rx="2"/>
      <text x="1020" y="195" font-size="10" fill="#C0392B" font-weight="700">加班需提前审批</text>
      <text x="1020" y="210" font-size="9" fill="#C0392B">未审批加班不计入</text>
      <text x="1015" y="235" font-size="11" fill="#555" font-weight="600">三、调休规定</text>
      <text x="1020" y="252" font-size="10" fill="#777">加班可申请调休抵扣</text>
      <text x="1020" y="267" font-size="10" fill="#777">需直属领导审批</text>
      <text x="1015" y="295" font-size="11" fill="#555" font-weight="600">四、迟到早退</text>
      <text x="1020" y="312" font-size="10" fill="#777">超过15分钟按迟到计</text>
    </g>
    <!-- 格子间 -->
    <g>
      <!-- 工位1 -->
      <rect x="420" y="320" width="200" height="160" fill="#D8D8D8" rx="4"/>
      <rect x="430" y="340" width="80" height="50" fill="#2C2C2C" rx="2"/>
      <rect x="435" y="345" width="70" height="40" fill="#1A4A7A"/>
      <text x="470" y="370" text-anchor="middle" font-size="8" fill="#4AF">代码编辑器</text>
      <rect x="520" y="345" width="80" height="35" fill="#F5F5F5" stroke="#CCC" stroke-width="1" rx="2"/>
      <rect x="525" y="350" width="70" height="3" fill="#8BC34A"/>
      <rect x="525" y="358" width="50" height="3" fill="#CCC"/>
      <rect x="525" y="366" width="60" height="3" fill="#CCC"/>
      <rect x="525" y="374" width="45" height="3" fill="#FF9800"/>
      <!-- 绿植 -->
      <ellipse cx="580" cy="395" rx="15" ry="10" fill="#4A8A4A"/>
      <rect x="575" y="395" width="10" height="12" fill="#8B7355"/>
      <!-- 工位2 -->
      <rect x="660" y="320" width="200" height="160" fill="#D8D8D8" rx="4"/>
      <rect x="670" y="340" width="80" height="50" fill="#2C2C2C" rx="2"/>
      <rect x="675" y="345" width="70" height="40" fill="#1A4A7A"/>
      <rect x="760" y="345" width="80" height="35" fill="#F5F5F5" stroke="#CCC" stroke-width="1" rx="2"/>
      <rect x="765" y="350" width="70" height="3" fill="#8BC34A"/>
      <rect x="765" y="358" width="55" height="3" fill="#CCC"/>
      <rect x="765" y="366" width="65" height="3" fill="#CCC"/>
      <ellipse cx="820" cy="395" rx="15" ry="10" fill="#4A8A4A"/>
      <rect x="815" y="395" width="10" height="12" fill="#8B7355"/>
      <!-- 工位3 -->
      <rect x="420" y="500" width="200" height="160" fill="#D8D8D8" rx="4"/>
      <rect x="430" y="520" width="80" height="50" fill="#2C2C2C" rx="2"/>
      <rect x="435" y="525" width="70" height="40" fill="#1A4A7A"/>
      <ellipse cx="580" cy="575" rx="15" ry="10" fill="#4A8A4A"/>
      <rect x="575" y="575" width="10" height="12" fill="#8B7355"/>
    </g>
    <!-- 打卡机 -->
    <g>
      <rect x="900" y="400" width="80" height="120" fill="#2C2C2C" rx="6"/>
      <rect x="910" y="410" width="60" height="80" fill="#1A1A2E" rx="2"/>
      <text x="940" y="430" text-anchor="middle" font-size="8" fill="#00FF00" font-family="monospace">考勤系统</text>
      <text x="940" y="448" text-anchor="middle" font-size="10" fill="#00FF00" font-family="monospace">09:02:15</text>
      <text x="940" y="465" text-anchor="middle" font-size="7" fill="#4AF" font-family="monospace">2026-03-15</text>
      <rect x="920" y="475" width="40" height="3" fill="#4CAF50"/>
      <text x="940" y="498" text-anchor="middle" font-size="8" fill="#888">请刷卡</text>
      <circle cx="940" cy="510" r="6" fill="#C0392B" opacity="0.6"/>
    </g>
    <!-- 茶水间 -->
    <rect x="100" y="500" width="260" height="180" fill="#E8E8E8" rx="4" opacity="0.5"/>
    <rect x="120" y="520" width="60" height="80" fill="#8B7355" rx="2"/>
    <rect x="200" y="540" width="40" height="40" fill="#FFFFFF" stroke="#CCC" rx="2"/>
    <text x="230" y="565" text-anchor="middle" font-size="9" fill="#999">饮水机</text>
  </svg>`;
}

// --- 人事会议室（第二关 搜证2） ---
function svg_meeting_room() {
  return `
  <svg class="scene-svg" viewBox="0 0 ${SCENE_W} ${SCENE_H}" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="meeting-wall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#E0DCC8"/>
        <stop offset="100%" stop-color="#C8C0A8"/>
      </linearGradient>
      <linearGradient id="table-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8B7355"/>
        <stop offset="100%" stop-color="#6B5538"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="${SCENE_W}" height="${SCENE_H}" fill="url(#meeting-wall)"/>
    <rect x="0" y="500" width="${SCENE_W}" height="220" fill="#9A8A6A"/>
    <!-- 企业文化标语 -->
    <rect x="400" y="40" width="480" height="50" fill="rgba(58,100,120,0.1)" rx="4"/>
    <text x="640" y="72" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="18" fill="#3A6478" font-weight="700" letter-spacing="6">以人为本 追求卓越</text>
    <!-- 投影幕布（收起状态） -->
    <rect x="520" y="100" width="240" height="12" fill="#3D2817" rx="2"/>
    <rect x="630" y="112" width="20" height="6" fill="#5C3A21"/>
    <!-- 会议桌 -->
    <rect x="280" y="280" width="720" height="180" fill="url(#table-grad)" rx="8"/>
    <rect x="280" y="280" width="720" height="12" fill="#A89070" rx="8"/>
    <!-- 桌面物品 -->
    <!-- 笔记本 -->
    <rect x="360" y="310" width="100" height="70" fill="#2C2C2C" rx="4"/>
    <rect x="370" y="320" width="80" height="50" fill="#1A1A2E"/>
    <!-- 矿泉水 -->
    <rect x="500" y="305" width="24" height="50" fill="#E8F4F8" stroke="#A8D8E8" stroke-width="1" rx="2"/>
    <rect x="500" y="305" width="24" height="10" fill="#A8D8E8" rx="2"/>
    <text x="512" y="335" text-anchor="middle" font-size="6" fill="#3A6478">矿泉水</text>
    <!-- 笔 -->
    <rect x="560" y="320" width="80" height="4" fill="#3A6478" rx="2"/>
    <rect x="560" y="320" width="8" height="4" fill="#C9A961"/>
    <!-- 调休申请单 -->
    <g>
      <rect x="720" y="300" width="120" height="80" fill="#FFF" stroke="#C9A961" stroke-width="1.5" rx="2"/>
      <rect x="720" y="300" width="120" height="20" fill="#3D2817" rx="2"/>
      <text x="780" y="314" text-anchor="middle" font-size="9" fill="#C9A961" font-weight="600">调休申请单</text>
      <text x="730" y="332" font-size="8" fill="#555">申请人：赵明</text>
      <text x="730" y="345" font-size="8" fill="#555">日期：3月12日</text>
      <text x="730" y="358" font-size="8" fill="#555">类型：加班调休</text>
      <rect x="730" y="362" width="60" height="12" fill="rgba(192,57,43,0.1)" rx="1"/>
      <text x="760" y="371" text-anchor="middle" font-size="7" fill="#C0392B" font-weight="600">待审批</text>
    </g>
    <!-- 第二份调休单 -->
    <rect x="860" y="320" width="100" height="60" fill="#FFF" stroke="#C9A961" stroke-width="1" rx="2" opacity="0.8"/>
    <rect x="860" y="320" width="100" height="16" fill="#3D2817" rx="2" opacity="0.8"/>
    <text x="910" y="332" text-anchor="middle" font-size="8" fill="#C9A961">调休申请</text>
    <text x="870" y="348" font-size="7" fill="#555">赵明</text>
    <rect x="870" y="354" width="50" height="10" fill="rgba(192,57,43,0.1)" rx="1"/>
    <text x="895" y="362" text-anchor="middle" font-size="6" fill="#C0392B">待审批</text>
    <!-- 椅子 -->
    <g>
      <rect x="340" y="460" width="50" height="12" fill="#3D2817" rx="4"/>
      <rect x="345" y="470" width="6" height="50" fill="#5C3A21"/>
      <rect x="379" y="470" width="6" height="50" fill="#5C3A21"/>
    </g>
    <g>
      <rect x="540" y="460" width="50" height="12" fill="#3D2817" rx="4"/>
      <rect x="545" y="470" width="6" height="50" fill="#5C3A21"/>
      <rect x="579" y="470" width="6" height="50" fill="#5C3A21"/>
    </g>
    <g>
      <rect x="740" y="460" width="50" height="12" fill="#3D2817" rx="4"/>
      <rect x="745" y="470" width="6" height="50" fill="#5C3A21"/>
      <rect x="779" y="470" width="6" height="50" fill="#5C3A21"/>
    </g>
    <g>
      <rect x="940" y="460" width="50" height="12" fill="#3D2817" rx="4"/>
      <rect x="945" y="470" width="6" height="50" fill="#5C3A21"/>
      <rect x="979" y="470" width="6" height="50" fill="#5C3A21"/>
    </g>
    <!-- 窗户 -->
    <rect x="60" y="120" width="180" height="280" fill="#A8C4D8" rx="4"/>
    <line x1="150" y1="120" x2="150" y2="400" stroke="#8B7355" stroke-width="4"/>
    <line x1="60" y1="260" x2="240" y2="260" stroke="#8B7355" stroke-width="4"/>
    <rect x="56" y="400" width="188" height="8" fill="#5C3A21" rx="2"/>
  </svg>`;
}

// --- 书房（第三关 搜证1） ---
function svg_study() {
  return `
  <svg class="scene-svg" viewBox="0 0 ${SCENE_W} ${SCENE_H}" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="study-wall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#C8B898"/>
        <stop offset="100%" stop-color="#A89868"/>
      </linearGradient>
      <linearGradient id="bookshelf" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4A3220"/>
        <stop offset="100%" stop-color="#3D2817"/>
      </linearGradient>
      <linearGradient id="desk-wood" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#6B2A0A"/>
        <stop offset="100%" stop-color="#4A1A05"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="${SCENE_W}" height="${SCENE_H}" fill="url(#study-wall)"/>
    <rect x="0" y="500" width="${SCENE_W}" height="220" fill="#8B7355"/>
    <!-- 百叶窗光影 -->
    <g opacity="0.15">
      <rect x="500" y="0" width="8" height="${SCENE_H}" fill="#3D2817"/>
      <rect x="560" y="0" width="8" height="${SCENE_H}" fill="#3D2817"/>
      <rect x="620" y="0" width="8" height="${SCENE_H}" fill="#3D2817"/>
      <rect x="680" y="0" width="8" height="${SCENE_H}" fill="#3D2817"/>
      <rect x="740" y="0" width="8" height="${SCENE_H}" fill="#3D2817"/>
    </g>
    <!-- 书架 -->
    <g>
      <rect x="60" y="80" width="360" height="380" fill="url(#bookshelf)" rx="4"/>
      <!-- 隔板 -->
      <rect x="70" y="160" width="340" height="6" fill="#2D1B0F"/>
      <rect x="70" y="250" width="340" height="6" fill="#2D1B0F"/>
      <rect x="70" y="340" width="340" height="6" fill="#2D1B0F"/>
      <rect x="70" y="430" width="340" height="6" fill="#2D1B0F"/>
      <!-- 书籍第一层 -->
      <rect x="80" y="100" width="16" height="55" fill="#8B4513"/>
      <rect x="98" y="100" width="16" height="55" fill="#5A3A5A"/>
      <rect x="116" y="100" width="16" height="55" fill="#2A4858"/>
      <rect x="134" y="100" width="16" height="55" fill="#8B0000"/>
      <rect x="152" y="100" width="16" height="55" fill="#4A5D4A"/>
      <rect x="170" y="100" width="16" height="55" fill="#8B6914"/>
      <rect x="188" y="100" width="16" height="55" fill="#5A3A2A"/>
      <rect x="206" y="100" width="16" height="55" fill="#2C2C2C"/>
      <rect x="224" y="100" width="16" height="55" fill="#8B4513"/>
      <rect x="242" y="100" width="16" height="55" fill="#2A4858"/>
      <rect x="260" y="100" width="16" height="55" fill="#5A3A5A"/>
      <rect x="278" y="100" width="16" height="55" fill="#8B0000"/>
      <rect x="296" y="100" width="16" height="55" fill="#4A5D4A"/>
      <rect x="314" y="100" width="16" height="55" fill="#8B6914"/>
      <rect x="332" y="100" width="16" height="55" fill="#5A3A2A"/>
      <rect x="350" y="100" width="16" height="55" fill="#2C2C2C"/>
      <rect x="368" y="100" width="16" height="55" fill="#8B4513"/>
      <!-- 书籍第二层 -->
      <rect x="80" y="185" width="16" height="60" fill="#2A4858"/>
      <rect x="98" y="185" width="16" height="60" fill="#5A3A5A"/>
      <rect x="116" y="185" width="16" height="60" fill="#8B0000"/>
      <rect x="134" y="185" width="16" height="60" fill="#4A5D4A"/>
      <rect x="152" y="185" width="16" height="60" fill="#8B6914"/>
      <rect x="170" y="185" width="16" height="60" fill="#5A3A2A"/>
      <rect x="188" y="185" width="16" height="60" fill="#2C2C2C"/>
      <rect x="206" y="185" width="16" height="60" fill="#8B4513"/>
      <rect x="224" y="185" width="16" height="60" fill="#2A4858"/>
      <rect x="242" y="185" width="16" height="60" fill="#5A3A5A"/>
      <rect x="260" y="185" width="16" height="60" fill="#8B0000"/>
      <rect x="278" y="185" width="16" height="60" fill="#4A5D4A"/>
      <rect x="296" y="185" width="16" height="60" fill="#8B6914"/>
      <rect x="314" y="185" width="16" height="60" fill="#5A3A2A"/>
      <rect x="332" y="185" width="16" height="60" fill="#2C2C2C"/>
      <rect x="350" y="185" width="16" height="60" fill="#8B4513"/>
      <!-- 书籍第三层 -->
      <rect x="80" y="280" width="16" height="55" fill="#8B0000"/>
      <rect x="98" y="280" width="16" height="55" fill="#2A4858"/>
      <rect x="116" y="280" width="16" height="55" fill="#8B4513"/>
      <rect x="134" y="280" width="16" height="55" fill="#5A3A5A"/>
      <rect x="152" y="280" width="16" height="55" fill="#4A5D4A"/>
      <rect x="170" y="280" width="16" height="55" fill="#8B6914"/>
      <rect x="188" y="280" width="16" height="55" fill="#2C2C2C"/>
      <rect x="206" y="280" width="16" height="55" fill="#5A3A2A"/>
      <rect x="224" y="280" width="16" height="55" fill="#8B0000"/>
      <rect x="242" y="280" width="16" height="55" fill="#2A4858"/>
      <rect x="260" y="280" width="16" height="55" fill="#8B4513"/>
      <rect x="278" y="280" width="16" height="55" fill="#5A3A5A"/>
      <rect x="296" y="280" width="16" height="55" fill="#4A5D4A"/>
      <rect x="314" y="280" width="16" height="55" fill="#8B6914"/>
      <rect x="332" y="280" width="16" height="55" fill="#2C2C2C"/>
      <rect x="350" y="280" width="16" height="55" fill="#5A3A2A"/>
    </g>
    <!-- 红木书桌 -->
    <g>
      <rect x="500" y="360" width="420" height="120" fill="url(#desk-wood)" rx="6"/>
      <rect x="500" y="360" width="420" height="12" fill="#8B3A1A" rx="6"/>
      <rect x="520" y="480" width="20" height="80" fill="#4A1A05"/>
      <rect x="880" y="480" width="20" height="80" fill="#4A1A05"/>
    </g>
    <!-- 桌面物品 -->
    <!-- 老花镜 -->
    <circle cx="560" cy="385" r="10" fill="none" stroke="#8B7355" stroke-width="2"/>
    <circle cx="585" cy="385" r="10" fill="none" stroke="#8B7355" stroke-width="2"/>
    <line x1="570" y1="385" x2="575" y2="385" stroke="#8B7355" stroke-width="2"/>
    <!-- 钢笔和墨水瓶 -->
    <rect x="600" y="375" width="6" height="40" fill="#8B7355" rx="1" transform="rotate(15, 603, 395)"/>
    <rect x="630" y="380" width="20" height="22" fill="#1A1A2E" rx="2"/>
    <rect x="635" y="378" width="10" height="4" fill="#C9A961"/>
    <!-- 泛黄信纸 -->
    <g>
      <rect x="680" y="370" width="100" height="70" fill="#F5E8C8" rx="2" stroke="#D4C0A0" stroke-width="1"/>
      <line x1="690" y1="385" x2="770" y2="385" stroke="#8B7A5A" stroke-width="0.5"/>
      <line x1="690" y1="395" x2="765" y2="395" stroke="#8B7A5A" stroke-width="0.5"/>
      <line x1="690" y1="405" x2="770" y2="405" stroke="#8B7A5A" stroke-width="0.5"/>
      <line x1="690" y1="415" x2="760" y2="415" stroke="#8B7A5A" stroke-width="0.5"/>
      <line x1="690" y1="425" x2="768" y2="425" stroke="#8B7A5A" stroke-width="0.5"/>
    </g>
    <!-- 病历本 -->
    <g>
      <rect x="1080" y="100" width="140" height="180" fill="#E8E8E8" stroke="#C0392B" stroke-width="2" rx="4"/>
      <rect x="1080" y="100" width="140" height="30" fill="#C0392B" rx="4"/>
      <text x="1150" y="120" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="14" fill="#FFF" font-weight="700">病历</text>
      <text x="1095" y="150" font-size="10" fill="#555">姓名：林国栋</text>
      <text x="1095" y="168" font-size="10" fill="#555">性别：男</text>
      <text x="1095" y="186" font-size="10" fill="#555">年龄：78岁</text>
      <line x1="1090" y1="195" x2="1210" y2="195" stroke="#CCC" stroke-width="1"/>
      <text x="1095" y="215" font-size="9" fill="#C0392B" font-weight="600">诊断：</text>
      <text x="1095" y="232" font-size="8" fill="#555">阿尔茨海默症</text>
      <text x="1095" y="246" font-size="8" fill="#555">（中度认知障碍）</text>
      <text x="1095" y="265" font-size="8" fill="#555">日期：2025.11.20</text>
    </g>
    <!-- 就诊卡 -->
    <rect x="1090" y="300" width="90" height="56" fill="#3A6478" rx="4"/>
    <text x="1135" y="320" text-anchor="middle" font-size="9" fill="#FFF" font-weight="600">就诊卡</text>
    <text x="1135" y="335" text-anchor="middle" font-size="8" fill="#C9A961">林国栋</text>
    <text x="1135" y="348" text-anchor="middle" font-size="6" fill="#A8C4D8">市第一人民医院</text>
    <!-- 画架 -->
    <g>
      <rect x="960" y="380" width="160" height="120" fill="none" stroke="#5C3A21" stroke-width="4"/>
      <rect x="970" y="390" width="140" height="100" fill="#E8E0D0"/>
      <!-- 空画框 -->
      <rect x="990" y="410" width="100" height="70" fill="#F5F0E8" stroke="#8B7355" stroke-width="3"/>
      <text x="1040" y="450" text-anchor="middle" font-size="10" fill="#CCC">（画已取走）</text>
      <!-- 防尘布 -->
      <path d="M 950 500 Q 1040 510 1130 500 L 1140 540 L 940 540 Z" fill="#8B7355" opacity="0.6"/>
      <!-- 画架腿 -->
      <line x1="970" y1="500" x2="950" y2="580" stroke="#5C3A21" stroke-width="5"/>
      <line x1="1110" y1="500" x2="1130" y2="580" stroke="#5C3A21" stroke-width="5"/>
    </g>
  </svg>`;
}

// --- 社区调解室（第三关 搜证2） ---
function svg_mediation_room() {
  return `
  <svg class="scene-svg" viewBox="0 0 ${SCENE_W} ${SCENE_H}" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="mediation-wall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#E8E4D8"/>
        <stop offset="100%" stop-color="#D0C8B8"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="${SCENE_W}" height="${SCENE_H}" fill="url(#mediation-wall)"/>
    <rect x="0" y="500" width="${SCENE_W}" height="220" fill="#B8A888"/>
    <!-- 人民调解标识 -->
    <g>
      <circle cx="640" cy="80" r="50" fill="#3A6478"/>
      <circle cx="640" cy="80" r="50" fill="none" stroke="#C9A961" stroke-width="3"/>
      <text x="640" y="75" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="14" fill="#FFF" font-weight="700">人民</text>
      <text x="640" y="95" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="14" fill="#FFF" font-weight="700">调解</text>
    </g>
    <text x="640" y="150" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="16" fill="#3A6478" font-weight="600" letter-spacing="4">社区调解室</text>
    <!-- 圆桌 -->
    <ellipse cx="640" cy="400" rx="280" ry="80" fill="#8B7355"/>
    <ellipse cx="640" cy="395" rx="280" ry="80" fill="#A89070"/>
    <ellipse cx="640" cy="390" rx="270" ry="75" fill="#9A8060"/>
    <!-- 调解记录簿 -->
    <g>
      <rect x="560" y="360" width="160" height="60" fill="#3A6478" rx="3"/>
      <rect x="570" y="368" width="140" height="44" fill="#FFF" rx="2"/>
      <text x="640" y="380" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="12" fill="#3A6478" font-weight="700">调解记录簿</text>
      <line x1="580" y1="390" x2="700" y2="390" stroke="#CCC" stroke-width="0.5"/>
      <line x1="580" y1="398" x2="695" y2="398" stroke="#CCC" stroke-width="0.5"/>
      <line x1="580" y1="406" x2="700" y2="406" stroke="#CCC" stroke-width="0.5"/>
    </g>
    <!-- 桌面其他物品 -->
    <rect x="450" y="375" width="30" height="35" fill="#FFFFFF" stroke="#CCC" rx="2"/>
    <rect x="460" y="380" width="10" height="25" fill="#3A6478"/>
    <circle cx="800" cy="395" r="12" fill="#E8E0D0" stroke="#8B7355" stroke-width="1"/>
    <circle cx="800" cy="395" r="6" fill="#C0392B" opacity="0.3"/>
    <!-- 座椅（围绕圆桌） -->
    <g>
      <rect x="400" y="470" width="60" height="14" fill="#3D2817" rx="4"/>
      <rect x="405" y="484" width="6" height="50" fill="#5C3A21"/>
      <rect x="449" y="484" width="6" height="50" fill="#5C3A21"/>
    </g>
    <g>
      <rect x="550" y="490" width="60" height="14" fill="#3D2817" rx="4"/>
      <rect x="555" y="504" width="6" height="50" fill="#5C3A21"/>
      <rect x="599" y="504" width="6" height="50" fill="#5C3A21"/>
    </g>
    <g>
      <rect x="670" y="490" width="60" height="14" fill="#3D2817" rx="4"/>
      <rect x="675" y="504" width="6" height="50" fill="#5C3A21"/>
      <rect x="719" y="504" width="6" height="50" fill="#5C3A21"/>
    </g>
    <g>
      <rect x="820" y="470" width="60" height="14" fill="#3D2817" rx="4"/>
      <rect x="825" y="484" width="6" height="50" fill="#5C3A21"/>
      <rect x="869" y="484" width="6" height="50" fill="#5C3A21"/>
    </g>
    <!-- 护工帆布包 -->
    <g>
      <rect x="950" y="520" width="100" height="80" fill="#8B7355" rx="4"/>
      <rect x="940" y="510" width="120" height="14" fill="#6B5538" rx="4"/>
      <text x="1000" y="565" text-anchor="middle" font-size="10" fill="#C9A961">护工</text>
      <!-- 工作证 -->
      <rect x="960" y="530" width="50" height="34" fill="#3A6478" rx="2"/>
      <circle cx="975" cy="542" r="6" fill="#D4A88A"/>
      <line x1="985" y1="540" x2="1005" y2="540" stroke="#FFF" stroke-width="1"/>
      <line x1="985" y1="546" x2="1000" y2="546" stroke="#FFF" stroke-width="1"/>
      <line x1="985" y1="552" x2="1003" y2="552" stroke="#FFF" stroke-width="1"/>
    </g>
    <!-- 墙面装饰 -->
    <rect x="100" y="100" width="180" height="120" fill="rgba(58,100,120,0.08)" rx="4"/>
    <text x="190" y="145" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="14" fill="#3A6478" font-weight="600">以和为贵</text>
    <text x="190" y="170" text-anchor="middle" font-size="10" fill="#8B7355">依法调解 定分止争</text>
    <!-- 窗户 -->
    <rect x="1050" y="100" width="180" height="240" fill="#A8C4D8" rx="4"/>
    <line x1="1140" y1="100" x2="1140" y2="340" stroke="#8B7355" stroke-width="4"/>
    <line x1="1050" y1="220" x2="1230" y2="220" stroke="#8B7355" stroke-width="4"/>
    <rect x="1046" y="340" width="188" height="8" fill="#5C3A21" rx="2"/>
    <!-- 绿植 -->
    <ellipse cx="140" cy="480" rx="30" ry="20" fill="#4A8A4A"/>
    <rect x="125" y="480" width="30" height="30" fill="#8B7355" rx="2"/>
  </svg>`;
}

/* ========================================================
   第二部分：游戏数据
   三起民事案件的完整数据结构
   ======================================================== */

const GAME_DATA = {
  cases: [
    // ==================== 第一关 ====================
    {
      id: 'case1',
      order: 1,
      caseNumber: '（2026）青城民初字第072号',
      cause: '饲养动物损害责任纠纷',
      causeCode: '第419号案由',
      brief: '原告张桂兰下楼时被被告王军家饲养的橘猫抓伤右手，支出医疗费826元，起诉要求被告全额赔偿。',
      badge: { icon: '🐾', name: '明察秋毫' },
      scenes: [
        // 场景1：法官办公室
        {
          type: 'office',
          svg: () => svg_office('（2026）青城民初字第072号'),
          hotspots: [
            {
              x: 34, y: 65, w: 10, h: 15,
              tooltip: '查看卷宗',
              action: 'dialogue',
              dialogue: [
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '小同志，这是（2026）青城民初字第072号案件——饲养动物损害责任纠纷。原告张桂兰诉称，她在下楼时被被告王军家饲养的橘猫抓伤右手，支出医疗费826元，要求被告全额赔偿。' },
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '被告王军辩称，是原告主动逗猫才导致被抓伤，且猫笼本已关好，是原告擅自触碰才导致猫跑出。双方各执一词。' },
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '你的任务是前往事发小区和物业监控室，收集相关证据，为庭审提供审理参考意见。注意核实：猫的饲养人是谁、原告是否存在过错、损害后果与饲养行为之间的因果关系。' },
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '去吧，证据是裁判的基础。收集完毕后到第三法庭参加庭审。' }
              ],
              afterScene: 'next'
            }
          ]
        },
        // 场景2：楼道
        {
          type: 'hallway',
          svg: () => svg_hallway(),
          hotspots: [
            {
              id: 'ev1_paw',
              x: 20, y: 78, w: 8, h: 8,
              tooltip: '地面痕迹',
              action: 'evidence',
              evidence: {
                icon: '🐾',
                title: '现场伤情痕迹照片',
                desc: '楼道地面发现猫爪印与淡红色血点痕迹，从单元门口延伸至二楼方向。爪印方向显示猫从侧方跑出，而非被引诱跟随。现场痕迹与原告"正常行走时被抓伤"的陈述基本吻合。'
              }
            },
            {
              id: 'ev1_camera',
              x: 44, y: 12, w: 7, h: 7,
              tooltip: '监控摄像头',
              action: 'hint',
              hint: '楼道上方装有半球形监控摄像头，镜头正对单元门方向。可前往物业监控室调取事发时段录像。'
            },
            {
              id: 'ev1_food',
              x: 27, y: 78, w: 8, h: 8,
              tooltip: '猫粮与猫窝',
              action: 'evidence',
              evidence: {
                icon: '🍖',
                title: '被告长期在公共区域投喂照片',
                desc: '楼道墙角放有猫粮袋、破洞猫窝及散落的橘色猫毛，表明被告王军长期在此公共区域投喂、饲养该橘猫，与被告所称"猫不是我家养的"相矛盾。根据法律规定，长期投喂即构成饲养关系。'
              }
            },
            {
              id: 'ev1_cage',
              x: 77, y: 62, w: 10, h: 12,
              tooltip: '破损猫笼',
              action: 'evidence',
              evidence: {
                icon: '🔧',
                title: '猫笼锁扣损坏照片',
                desc: '被告家门边的铁丝猫笼笼门呈打开状态，锁扣处有明显的断裂痕迹，说明猫笼本身已无法正常闭合。被告所称"猫笼本是关好的"与实际不符，猫并非因原告触碰才跑出，而是笼子早已损坏。'
              }
            }
          ]
        },
        // 场景3：监控室
        {
          type: 'monitor',
          svg: () => svg_monitor_room(),
          hotspots: [
            {
              id: 'ev1_video',
              x: 12, y: 25, w: 32, h: 38,
              tooltip: '监控录像',
              action: 'evidence',
              evidence: {
                icon: '📹',
                title: '单元门监控录像截图',
                desc: '事发当日14时22分的监控录像清晰显示：原告张桂兰正常行走经过单元门时，橘猫从侧方突然窜出将其抓伤，全程原告无逗弄、追逐或靠近猫咪的动作。该录像直接证明原告不存在过错。'
              }
            }
          ]
        },
        // 场景4：法庭
        {
          type: 'courtroom',
          svg: () => svg_courtroom(),
          hotspots: [
            {
              x: 0, y: 0, w: 0, h: 0,
              action: 'trial',
              dialogue: [
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '现在进入庭审阶段。经审查全案证据，本案的核心争议焦点是：原告张桂兰对损害的发生是否存在过错？请法官助理根据已收集的证据，提供审理参考意见。' }
              ],
              trial: {
                question: '根据现场监控录像、猫笼损坏照片及投喂记录等证据，关于原告是否对损害存在过错，你的审理参考意见是：',
                options: [
                  {
                    label: 'A',
                    text: '原告无过错。监控录像显示原告正常行走、无逗猫动作；猫笼锁扣早已损坏导致猫自行跑出；被告长期投喂构成饲养关系。被告应承担全部赔偿责任。',
                    correct: true
                  },
                  {
                    label: 'B',
                    text: '原告存在过错。被告主张原告主动逗猫导致被抓伤，且原告擅自触碰猫笼导致猫跑出，原告应自行承担部分损失。',
                    correct: false,
                    hint: '再核对一下监控录像的时间线——录像中原告是否有逗猫动作？'
                  }
                ]
              }
            }
          ]
        }
      ],
      verdict: {
        title: '民事判决书',
        caseInfo: '（2026）青城民初字第072号 · 饲养动物损害责任纠纷',
        content: '本院认为，被告王军长期在公共区域投喂涉案橘猫，已构成饲养关系。事发时猫笼锁扣早已损坏，猫自行跑出并非因原告触碰所致。监控录像显示原告张桂兰正常行走、无逗猫行为，对损害的发生不存在过错。根据《中华人民共和国民法典》第一千二百四十五条规定，饲养的动物造成他人损害的，动物饲养人应当承担侵权责任。判决如下：\n\n被告王军于本判决生效之日起十日内赔偿原告张桂兰医疗费826元。',
        law: '《中华人民共和国民法典》第一千二百四十五条：饲养的动物造成他人损害的，动物饲养人或者管理人应当承担侵权责任；但是，能够证明损害是因被侵权人故意或者重大过失造成的，可以不承担或者减轻责任。'
      },
      knowledge: [
        {
          title: '饲养动物损害责任的归责原则',
          text: '我国民法典对饲养动物损害责任采"无过错责任"原则，即只要饲养的动物造成他人损害，饲养人就应承担赔偿责任，不以饲养人有过错为前提。受害人只需证明损害事实、饲养关系和因果关系。'
        },
        {
          title: '被侵权人过错的认定标准',
          text: '只有被侵权人存在"故意"或"重大过失"（如故意挑逗、攻击动物），饲养人才可减轻或免除责任。一般性的路过、正常行走不构成过错。本案中原告正常行走，不存在故意或重大过失。'
        },
        {
          title: '"饲养关系"的认定',
          text: '长期、固定地投喂流浪动物，使其形成依赖关系，投喂人即被认定为该动物的饲养人，需承担饲养人责任。不能以"猫不是登记在我名下"为由逃避责任。'
        }
      ]
    },

    // ==================== 第二关 ====================
    {
      id: 'case2',
      order: 2,
      caseNumber: '（2026）青城民初字第156号',
      cause: '劳动合同纠纷（追索劳动报酬）',
      causeCode: '第205号案由第5项',
      brief: '原告赵明系被告青橙科技公司运营岗员工，主张公司拖欠3个月工作日延时加班费共计12600元，公司辩称加班系自愿、已安排调休抵扣。',
      badge: { icon: '💼', name: '秉公执法' },
      scenes: [
        {
          type: 'office',
          svg: () => svg_office('（2026）青城民初字第156号'),
          hotspots: [
            {
              x: 34, y: 65, w: 10, h: 15,
              tooltip: '查看卷宗',
              action: 'dialogue',
              dialogue: [
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '这是（2026）青城民初字第156号案件——劳动合同纠纷，追索劳动报酬。原告赵明是被告青橙科技公司的运营岗员工，主张公司拖欠其3个月工作日延时加班费共计12600元。' },
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '公司辩称：一、原告系自愿加班，公司未安排加班；二、公司已安排调休抵扣加班时间；三、加班费已包含在绩效工资中。三项抗辩理由均需逐一核实。' },
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '你的重点任务是：核查加班是否由公司安排（而非个人自愿）、调休是否实际执行、加班费是否已另行支付。去公司和人事部门收集证据。' }
              ],
              afterScene: 'next'
            }
          ]
        },
        {
          type: 'office_area',
          svg: () => svg_office_area(),
          hotspots: [
            {
              id: 'ev2_clock',
              x: 70, y: 55, w: 7, h: 17,
              tooltip: '打卡机',
              action: 'evidence',
              evidence: {
                icon: '🕐',
                title: '考勤打卡记录',
                desc: '调取原告赵明3个月的考勤打卡数据，显示其多次在工作日22:00以后下班，远超18:00的正常下班时间。打卡记录是客观的电子数据，证明延时加班事实确实存在。'
              }
            },
            {
              id: 'ev2_policy',
              x: 78, y: 11, w: 17, h: 37,
              tooltip: '考勤管理制度',
              action: 'evidence',
              evidence: {
                icon: '📋',
                title: '公司加班审批制度原文',
                desc: '公司考勤管理制度明确规定"加班需提前审批，未审批加班不计入"。但该制度同时规定加班需由"部门主管安排"，而原告提供的聊天记录显示，主管曾在工作群要求"项目上线前全员每晚加班"，构成公司安排加班的事实。'
              }
            },
            {
              id: 'ev2_chat',
              x: 34, y: 48, w: 15, h: 22,
              tooltip: '工位电脑',
              action: 'evidence',
              evidence: {
                icon: '💻',
                title: '工作群聊天记录截图',
                desc: '部门主管在工作群发布消息："项目上线前全员每晚加班到22点，不得早退。"该消息证明加班系公司安排而非员工自愿。根据劳动法规定，用人单位安排加班的，应依法支付加班费，不能以"自愿加班"为由拒绝支付。'
              }
            }
          ]
        },
        {
          type: 'meeting_room',
          svg: () => svg_meeting_room(),
          hotspots: [
            {
              id: 'ev2_leave',
              x: 56, y: 42, w: 9, h: 11,
              tooltip: '调休申请单',
              action: 'evidence',
              evidence: {
                icon: '📝',
                title: '调休申请单（待审批状态）',
                desc: '原告赵明的多份调休申请单均处于"待审批"状态，无任何领导签字确认，未实际执行调休。被告所称"已安排调休抵扣"与事实不符。调休未实际执行，公司仍应支付加班费。'
              }
            }
          ]
        },
        {
          type: 'courtroom',
          svg: () => svg_courtroom(),
          hotspots: [
            {
              x: 0, y: 0, w: 0, h: 0,
              action: 'trial',
              dialogue: [
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '庭审阶段。本案争议焦点为：被告青橙科技公司是否应支付原告赵明加班费12600元。请法官助理根据证据提供审理参考意见。' }
              ],
              trial: {
                question: '综合打卡记录、工作群聊天记录、考勤制度和调休申请单等证据，关于被告是否应支付加班费，你的审理参考意见是：',
                options: [
                  {
                    label: 'A',
                    text: '被告应支付加班费。打卡记录证明延时加班事实，主管聊天记录证明系公司安排加班，调休申请均未实际审批执行。公司未举证加班费已包含在绩效工资中。被告应全额支付加班费12600元。',
                    correct: true
                  },
                  {
                    label: 'B',
                    text: '被告不应支付加班费。原告系自愿加班，公司已有加班审批制度，且已安排调休抵扣，加班费已包含在绩效中。',
                    correct: false,
                    hint: '再核对一下调休申请单的审批状态——调休是否实际执行了？'
                  }
                ]
              }
            }
          ]
        }
      ],
      verdict: {
        title: '民事判决书',
        caseInfo: '（2026）青城民初字第156号 · 劳动合同纠纷',
        content: '本院认为，原告赵明的考勤打卡记录证明其存在工作日延时加班的事实。部门主管在工作群要求"全员每晚加班"，构成用人单位安排加班。被告辩称已安排调休抵扣，但调休申请单均处于"待审批"状态，未实际执行，该抗辩不成立。被告未提供证据证明加班费已包含在绩效工资中。根据劳动法规定，用人单位安排加班的，应按不低于工资150%的标准支付延时加班费。判决如下：\n\n被告青橙科技公司于本判决生效之日起十五日内支付原告赵明加班费12600元。',
        law: '《中华人民共和国劳动法》第四十四条：安排劳动者延长工作时间的，支付不低于工资的百分之一百五十的工资报酬。《最高人民法院关于审理劳动争议案件适用法律问题的解释》第四十二条：劳动者主张加班费的，应当就加班事实的存在承担举证责任。但劳动者有证据证明用人单位掌握加班事实存在的证据，用人单位不提供的，由用人单位承担不利后果。'
      },
      knowledge: [
        {
          title: '"自愿加班"与"公司安排加班"的区别',
          text: '只有用人单位安排的加班才需支付加班费。但如果主管通过工作群、邮件等方式要求员工加班，即使没有走正式审批流程，也构成"公司安排加班"。本案中主管在工作群要求全员加班，即为公司安排。'
        },
        {
          title: '调休抵扣的生效条件',
          text: '调休必须实际执行才能抵扣加班费。仅提交申请但未被审批通过、未实际休息的，不能视为已安排调休。用人单位主张已安排调休的，应举证调休已实际执行。'
        },
        {
          title: '加班费的举证责任分配',
          text: '劳动者需举证加班事实的存在（如打卡记录）。但用人单位掌握考勤记录等关键证据的，如用人单位不提供，则承担不利后果。劳动者提供初步证据后，举证责任转移给用人单位。'
        }
      ]
    },

    // ==================== 第三关 ====================
    {
      id: 'case3',
      order: 3,
      caseNumber: '（2026）青城民初字第209号',
      cause: '法定继承纠纷',
      causeCode: '第29号案由',
      brief: '被继承人林老先生去世后遗留一幅名家油画。长子林建国持手写遗嘱主张油画归己，次子林建华主张老人立遗嘱时神志不清，遗嘱无效，应按法定继承。',
      badge: { icon: '📜', name: '明辨是非' },
      scenes: [
        {
          type: 'office',
          svg: () => svg_office('（2026）青城民初字第209号'),
          hotspots: [
            {
              x: 34, y: 65, w: 10, h: 15,
              tooltip: '查看卷宗',
              action: 'dialogue',
              dialogue: [
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '最后一个案件——（2026）青城民初字第209号，法定继承纠纷。被继承人林国栋老先生去世后，遗留一幅名家油画。长子林建国持有老人手写遗嘱一份，主张油画归自己所有。' },
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '次子林建华主张，遗嘱书写时老人已患阿尔茨海默症，神志不清，遗嘱无效，应按法定继承由两兄弟平分。' },
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '本案关键在于两点：一是遗嘱的形式要件是否合法（自书遗嘱须由遗嘱人亲笔书写、签名、注明年月日）；二是立遗嘱时老人是否具备完全民事行为能力。去林家老宅和社区调解室收集证据。' }
              ],
              afterScene: 'next'
            }
          ]
        },
        {
          type: 'study',
          svg: () => svg_study(),
          hotspots: [
            {
              id: 'ev3_letter',
              x: 53, y: 51, w: 8, h: 10,
              tooltip: '信纸草稿',
              action: 'evidence',
              evidence: {
                icon: '✉️',
                title: '老人手写信纸草稿',
                desc: '书桌上发现多封老人手写信件和草稿，笔迹清晰连贯，可与遗嘱进行笔迹比对。经初步比对，遗嘱确为老人亲笔书写，形式上符合自书遗嘱的要求（亲笔书写、签名、注明年月日）。但形式合法不等于实质有效，还需核查行为能力。'
              }
            },
            {
              id: 'ev3_medical',
              x: 84, y: 14, w: 11, h: 37,
              tooltip: '病历本',
              action: 'evidence',
              evidence: {
                icon: '🏥',
                title: '医院诊断证明',
                desc: '病历显示老人林国栋于2025年11月20日经市第一人民医院诊断为阿尔茨海默症（中度认知障碍）。而遗嘱落款日期为2025年12月5日，即在确诊之后所立。中度认知障碍患者可能无法完全辨认自己的行为，其民事行为能力存疑。'
              }
            },
            {
              id: 'ev3_painting',
              x: 75, y: 53, w: 12, h: 17,
              tooltip: '画架与防尘布',
              action: 'evidence',
              evidence: {
                icon: '🖼️',
                title: '涉案油画照片与购买凭证',
                desc: '画架上油画已被取走（由长子林建国保管），但发现防尘布下有油画的购买凭证，显示该油画购于2018年，价值约18万元，系林老先生婚后购买，属夫妻共同财产。林老先生配偶已先于其去世，该油画中有一半属配偶遗产，另一半属林老先生遗产。'
              }
            }
          ]
        },
        {
          type: 'mediation',
          svg: () => svg_mediation_room(),
          hotspots: [
            {
              id: 'ev3_witness',
              x: 44, y: 50, w: 12, h: 8,
              tooltip: '调解记录簿',
              action: 'evidence',
              evidence: {
                icon: '📖',
                title: '护工证言笔录',
                desc: '老人护工张某在社区调解室接受询问，证言笔录记载：立遗嘱前后期间，老人意识时好时坏，有时认不出护工，有时叫错儿子名字，无法完整辨认自己的行为和财产状况。该证言进一步佐证老人立遗嘱时不具备完全民事行为能力。'
              }
            }
          ]
        },
        {
          type: 'courtroom',
          svg: () => svg_courtroom(),
          hotspots: [
            {
              x: 0, y: 0, w: 0, h: 0,
              action: 'trial',
              dialogue: [
                { speaker: '李建国', role: '审判员', avatar: '⚖️', text: '庭审阶段。本案争议焦点为：长子林建国所持遗嘱是否有效？请法官助理根据证据提供审理参考意见。' }
              ],
              trial: {
                question: '综合病历诊断证明、护工证言笔录及遗嘱笔迹比对等证据，关于该遗嘱的效力，你的审理参考意见是：',
                options: [
                  {
                    label: 'A',
                    text: '遗嘱无效。老人立遗嘱时已确诊中度阿尔茨海默症，护工证言证实其意识时好时坏、无法辨认行为。立遗嘱时不具备完全民事行为能力，遗嘱无效。油画应按法定继承处理，由两兄弟共同继承。',
                    correct: true
                  },
                  {
                    label: 'B',
                    text: '遗嘱有效。遗嘱系老人亲笔书写、签名并注明日期，形式要件齐全。笔迹比对一致，应认定为老人真实意思表示，油画归长子林建国所有。',
                    correct: false,
                    hint: '再核对一下病历本的诊断日期和遗嘱落款日期——立遗嘱时老人的精神状态如何？'
                  }
                ]
              }
            }
          ]
        }
      ],
      verdict: {
        title: '民事判决书',
        caseInfo: '（2026）青城民初字第209号 · 法定继承纠纷',
        content: '本院认为，遗嘱人林国栋于2025年11月20日确诊阿尔茨海默症（中度认知障碍），遗嘱落款日期为2025年12月5日，系确诊后所立。护工证言证实立遗嘱期间老人意识时好时坏，无法完整辨认自己的行为。综合医院诊断证明和护工证言，遗嘱人立遗嘱时不具备完全民事行为能力，所立遗嘱无效。涉案油画应按法定继承处理，由第一顺序继承人林建国、林建华共同继承，各占二分之一份额。判决如下：\n\n一、确认林建国所持2025年12月5日遗嘱无效；\n二、涉案油画由林建国、林建华按份共有，各占50%份额。',
        law: '《中华人民共和国民法典》第一千一百四十三条：无民事行为能力人或者限制民事行为能力人所立的遗嘱无效。第一千一百二十七条：遗产按照下列顺序继承：第一顺序为配偶、子女、父母。第一千一百五十三条：继承开始后，有遗嘱的按照遗嘱继承，没有遗嘱或遗嘱无效的，按照法定继承。'
      },
      knowledge: [
        {
          title: '遗嘱有效的实质要件——民事行为能力',
          text: '立遗嘱时遗嘱人必须具备完全民事行为能力。无民事行为能力人（如不能辨认自己行为的成年人）或限制民事行为能力人（如不能完全辨认自己行为的成年人）所立遗嘱一律无效。即使形式要件齐全，实质要件不具备仍然无效。'
        },
        {
          title: '自书遗嘱的形式要件',
          text: '自书遗嘱须由遗嘱人亲笔书写全文、亲笔签名、注明年月日，三个要件缺一不可。打印后签字的遗嘱不属于自书遗嘱。本案遗嘱虽形式合法，但因立遗嘱人行为能力存疑而无效。'
        },
        {
          title: '遗嘱无效后的法律后果',
          text: '遗嘱全部无效的，遗产按法定继承处理。法定继承中，第一顺序继承人为配偶、子女、父母，一般均等分配。本案油画由两兄弟作为第一顺序继承人各继承50%。'
        }
      ]
    }
  ]
};

/* ========================================================
   第三部分：游戏状态管理
   ======================================================== */

let gameState = {
  currentCaseIndex: 0,
  currentSceneIndex: 0,
  collectedEvidence: [],  // 当前案件已收集的证据ID
  completedCases: [],     // 已完成案件ID
  unlockedBadges: [],     // 已解锁徽章
};

const STORAGE_KEY = 'xiaofachui_progress';

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      completedCases: gameState.completedCases,
      unlockedBadges: gameState.unlockedBadges
    }));
  } catch(e) { console.warn('保存进度失败', e); }
}

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      gameState.completedCases = data.completedCases || [];
      gameState.unlockedBadges = data.unlockedBadges || [];
    }
  } catch(e) { console.warn('读取进度失败', e); }
}

/* ========================================================
   第四部分：屏幕切换
   ======================================================== */

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(id);
  if (screen) {
    screen.classList.add('active');
  }
}

/* ========================================================
   第五部分：案件选择页
   ======================================================== */

function renderMapScreen() {
  const container = document.getElementById('map-cases');
  container.innerHTML = '';

  GAME_DATA.cases.forEach((caseData, index) => {
    const isLocked = index > 0 && !gameState.completedCases.includes(GAME_DATA.cases[index - 1].id);
    const isCompleted = gameState.completedCases.includes(caseData.id);

    const card = document.createElement('div');
    card.className = 'case-card' + (isLocked ? ' locked' : '') + (isCompleted ? ' completed' : '');
    card.innerHTML = `
      <div class="case-card-num">${caseData.caseNumber}</div>
      <div class="case-card-title">${caseData.cause}</div>
      <div class="case-card-cause">${caseData.causeCode}</div>
      <div class="case-card-desc">${caseData.brief}</div>
      <div class="case-card-status">
        <span class="case-card-badge-text">${isCompleted ? '已结案' : (isLocked ? '未解锁' : '待办理')}</span>
        <span class="case-card-lock">${isLocked ? '🔒' : (isCompleted ? '✅' : '📂')}</span>
      </div>
    `;

    if (!isLocked) {
      card.addEventListener('click', () => startCase(index));
    }
    container.appendChild(card);
  });

  // 渲染徽章
  const badgeContainer = document.getElementById('map-badges');
  badgeContainer.innerHTML = '';
  GAME_DATA.cases.forEach(caseData => {
    const unlocked = gameState.unlockedBadges.includes(caseData.id);
    const badge = document.createElement('div');
    badge.className = 'map-badge' + (unlocked ? ' unlocked' : '');
    badge.innerHTML = `<span class="badge-icon">${unlocked ? caseData.badge.icon : '🔒'}</span>`;
    badge.title = unlocked ? caseData.badge.name : '未解锁';
    badgeContainer.appendChild(badge);
  });
}

/* ========================================================
   第六部分：游戏主流程
   ======================================================== */

function startCase(caseIndex) {
  gameState.currentCaseIndex = caseIndex;
  gameState.currentSceneIndex = 0;
  gameState.collectedEvidence = [];

  showScreen('game-screen');
  renderCaseInfo();
  renderScene();
}

function renderCaseInfo() {
  const caseData = GAME_DATA.cases[gameState.currentCaseIndex];
  document.querySelector('.game-case-info .case-number').textContent = caseData.caseNumber;
  document.querySelector('.game-case-info .case-cause').textContent = caseData.cause;

  // 进度点
  const dotsContainer = document.getElementById('progress-dots');
  dotsContainer.innerHTML = '';
  caseData.scenes.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    if (i < gameState.currentSceneIndex) dot.classList.add('done');
    if (i === gameState.currentSceneIndex) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });
}

function renderScene() {
  const caseData = GAME_DATA.cases[gameState.currentCaseIndex];
  const scene = caseData.scenes[gameState.currentSceneIndex];
  const container = document.getElementById('scene-container');

  // 渲染SVG
  container.innerHTML = scene.svg();
  container.classList.add('scene-fade-in');
  setTimeout(() => container.classList.remove('scene-fade-in'), 500);

  // 清空旧热点
  const oldHotspots = container.querySelectorAll('.hotspot');
  oldHotspots.forEach(h => h.remove());

  // 渲染热点
  scene.hotspots.forEach((hotspot, idx) => {
    if (hotspot.action === 'trial') {
      // 庭审场景：自动触发
      setTimeout(() => triggerTrial(hotspot), 600);
      return;
    }

    if (hotspot.x === 0 && hotspot.w === 0) return;

    const el = document.createElement('div');
    el.className = 'hotspot';
    el.style.left = hotspot.x + '%';
    el.style.top = hotspot.y + '%';
    el.style.width = hotspot.w + '%';
    el.style.height = hotspot.h + '%';

    // 检查是否已收集
    if (hotspot.id && gameState.collectedEvidence.includes(hotspot.id)) {
      el.classList.add('collected');
    }

    el.innerHTML = `
      <div class="hotspot-pulse"></div>
      <div class="hotspot-tooltip">${hotspot.tooltip}</div>
    `;

    el.addEventListener('click', () => handleHotspotClick(hotspot));
    container.appendChild(el);
  });

  // 更新HUD
  renderEvidenceBar();
  updateHUDHint(scene);
  renderCaseInfo();
}

function updateHUDHint(scene) {
  const hint = document.getElementById('hud-hint');
  const totalEv = scene.hotspots.filter(h => h.action === 'evidence').length;
  if (totalEv > 0) {
    hint.textContent = `点击场景中发光的物品进行调查 · 本场景共${totalEv}项证据可收集`;
  } else if (scene.hotspots.some(h => h.action === 'dialogue')) {
    hint.textContent = '点击卷宗袋，查看案件详情';
  } else {
    hint.textContent = '庭审进行中...';
  }
}

function renderEvidenceBar() {
  const caseData = GAME_DATA.cases[gameState.currentCaseIndex];
  const slotsContainer = document.getElementById('evidence-slots');

  // 统计当前案件所有证据
  const allEvidence = [];
  caseData.scenes.forEach(scene => {
    scene.hotspots.forEach(h => {
      if (h.action === 'evidence') allEvidence.push(h);
    });
  });

  slotsContainer.innerHTML = '';
  allEvidence.forEach(ev => {
    const slot = document.createElement('div');
    slot.className = 'evidence-slot';
    if (gameState.collectedEvidence.includes(ev.id)) {
      slot.classList.add('filled');
      slot.innerHTML = `<span class="slot-icon">${ev.evidence.icon}</span>`;
      slot.title = ev.evidence.title;
      slot.addEventListener('click', () => showEvidencePopup(ev.evidence, true));
    }
    slotsContainer.appendChild(slot);
  });
}

/* ========================================================
   第七部分：热点交互处理
   ======================================================== */

function handleHotspotClick(hotspot) {
  // 已收集的证据不重复触发
  if (hotspot.id && gameState.collectedEvidence.includes(hotspot.id)) {
    return;
  }

  switch(hotspot.action) {
    case 'dialogue':
      showDialogue(hotspot.dialogue, () => {
        if (hotspot.afterScene === 'next') {
          nextScene();
        }
      });
      break;
    case 'evidence':
      showEvidencePopup(hotspot.evidence, false, () => {
        if (hotspot.id) {
          gameState.collectedEvidence.push(hotspot.id);
          renderEvidenceBar();
          renderScene(); // 刷新热点状态
        }
      });
      break;
    case 'hint':
      showHintToast(hotspot.hint);
      break;
  }
}

/* ========================================================
   第八部分：对话系统
   ======================================================== */

let dialogueQueue = [];
let dialogueCallback = null;
let dialogueIndex = 0;

function showDialogue(dialogues, callback) {
  dialogueQueue = dialogues;
  dialogueCallback = callback;
  dialogueIndex = 0;
  showNextDialogue();
}

function showNextDialogue() {
  if (dialogueIndex >= dialogueQueue.length) {
    document.getElementById('dialogue-overlay').classList.remove('show');
    if (dialogueCallback) dialogueCallback();
    return;
  }

  const d = dialogueQueue[dialogueIndex];
  document.getElementById('dialogue-avatar').textContent = d.avatar || '💬';
  document.getElementById('dialogue-name').innerHTML = `${d.speaker}<span class="role">${d.role || ''}</span>`;
  document.getElementById('dialogue-text').textContent = d.text;

  const overlay = document.getElementById('dialogue-overlay');
  if (!overlay.classList.contains('show')) {
    overlay.classList.add('show');
  }

  // 最后一条对话改按钮文字
  const nextBtn = document.getElementById('dialogue-next');
  if (dialogueIndex === dialogueQueue.length - 1) {
    nextBtn.textContent = '继续 ▸';
  } else {
    nextBtn.textContent = '继续 ▸';
  }

  dialogueIndex++;
}

/* ========================================================
   第九部分：证据卡片弹窗
   ======================================================== */

function showEvidencePopup(evidence, isReview, onCollect) {
  document.getElementById('evidence-card-icon').textContent = evidence.icon;
  document.getElementById('evidence-card-title').textContent = evidence.title;
  document.getElementById('evidence-card-desc').textContent = evidence.desc;

  const stamp = document.getElementById('evidence-stamp');
  const confirmBtn = document.getElementById('evidence-card-confirm');

  if (isReview) {
    // 查看已收集证据
    stamp.classList.add('show');
    confirmBtn.textContent = '关闭';
    confirmBtn.onclick = () => {
      document.getElementById('evidence-popup-overlay').classList.remove('show');
    };
  } else {
    // 新收集证据
    stamp.classList.remove('show');
    confirmBtn.textContent = '收入卷宗';
    confirmBtn.onclick = () => {
      // 盖章动画
      stamp.classList.add('show');
      playSound('stamp');
      setTimeout(() => {
        document.getElementById('evidence-popup-overlay').classList.remove('show');
        if (onCollect) onCollect();
        // 检查是否收集完当前场景所有证据
        checkSceneComplete();
      }, 800);
    };
  }

  document.getElementById('evidence-popup-overlay').classList.add('show');
}

/* ========================================================
   第十部分：提示Toast
   ======================================================== */

function showHintToast(text) {
  let toast = document.getElementById('hint-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'hint-toast';
    toast.style.cssText = `
      position: fixed; bottom: 140px; left: 50%; transform: translateX(-50%);
      background: rgba(45,27,15,0.95); color: #C9A961; padding: 14px 28px;
      border-radius: 6px; border: 1px solid rgba(201,169,97,0.3);
      font-size: 14px; z-index: 300; max-width: 500px; text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3); opacity: 0; transition: opacity 0.3s ease;
      pointer-events: none; letter-spacing: 1px; line-height: 1.6;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.style.opacity = '1';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 3000);
}

/* ========================================================
   第十一部分：场景完成检查与切换
   ======================================================== */

function checkSceneComplete() {
  const caseData = GAME_DATA.cases[gameState.currentCaseIndex];
  const scene = caseData.scenes[gameState.currentSceneIndex];
  const allEvidence = scene.hotspots.filter(h => h.action === 'evidence');
  const collected = allEvidence.filter(h => gameState.collectedEvidence.includes(h.id));

  if (allEvidence.length > 0 && collected.length === allEvidence.length) {
    // 当前场景所有证据已收集
    showHintToast('当前场景证据已全部收集，点击右下方按钮前往下一场景');

    // 添加"下一场景"按钮
    showNextSceneButton();
  }
}

function showNextSceneButton() {
  const container = document.getElementById('scene-container');
  // 避免重复添加
  if (container.querySelector('.next-scene-btn')) return;

  const btn = document.createElement('button');
  btn.className = 'next-scene-btn';
  btn.textContent = '前往下一场景 ▸';
  btn.style.cssText = `
    position: absolute; bottom: 20px; right: 20px;
    padding: 12px 28px; font-size: 14px; font-weight: 500;
    color: #3D2817; background: linear-gradient(135deg, #D4AF37, #C9A961);
    border-radius: 4px; cursor: pointer; z-index: 50;
    letter-spacing: 2px; box-shadow: 0 4px 15px rgba(201,169,97,0.4);
    transition: all 0.3s ease; border: none;
    animation: fadeInUp 0.4s ease;
  `;
  btn.addEventListener('click', () => {
    btn.remove();
    nextScene();
  });
  container.appendChild(btn);
}

function nextScene() {
  const caseData = GAME_DATA.cases[gameState.currentCaseIndex];
  if (gameState.currentSceneIndex < caseData.scenes.length - 1) {
    gameState.currentSceneIndex++;
    renderScene();
  }
}

/* ========================================================
   第十二部分：庭审系统
   ======================================================== */

function triggerTrial(hotspot) {
  // 先显示对话
  showDialogue(hotspot.dialogue, () => {
    showTrialOptions(hotspot.trial);
  });
}

function showTrialOptions(trial) {
  document.getElementById('trial-question').textContent = trial.question;

  // 法官信息
  document.getElementById('trial-judge').innerHTML = `
    <div class="trial-judge-avatar">⚖️</div>
    <div>
      <div class="trial-judge-name">李建国<span class="role"> 审判员</span></div>
    </div>
  `;

  const optionsContainer = document.getElementById('trial-options');
  optionsContainer.innerHTML = '';

  trial.options.forEach(opt => {
    const btn = document.createElement('div');
    btn.className = 'trial-option';
    btn.innerHTML = `
      <div class="option-label">${opt.label}</div>
      <div>${opt.text}</div>
    `;
    btn.addEventListener('click', () => {
      // 移除所有option的点击
      optionsContainer.querySelectorAll('.trial-option').forEach(o => o.style.pointerEvents = 'none');

      if (opt.correct) {
        btn.classList.add('correct');
        document.getElementById('trial-hint').textContent = '✓ 审理参考意见正确，请等待法官宣判';
        playSound('gavel');
        setTimeout(() => {
          document.getElementById('trial-overlay').classList.remove('show');
          showVerdict();
        }, 2000);
      } else {
        btn.classList.add('wrong');
        document.getElementById('trial-hint').textContent = opt.hint || '再仔细查看证据';
        // 3秒后恢复可点击
        setTimeout(() => {
          optionsContainer.querySelectorAll('.trial-option').forEach(o => {
            if (!o.classList.contains('wrong')) o.style.pointerEvents = 'auto';
          });
        }, 1500);
      }
    });
    optionsContainer.appendChild(btn);
  });

  document.getElementById('trial-hint').textContent = '';
  document.getElementById('trial-overlay').classList.add('show');
}

/* ========================================================
   第十三部分：宣判系统
   ======================================================== */

function showVerdict() {
  const caseData = GAME_DATA.cases[gameState.currentCaseIndex];
  const v = caseData.verdict;

  document.getElementById('verdict-case').textContent = v.caseInfo;
  document.getElementById('verdict-content').innerHTML = v.content.replace(/\n/g, '<br>');
  document.getElementById('verdict-law').innerHTML = v.law;

  document.getElementById('verdict-overlay').classList.add('show');
}

/* ========================================================
   第十四部分：法律知识点复盘 & 徽章
   ======================================================== */

function showKnowledge() {
  const caseData = GAME_DATA.cases[gameState.currentCaseIndex];

  const content = document.getElementById('knowledge-content');
  content.innerHTML = '';
  caseData.knowledge.forEach(item => {
    const div = document.createElement('div');
    div.className = 'knowledge-item';
    div.innerHTML = `
      <div class="knowledge-item-title">${item.title}</div>
      <div class="knowledge-item-text">${item.text}</div>
    `;
    content.appendChild(div);
  });

  // 徽章
  document.getElementById('badge-display').textContent = caseData.badge.icon;
  document.getElementById('badge-text').textContent = '获得徽章：' + caseData.badge.name;

  // 记录完成
  if (!gameState.completedCases.includes(caseData.id)) {
    gameState.completedCases.push(caseData.id);
  }
  if (!gameState.unlockedBadges.includes(caseData.id)) {
    gameState.unlockedBadges.push(caseData.id);
  }
  saveProgress();
  playSound('badge');

  document.getElementById('knowledge-overlay').classList.add('show');
}

/* ========================================================
   第十五部分：音频系统集成
   使用 audioManager (js/audio.js)
   ======================================================== */
  
  // 兼容层：让原有的playSound调用继续使用
  function playSound(type) {
    if (!audioManager.initialized) return;
    
    switch(type) {
      case 'stamp':
        audioManager.playStampSound();
        break;
      case 'gavel':
        audioManager.playGavelSound();
        break;
      case 'badge':
        audioManager.playBadgeSound();
        break;
      case 'click':
        audioManager.playClickSound();
        break;
      default:
        audioManager.playClickSound();
    }
  }

/* ========================================================
   第十六部分：事件绑定与初始化
   ======================================================== */

function init() {
  loadProgress();

  // 加载页 → 开始页
  setTimeout(() => {
    showScreen('start-screen');
  }, 1500);

  // 音频控制按钮
  document.getElementById('btn-audio-toggle').addEventListener('click', () => {
    if (!audioManager.initialized) {
      audioManager.init();
    }
    const isMuted = audioManager.toggleMute();
    const btn = document.getElementById('btn-audio-toggle');
    btn.classList.toggle('muted', isMuted);
    btn.querySelector('.audio-icon-on').style.display = isMuted ? 'none' : 'block';
    btn.querySelector('.audio-icon-off').style.display = isMuted ? 'block' : 'none';
  });

  // 开始游戏
  document.getElementById('btn-start-game').addEventListener('click', () => {
    // 初始化音频（需要用户交互）
    if (!audioManager.initialized) {
      audioManager.init();
    }
    audioManager.playClickSound();
    audioManager.startBGM();
    
    renderMapScreen();
    showScreen('map-screen');
  });

  // 返回目录
  document.getElementById('btn-back-to-map').addEventListener('click', () => {
    audioManager.playClickSound();
    renderMapScreen();
    showScreen('map-screen');
  });

  // 重置进度
  document.getElementById('btn-reset-progress').addEventListener('click', () => {
    if (confirm('确定要重置所有游戏进度吗？已获得的徽章将被清除。')) {
      gameState.completedCases = [];
      gameState.unlockedBadges = [];
      saveProgress();
      renderMapScreen();
    }
  });

  // 对话继续
  document.getElementById('dialogue-next').addEventListener('click', () => {
    playSound('click');
    showNextDialogue();
  });

  // 证据卡片关闭
  document.getElementById('evidence-card-close').addEventListener('click', () => {
    document.getElementById('evidence-popup-overlay').classList.remove('show');
  });

  // 宣判 → 知识点
  document.getElementById('verdict-next').addEventListener('click', () => {
    playSound('click');
    document.getElementById('verdict-overlay').classList.remove('show');
    showKnowledge();
  });

  // 知识点 → 返回目录
  document.getElementById('knowledge-finish').addEventListener('click', () => {
    playSound('click');
    document.getElementById('knowledge-overlay').classList.remove('show');
    renderMapScreen();
    showScreen('map-screen');
  });

  // 点击遮罩关闭弹窗（部分）
  document.getElementById('evidence-popup-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'evidence-popup-overlay') {
      e.target.classList.remove('show');
    }
  });
}

// 启动
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
