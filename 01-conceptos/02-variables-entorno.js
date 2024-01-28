let computerName = process.env.COMPUTER_NAME || '(Name not defined)';
let ide = process.env.IDE || '(IDE not defined)';

console.log('Running in: ' + computerName);
console.log('IDE: ' + ide);

// Comando para dar valor a la variable y ejecutar archivo:
// COMPUTER_NAME=WSL IDE="Visual Studio Code" node 01-conceptos/02-variables-entorno.js