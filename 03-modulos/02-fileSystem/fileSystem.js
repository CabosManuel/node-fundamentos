const filesystem = require('fs');

function writeFile(path, content, callback) {
  filesystem.writeFile(path, content, (error) => {
    if (error) {
      console.log('Error writing file: ' + error);
    } else {
      console.log('Successfully wrote file: ' + path);
    }
  });
}

function readFile(path, callback) {
  filesystem.readFile(path, (error, data) => {
    console.log(data.toString());
  });
}

function deleteFile(path, callback) {
  filesystem.unlink(path, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.info('File deleted successfully!');
    }
  });
}

writeFile(__dirname + '/text.txt',
'Este es un archivo escrito utilizando la el modulo core de Node "FileSystem".\n\nFecha: 2024-02-12'
);
readFile(__dirname + '/text.txt');
// deleteFile(__dirname + '/text.txt');