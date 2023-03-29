const express = require('express');
const app = express();
const { exec } = require('child_process');


// DICOM to JPEG
app.get('/convert-dicom', (req, res) => {
  exec('python3 dicom.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur d'exécution du script : ${error}`);
      res.status(500).send(`Erreur d'exécution du script : ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.send('Les fichiers DICOM ont été convertis avec succès.');
  });
});

// HEIF to JPEG
app.get('/convert-heif', (req, res) => {
  exec('python3 heif.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur d'exécution du script : ${error}`);
      res.status(500).send(`Erreur d'exécution du script : ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.send('Les fichiers HEIF ont été convertis avec succès.');
  });
});

// TIFF to JPEG
app.get('/convert-tiff', (req, res) => {
  exec('python3 tiff.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur d'exécution du script : ${error}`);
      res.status(500).send(`Erreur d'exécution du script : ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.send('Les fichiers TIFF ont été convertis avec succès.');
  });
});



// Give an acces for server.js
module.exports = app;

