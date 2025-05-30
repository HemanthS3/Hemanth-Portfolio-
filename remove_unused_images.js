const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');
const unusedImages = [
  'C.png',
  'Calci.png',
  'CPP.png',
  'download.png',
  'farmgenie.jpg',
  'gpt4.jpg',
  'grid.svg',
  'IIIT_Kota.png',
  'React.png',
  'react.svg',
  'Rocket.jpg',
  'Stone.jpg',
  'Teen_Ban_Nishan.png',
  'Vue.png',
  'well-being.jpg'
];

let removedCount = 0;

unusedImages.forEach(image => {
  const imagePath = path.join(assetsDir, image);
  try {
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
      console.log(`Removed: ${image}`);
      removedCount++;
    }
  } catch (err) {
    console.error(`Error removing ${image}: ${err.message}`);
  }
});

console.log(`Successfully removed ${removedCount} unused images.`);