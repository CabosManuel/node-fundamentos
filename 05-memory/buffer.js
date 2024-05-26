let buffer = Buffer.alloc(4);
console.log('4 Espacios en memoria vacíos:', buffer);

buffer = Buffer.from([9, 10, 11]);
console.log('3 Espacios en memoria con valores:', buffer);

buffer = Buffer.from('Hello');
console.log('Espacio en memoria con texto "Hello":', buffer);

let abc = Buffer.alloc(26);
console.log('26 espacios en memoria vacíos: ', abc);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log('Abecedario almacenado en los 26 espacios:', abc)
console.log('Abecedario con .toString():', abc.toString());