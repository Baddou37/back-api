const express = require('express');
const app = express();
const { exec } = require('child_process');
const mime = require('mime-types');
const fs = require('fs');

const mimeMap = {
  'png': 'image/png',
  'jpg': 'image/jpeg',
  'jpeg': 'image/jpeg',
  'gif': 'image/gif',
  'tiff': 'image/tiff',
  'tif': 'image/tiff',
  'bmp': 'image/bmp',
  'heic': 'image/heic',
  'heif': 'image/heif',
  'dcm': 'image/dcm'
}

// get the list of files in the data folder
const files = fs.readdirSync('data');
console.log('before', files);
// Ignore DS_Store & Desktop.ini if it exists in the folder using a loop
for (let i = 0; i < files.length; i++) {
  if (files[i] === '.DS_Store' || files[i] === 'desktop.ini') {
    files.splice(i, 1);
    i--;
  }
}
console.log('after', files);

const convertDicom = () => {
  exec('python3 -c "import pydicom; import matplotlib.pyplot as plt; dcm = pydicom.dcmread(\'data/img.dcm\'); image = dcm.pixel_array; plt.imsave(\'convert/testDICOM.jpg\', image, cmap=plt.cm.bone)"', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur d'exécution du script : ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
};
convertDicom();

const convertHeif = () => {
  exec('python3 -c "from PIL import Image; from pillow_heif import register_heif_opener; register_heif_opener(); im = Image.open(\'data/img.heic\'); im.convert(\'RGB\').save(\'convert/testHEIC.jpg\', \'JPEG\')"', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur d'exécution du script : ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
};
convertHeif();

const convertTiff = () => {
  exec('python3 -c "from PIL import Image; im = Image.open(\'data/img.tiff\'); im.convert(\'RGB\').save(\'convert/testTIFF.jpg\', \'JPEG\')"', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur d'exécution du script : ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
};
convertTiff();

// Give an acces for server.js
module.exports = app;

