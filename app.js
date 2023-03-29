const express = require('express');
const app = express();
const { exec } = require('child_process');
const mime = require('mime-types');
const fs = require('fs');

// DICOM to JPEG
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

// HEIC to JPEG
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

// TIFF to JPEG
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

// get the list of files in the data folder
const files = fs.readdirSync('data');
// Ignore DS_Store & Desktop.ini if it exists in the folder using a loop
for (let i = 0; i < files.length; i++) {
  if (files[i] === '.DS_Store' || files[i] === 'desktop.ini') {
    files.splice(i, 1);
    i--;
  }
}

files.forEach(file => {
  const extension = getExtension(file);
  switch (extension) {
    case 'dcm':
      convertDicom();
      break;
    case 'heic':
      convertHeif();
      break;
    case 'tiff':
      convertTiff();
      break;
  }
});

function getExtension(filename) {
  const i = filename.lastIndexOf('.');
  return (i < 0) ? '' : filename.substr(i+1);
}

// Give an acces for server.js
module.exports = app;