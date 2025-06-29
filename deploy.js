const fs = require('fs');
const path = require('path');

// Netlify Drop URL'si
const NETLIFY_DROP_URL = 'https://app.netlify.com/drop';

console.log('🚀 İnşaat Pazar Yeri - Yayınlama Başlıyor...');
console.log('');
console.log('📁 Build dosyaları hazır:');
console.log('   - index.html');
console.log('   - assets/index-9ea07c30.js');
console.log('   - assets/index-dc23f7b3.css');
console.log('');
console.log('🌐 Netlify Drop ile yayınlama:');
console.log(`   ${NETLIFY_DROP_URL}`);
console.log('');
console.log('📋 Yapılacaklar:');
console.log('   1. Yukarıdaki linke tıklayın');
console.log('   2. dist klasörünü sürükleyip bırakın');
console.log('   3. Birkaç saniye bekleyin');
console.log('   4. Siteniz yayınlanacak!');
console.log('');
console.log('📂 dist klasörü konumu:');
console.log(`   ${path.resolve('./dist')}`);
console.log('');
console.log('✅ Yayınlama tamamlandığında size URL verilecek.');
console.log('🎉 Siteniz canlıda olacak!'); 