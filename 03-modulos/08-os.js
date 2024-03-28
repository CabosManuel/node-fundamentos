const os = require('os');

const SIZE = 1024;

function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}
// console.log('Free memory KB:', kb(os.freemem()));
// console.log('Free memory MB:', mb(os.freemem()));
console.log('Free memory GB:', gb(os.freemem())); // Memoria libre en GB
console.log('Total memory GB:', gb(os.totalmem())); // Memoria total en GB

console.log('Architecture:', os.arch()); // Arquitectura del sistema (x64, x32)
console.log('Platform:', os.platform()); // Plataforma del sistema (win32, linux)
console.log('CPUs:', os.cpus().length); // Número de CPUs
// console.log('Constants:', os.constants); // Constantes del sistema
console.log('Home dir:', os.homedir()); // Directorio home
console.log('Temporal dir:', os.tmpdir()); // Directorio temporal
console.log('Hostname:', os.hostname()); // Nombre del host
// console.log('Network Interfaces:', os.networkInterfaces()); // Interfaces de red
console.log('IP:', os.networkInterfaces().eth0[0].address); // Dirección IP