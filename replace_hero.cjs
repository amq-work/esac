const fs = require('fs');
const oldHero = fs.readFileSync('C:\\Projects\\ESAC-Website\\old_hero.txt', 'utf8');
const homePage = fs.readFileSync('C:\\Projects\\ESAC-Website\\src\\pages\\HomePage.jsx', 'utf8');

const startStr = '      {/* ══════════════════════════════════════════════════════\n          01 · 3D ARCHITECTURAL HERO (Inspired by ZROBIM / TERRA)';
const endStr = '      </section>';

const startIdx = homePage.indexOf(startStr);
const endIdx = homePage.indexOf(endStr, startIdx) + endStr.length;

if (startIdx !== -1 && endIdx !== -1) {
  const newHomePage = homePage.substring(0, startIdx) + oldHero + homePage.substring(endIdx);
  fs.writeFileSync('C:\\Projects\\ESAC-Website\\src\\pages\\HomePage.jsx', newHomePage);
  console.log('Successfully replaced');
} else {
  console.log('Could not find start or end index');
}
