// Esto lo ejecuta 1ro
console.log('Starting');

let i = 0;

// Esto lo ejecuta al final para siempre
setInterval(function() {
  console.log(i);
  i++;

  // Esto si se descomenta generará error y romperá el monohilo ⚠️
  // if (i === 5) {
  //   var a = 3 + z;
  // }
}, 1000);

// Esto se ejecuta 2do
console.log('Finished');