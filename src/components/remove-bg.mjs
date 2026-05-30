import sharp from 'sharp';

sharp('src/assets/ats-logo.webp')
  .png()
  .toFile('src/assets/logo-clean.png', (err, info) => {
    if (err) console.error(err);
    else console.log('Done!', info);
  });