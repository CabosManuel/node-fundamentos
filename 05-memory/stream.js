import fs from 'fs';
import stream from 'stream';
import util from 'util';

// En EMS no está disponible __dirname, pero podemos obtenerlo de import.meta
const __dirname = import.meta.dirname;

let readableStream = fs.createReadStream(__dirname + '/input.txt');
// Cuando ya sabemos en qué formato estará el buffer, podemos especificarlo
readableStream.setEncoding('UTF8');

// Lectura de archivos -----------------------------------------------------
// Leer los datos del evento 'data'
let data = '';
readableStream.on('data', chunk => {
  data += chunk;
});

// Cuando termine de leer, imprimir
readableStream.on('end', () => {
  console.log(data);
})

// Escritura de archivos ---------------------------------------------------
// Escribir en la consola
// process.stdout.write('texto 0');
// process.stdout.write('texto 1');
// process.stdout.write('texto 2');

// Almacenar la clase Transform
const Transform = stream.Transform;

// Crear una clase que herede de Transform
function ToUpperCase () {
  Transform.call(this);
}

util.inherits(ToUpperCase, Transform);

// Implementar el método _transform para hacer los datos en mayúsculas
ToUpperCase.prototype._transform = function (chunk, codification, callback) {
  let chunkToUpperCase = chunk.toString().toUpperCase();
  this.push(chunkToUpperCase);
  callback();
}

// Crear una instancia de la clase ToUpperCase
let upper = new ToUpperCase();

// Utilizar .pipe para pasar los datos de 'upper' a 'process.stdout' (consola)
readableStream
  .pipe(upper)
  .pipe(process.stdout);