import React from 'react';

interface LanguageLogoProps {
  id: string;
  className?: string;
  size?: number;
}

export const LanguageLogo: React.FC<LanguageLogoProps> = ({ id, className = '', size = 52 }) => {
  const normId = id.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normId) {
    // 1. HTML5 - Official W3C Orange Shield
    case 'html':
    case 'html5':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" fill="none" className={className}>
          <path d="M71 460L32 0h448l-39 460-185 52z" fill="#E44D26"/>
          <path d="M256 472l149-41 33-391H256v432z" fill="#F16529"/>
          <path d="M256 176h-66l-5-52h71V73H130l13 155h113v-52zm0 147l-1 1-59-16-4-45h-52l8 94 108 30v-64z" fill="#EBEBEB"/>
          <path d="M256 176v-52h71l-7-51h-64V21h126l-13 155H256zm0 148v64l59-16 8-89h-52l-4 41h-11z" fill="#FFFFFF"/>
        </svg>
      );

    // 2. CSS3 - Official W3C Blue Shield
    case 'css':
    case 'css3':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" fill="none" className={className}>
          <path d="M71 460L32 0h448l-39 460-185 52z" fill="#1572B6"/>
          <path d="M256 472l149-41 33-391H256v432z" fill="#33A9DC"/>
          <path d="M256 176h-66l-5-52h71V73H130l13 155h113v-52zm0 147l-1 1-59-16-4-45h-52l8 94 108 30v-64z" fill="#EBEBEB"/>
          <path d="M256 73v51h64l-7 74H256v52h59l-8 89-51 14v53l93-26 13-149 2-26 5-58H256z" fill="#FFFFFF"/>
        </svg>
      );

    // 3. JavaScript - Official Yellow Square JS
    case 'js':
    case 'javascript':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="64" fill="#F7DF1E"/>
          <path d="M128 390c0 42 25 66 62 66 38 0 60-22 60-60V226h-42v160c0 16-8 26-22 26-12 0-19-7-22-18l-36 6zm176-3c12 20 30 33 58 33 24 0 39-12 39-29 0-20-16-27-44-39-40-17-66-35-66-74 0-37 28-64 71-64 31 0 53 11 68 37l-32 21c-9-15-20-22-36-22-16 0-26 10-26 23 0 16 11 22 38 34 44 19 72 37 72 79 0 45-35 69-82 69-41 0-70-19-83-47l43-27z" fill="#000000"/>
        </svg>
      );

    // 4. SQL - Classic Database Cylinder Stack
    case 'sql':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" fill="none" className={className}>
          <ellipse cx="256" cy="110" rx="190" ry="60" fill="#0284C7"/>
          <ellipse cx="256" cy="100" rx="170" ry="50" fill="#38BDF8"/>
          <path d="M66 110v110c0 33 85 60 190 60s190-27 190-60V110c0 33-85 60-190 60S66 143 66 110z" fill="#0284C7"/>
          <path d="M66 220v110c0 33 85 60 190 60s190-27 190-60V220c0 33-85 60-190 60S66 253 66 220z" fill="#0369A1"/>
          <path d="M66 330v90c0 33 85 60 190 60s190-27 190-60v-90c0 33-85 60-190 60S66 363 66 330z" fill="#0C4A6E"/>
        </svg>
      );

    // 5. Python - Official Dual Blue & Yellow Snakes
    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <path d="M254 32c-67 0-120 18-120 68v49h123v18H86c-48 0-86 34-86 86 0 50 37 84 86 84h30v-42c0-51 43-85 94-85h80v-49c0-47-49-69-122-69zm-46 36c13 0 24 11 24 24s-11 24-24 24-24-11-24-24 11-24 24-24z" fill="#387EB8"/>
          <path d="M258 480c67 0 120-18 120-68v-49H255v-18h171c48 0 86-34 86-86 0-50-37-84-86-84h-30v42c0 51-43 85-94 85h-80v49c0 47 49 69 122 69zm46-36c-13 0-24-11-24-24s11-24 24-24 24 11 24 24-11 24-24 24z" fill="#FFE052"/>
        </svg>
      );

    // 6. Java - Official Steaming Coffee Cup
    case 'java':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <path d="M224 40c-15 30 20 60 20 90 0 35-30 55-40 80 20-25 35-45 35-75 0-35-25-60-15-95z" fill="#E76F00"/>
          <path d="M280 20c-20 40 25 75 25 115 0 45-40 70-50 100 25-30 45-60 45-95 0-45-30-75-20-120z" fill="#E76F00"/>
          <path d="M120 270c0 90 60 140 160 140 85 0 135-40 145-105h-305zm245-10c-5 35-30 65-85 65-50 0-85-30-90-65h175z" fill="#5382A1"/>
          <path d="M420 280c25 5 50 20 50 50 0 35-35 55-70 55v-25c20 0 45-10 45-30 0-15-15-25-30-25l5-25z" fill="#5382A1"/>
          <ellipse cx="270" cy="450" rx="170" ry="25" fill="#5382A1"/>
        </svg>
      );

    // 7. C - Bold Blue/Gray C Emblem
    case 'c':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <polygon points="256,32 448,142 448,370 256,480 64,370 64,142" fill="#00599C" opacity="0.12"/>
          <path d="M370 165c-28-28-66-45-114-45-88 0-150 63-150 136s62 136 150 136c48 0 86-17 114-45l-40-40c-20 18-44 28-74 28-56 0-92-38-92-79s36-79 92-79c30 0 54 10 74 28l40-40z" fill="#00599C"/>
        </svg>
      );

    // 8. C++ - Official Blue Hexagon C++
    case 'cpp':
    case 'cplusplus':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <polygon points="256,24 456,140 456,372 256,488 56,372 56,140" fill="#00599C"/>
          <polygon points="256,54 430,154 430,358 256,458 82,358 82,154" fill="#004482"/>
          <path d="M256 160c-55 0-96 40-96 96s41 96 96 96c32 0 60-14 76-36l-32-24c-11 15-26 22-44 22-33 0-56-24-56-58s23-58 56-58c18 0 33 7 44 22l32-24c-16-22-44-36-76-36z" fill="#FFFFFF"/>
          <path d="M346 244h18v-18h14v18h18v14h-18v18h-14v-18h-18v-14zm60 0h18v-18h14v18h18v14h-18v18h-14v-18h-18v-14z" fill="#00599C" stroke="#FFFFFF" strokeWidth="4"/>
        </svg>
      );

    // 9. C# - Official Purple Hexagon C#
    case 'csharp':
    case 'cs':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <polygon points="256,24 456,140 456,372 256,488 56,372 56,140" fill="#9B4993"/>
          <polygon points="256,54 430,154 430,358 256,458 82,358 82,154" fill="#68217A"/>
          <path d="M236 165c-50 0-90 40-90 91s40 91 90 91c32 0 58-14 74-34l-28-22c-11 14-26 20-46 20-30 0-52-23-52-55s22-55 52-55c20 0 35 6 46 20l28-22c-16-20-42-34-74-34z" fill="#FFFFFF"/>
          <path d="M346 210h12l-6 26h22l6-26h12l-6 26h16v12h-18l-5 24h18v12h-21l-7 28h-12l7-28h-22l-7 28h-12l7-28h-18v-12h21l5-24h-18v-12h20l6-26zm25 38l-5 24h22l5-24h-22z" fill="#FFFFFF"/>
        </svg>
      );

    // 10. React - Cyan Atom Logo
    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" fill="none" className={className}>
          <ellipse cx="256" cy="256" rx="200" ry="76" stroke="#61DAFB" strokeWidth="22" transform="rotate(0 256 256)"/>
          <ellipse cx="256" cy="256" rx="200" ry="76" stroke="#61DAFB" strokeWidth="22" transform="rotate(60 256 256)"/>
          <ellipse cx="256" cy="256" rx="200" ry="76" stroke="#61DAFB" strokeWidth="22" transform="rotate(120 256 256)"/>
          <circle cx="256" cy="256" r="34" fill="#61DAFB"/>
        </svg>
      );

    // 11. MySQL - Dolphin Emblem
    case 'mysql':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="90" fill="#00758F"/>
          <path d="M120 330c30-50 90-120 180-130 50-6 100 15 120 50-40-20-90-25-130-10-60 20-100 65-170 90zm230-190c-20 0-40 10-50 25 25 5 45 20 55 40 15-25 15-50-5-65zm-160 50c-25 0-50 15-60 40 30-5 60 5 80 25 0-35-10-65-20-65z" fill="#F29111"/>
          <text x="256" y="440" fontSize="110" fontWeight="900" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif">MySQL</text>
        </svg>
      );

    // 12. Node.js - Green Hexagon
    case 'nodejs':
    case 'node':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <polygon points="256,24 456,140 456,372 256,488 56,372 56,140" fill="#5FA04E"/>
          <path d="M256 120l110 64v128l-110 64-110-64V184l110-64zm0 40l-75 44v88l75 44 75-44v-88l-75-44z" fill="#333333"/>
          <path d="M225 190h30v70l60-70h35l-65 72 70 88h-38l-52-68-10 12v56h-30V190z" fill="#FFFFFF"/>
        </svg>
      );

    // 13. PHP - Purple Oval
    case 'php':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <ellipse cx="256" cy="256" rx="230" ry="140" fill="#777BB4"/>
          <ellipse cx="256" cy="256" rx="210" ry="120" fill="#8892BF"/>
          <text x="256" y="300" fontSize="170" fontWeight="900" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace">php</text>
        </svg>
      );

    // 14. TypeScript - Blue Square TS
    case 'typescript':
    case 'ts':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="64" fill="#3178C6"/>
          <path d="M120 200h150v42h-52v190h-46V242h-52v-42zm170 145c16 28 44 45 84 45 32 0 54-15 54-38 0-25-22-35-60-50-52-22-86-45-86-94 0-46 38-80 96-80 42 0 72 16 92 50l-38 27c-13-20-28-30-52-30-22 0-38 12-38 29 0 20 16 28 54 44 58 24 94 48 94 100 0 54-44 87-112 87-54 0-94-24-112-62l40-28z" fill="#FFFFFF"/>
        </svg>
      );

    // 15. Angular - Red Shield
    case 'angular':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <polygon points="256,32 456,102 425,380 256,480 87,380 56,102" fill="#DD0031"/>
          <polygon points="256,32 256,480 425,380 456,102" fill="#C3002F"/>
          <path d="M256 90l105 240h-42l-21-52h-84l-21 52h-42L256 90zm32 152l-32-78-32 78h64z" fill="#FFFFFF"/>
        </svg>
      );

    // 16. AngularJS - Classic Red Shield
    case 'angularjs':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <polygon points="256,32 456,102 425,380 256,480 87,380 56,102" fill="#E23237"/>
          <path d="M256 90l105 240h-42l-21-52h-84l-21 52h-42L256 90zm32 152l-32-78-32 78h64z" fill="#FFFFFF"/>
          <text x="256" y="440" fontSize="56" fontWeight="bold" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif">JS</text>
        </svg>
      );

    // 17. Git - Orange Diamond with Branches
    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <g transform="rotate(45 256 256)">
            <rect x="76" y="76" width="360" height="360" rx="60" fill="#F05032"/>
            <circle cx="210" cy="210" r="32" fill="#FFFFFF"/>
            <circle cx="350" cy="210" r="32" fill="#FFFFFF"/>
            <circle cx="210" cy="350" r="32" fill="#FFFFFF"/>
            <line x1="210" y1="210" x2="210" y2="350" stroke="#FFFFFF" strokeWidth="22"/>
            <path d="M210 280c40 0 70-10 100-40l40-30" stroke="#FFFFFF" strokeWidth="22" fill="none"/>
          </g>
        </svg>
      );

    // 18. PostgreSQL - Blue Elephant
    case 'postgresql':
    case 'postgres':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="90" fill="#336791"/>
          <path d="M256 120c-70 0-110 45-120 110-10 65 20 130 90 140v-40c-35-5-55-40-50-80 5-45 35-70 80-70s75 25 80 70c5 40-15 75-50 80v40c70-10 100-75 90-140-10-65-50-110-120-110z" fill="#FFFFFF"/>
          <circle cx="210" cy="200" r="14" fill="#336791"/>
          <circle cx="302" cy="200" r="14" fill="#336791"/>
        </svg>
      );

    // 19. MongoDB - Green Leaf
    case 'mongodb':
    case 'mongo':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <path d="M256 24C240 60 140 180 140 300c0 80 50 140 116 188 66-48 116-108 116-188 0-120-100-240-116-276z" fill="#47A248"/>
          <path d="M256 24v464c66-48 116-108 116-188 0-120-100-240-116-276z" fill="#499D4A"/>
          <path d="M256 120v300c-30-20-45-50-45-80 0-60 45-150 45-220z" fill="#FFFFFF" opacity="0.3"/>
        </svg>
      );

    // 20. R - Blue R in Oval
    case 'r':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <ellipse cx="230" cy="256" rx="190" ry="140" fill="#CBDBE6" stroke="#8DA8BF" strokeWidth="20"/>
          <path d="M230 160h60c40 0 70 20 70 55 0 30-20 50-50 55l65 85h-45l-55-75h-25v75h-40V160zm40 85h25c20 0 35-10 35-25s-15-25-35-25h-25v50z" fill="#276DC3"/>
        </svg>
      );

    // 21. Go - Cyan Gopher Wordmark
    case 'go':
    case 'golang':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="90" fill="#00ADD8"/>
          <text x="180" y="320" fontSize="210" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">G</text>
          <text x="340" y="320" fontSize="210" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">O</text>
        </svg>
      );

    // 22. Kotlin - Colorful Gradient Triangle
    case 'kotlin':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <defs>
            <linearGradient id="kg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C757BC"/>
              <stop offset="50%" stopColor="#7F52FF"/>
              <stop offset="100%" stopColor="#00AFFF"/>
            </linearGradient>
          </defs>
          <polygon points="56,456 456,56 56,56" fill="url(#kg1)"/>
          <polygon points="256,256 456,456 56,456" fill="#7F52FF"/>
        </svg>
      );

    // 23. Rust - Gear Wheel with R
    case 'rust':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <circle cx="256" cy="256" r="210" fill="#241C1A"/>
          <circle cx="256" cy="256" r="160" fill="#000000"/>
          <circle cx="256" cy="256" r="130" fill="#A72115"/>
          <path d="M210 180h55c35 0 60 15 60 45 0 25-15 40-40 45l45 65h-35l-40-55h-20v55h-30V180zm30 65h25c15 0 25-8 25-20s-10-20-25-20h-25v40z" fill="#FFFFFF"/>
        </svg>
      );

    // 24. Swift - Orange Square with Bird
    case 'swift':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="90" fill="#F05138"/>
          <path d="M120 120c80 80 180 140 280 160-50-10-90-40-120-80 80 40 160 50 200 40-40 60-100 110-180 140 90-20 160-80 190-150-70 100-180 170-300 170-40 0-80-10-110-30 80-40 140-100 180-170-60 30-130 30-180 0 70-30 110-80 140-140-30 10-60 10-90 0 70-30 110-70 130-130-40 20-80 20-110 0z" fill="#FFFFFF"/>
        </svg>
      );

    // 25. AWS - Amazon Cloud & Smile Arrow
    case 'aws':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="90" fill="#232F3E"/>
          <text x="256" y="270" fontSize="130" fontWeight="900" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">aws</text>
          <path d="M140 330c60 40 170 40 230 0" stroke="#FF9900" strokeWidth="26" strokeLinecap="round" fill="none"/>
          <polygon points="380,315 365,345 395,335" fill="#FF9900"/>
        </svg>
      );

    // 26. Django - Dark Green Box with dj
    case 'django':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="90" fill="#092E20"/>
          <text x="256" y="325" fontSize="180" fontWeight="900" fill="#44B78B" textAnchor="middle" fontFamily="monospace">dj</text>
        </svg>
      );

    // 27. jQuery - Blue Emblem
    case 'jquery':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="90" fill="#0769AD"/>
          <path d="M140 240c20-60 70-100 130-100 50 0 95 30 115 75-20-20-45-30-75-30-50 0-90 35-105 80l-65-25zm140 140c-50 0-95-30-115-75 20 20 45 30 75 30 50 0 90-35 105-80l65 25c-20 60-70 100-130 100z" fill="#FFFFFF"/>
        </svg>
      );

    // 28. Excel - Green Folded Spreadsheet with X
    case 'excel':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect x="140" y="60" width="300" height="390" rx="20" fill="#107C41"/>
          <rect x="170" y="100" width="240" height="310" fill="#FFFFFF" opacity="0.15"/>
          <line x1="170" y1="180" x2="410" y2="180" stroke="#FFFFFF" strokeWidth="12" opacity="0.5"/>
          <line x1="170" y1="260" x2="410" y2="260" stroke="#FFFFFF" strokeWidth="12" opacity="0.5"/>
          <line x1="170" y1="340" x2="410" y2="340" stroke="#FFFFFF" strokeWidth="12" opacity="0.5"/>
          <line x1="290" y1="100" x2="290" y2="410" stroke="#FFFFFF" strokeWidth="12" opacity="0.5"/>
          <rect x="70" y="150" width="160" height="210" rx="16" fill="#185ABD" style={{ fill: '#107C41' }}/>
          <text x="150" y="300" fontSize="130" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">X</text>
        </svg>
      );

    // 29. NumPy - Blue Cube Grid
    case 'numpy':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="90" fill="#013243"/>
          <polygon points="256,90 416,180 256,270 96,180" fill="#4DABCF"/>
          <polygon points="96,180 256,270 256,420 96,330" fill="#013243" stroke="#4DABCF" strokeWidth="8"/>
          <polygon points="416,180 256,270 256,420 416,330" fill="#2C799A"/>
          <text x="256" y="475" fontSize="56" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">NumPy</text>
        </svg>
      );

    // 30. Pandas - Vertical Data Bars
    case 'pandas':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="90" fill="#130754"/>
          <rect x="150" y="130" width="45" height="250" rx="10" fill="#FFD43B"/>
          <rect x="233" y="210" width="45" height="170" rx="10" fill="#E70488"/>
          <rect x="316" y="170" width="45" height="210" rx="10" fill="#00A2E8"/>
          <circle cx="172" cy="90" r="18" fill="#FFD43B"/>
          <circle cx="255" cy="170" r="18" fill="#E70488"/>
          <circle cx="338" cy="130" r="18" fill="#00A2E8"/>
        </svg>
      );

    // 31. DSA - Binary Tree Network Graph
    case 'dsa':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="90" fill="#312E81"/>
          {/* Edges */}
          <line x1="256" y1="130" x2="160" y2="250" stroke="#818CF8" strokeWidth="18"/>
          <line x1="256" y1="130" x2="352" y2="250" stroke="#818CF8" strokeWidth="18"/>
          <line x1="160" y1="250" x2="110" y2="380" stroke="#818CF8" strokeWidth="18"/>
          <line x1="160" y1="250" x2="210" y2="380" stroke="#818CF8" strokeWidth="18"/>
          <line x1="352" y1="250" x2="400" y2="380" stroke="#818CF8" strokeWidth="18"/>
          {/* Nodes */}
          <circle cx="256" cy="130" r="44" fill="#4F46E5" stroke="#FFFFFF" strokeWidth="10"/>
          <circle cx="160" cy="250" r="38" fill="#4F46E5" stroke="#FFFFFF" strokeWidth="10"/>
          <circle cx="352" cy="250" r="38" fill="#4F46E5" stroke="#FFFFFF" strokeWidth="10"/>
          <circle cx="110" cy="380" r="32" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="8"/>
          <circle cx="210" cy="380" r="32" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="8"/>
          <circle cx="400" cy="380" r="32" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="8"/>
        </svg>
      );

    // 32. Data Science - Chart Analytics & Scatter
    case 'datascience':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="90" fill="#0F172A"/>
          {/* Axes */}
          <line x1="100" y1="390" x2="420" y2="390" stroke="#475569" strokeWidth="14" strokeLinecap="round"/>
          <line x1="100" y1="120" x2="100" y2="390" stroke="#475569" strokeWidth="14" strokeLinecap="round"/>
          {/* Trend Line */}
          <path d="M120 340 Q220 320 280 220 T400 130" stroke="#6366F1" strokeWidth="20" fill="none" strokeLinecap="round"/>
          {/* Scatter Points */}
          <circle cx="150" cy="310" r="16" fill="#38BDF8"/>
          <circle cx="210" cy="260" r="16" fill="#F43F5E"/>
          <circle cx="270" cy="240" r="16" fill="#FBBF24"/>
          <circle cx="320" cy="170" r="16" fill="#38BDF8"/>
          <circle cx="370" cy="150" r="16" fill="#10B981"/>
        </svg>
      );

    // 33. Cyber Security - Shield & Padlock
    case 'cybersecurity':
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <path d="M256 42L82 105v138c0 126 74 218 174 247 100-29 174-121 174-247V105L256 42z" fill="#0284C7"/>
          <path d="M256 72L112 124v119c0 108 62 188 144 215V72z" fill="#0369A1"/>
          {/* Padlock */}
          <rect x="206" y="240" width="100" height="90" rx="18" fill="#FBBF24"/>
          <path d="M226 240v-35c0-18 13-30 30-30s30 12 30 30v35" stroke="#FFFFFF" strokeWidth="18" fill="none" strokeLinecap="round"/>
          <circle cx="256" cy="280" r="10" fill="#78350F"/>
          <line x1="256" y1="285" x2="256" y2="305" stroke="#78350F" strokeWidth="8" strokeLinecap="round"/>
        </svg>
      );

    // Default Fallback
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" rx="90" fill="#4F46E5"/>
          <text x="256" y="320" fontSize="180" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">&lt;/&gt;</text>
        </svg>
      );
  }
};
