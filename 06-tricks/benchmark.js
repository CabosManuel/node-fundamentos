console.time('All code');

// Función síncrona
function sum(limit) {
  let suma = 0;
  for (let i = 0; i < limit; i++) {
    suma += i;
  }
}

// Función asíncrona
function asyncBench() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('asyncBench done!');
      resolve();
    }, 3000);
  })
}

console.time('time 1');
sum(1_000_000_000);
console.timeEnd('time 1');

console.time('asyncBench 1');
asyncBench()
  .then(() => {
    console.timeEnd('asyncBench 1');
  });

console.time('time 2');
sum(1_000_000);
console.timeEnd('time 2');

console.timeEnd('All code');