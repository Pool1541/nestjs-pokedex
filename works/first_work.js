const fs = require('fs');

// Objeto JSON
const data = {
  message: 'Hola mundo desde Github Actions',
};

// Convertir el objeto JSON a una cadena
const jsonData = JSON.stringify(data);

// Nombre del archivo JSON
const filename = './works/message.json';

// Escribir el archivo JSON
fs.writeFile(filename, jsonData, 'utf8', (err) => {
  if (err) {
    console.error('Error al escribir el archivo JSON:', err);
    return;
  }
  console.log(`El archivo JSON '${filename}' ha sido creado con éxito.`);
});
