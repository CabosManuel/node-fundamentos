import sharp from 'sharp';

// Para trabajar con imágenes
sharp('img.png')
  .resize(64)
  .grayscale()
  .toFile('resize-img.png');