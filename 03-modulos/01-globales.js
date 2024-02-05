console.clear();

function printGlobal() {
  console.log(global);
}

function runInterval() {
  let i = 1;
  let interval = setInterval(() => {
    console.log(i + ' Interval');
    if (i === 3) {
      clearInterval(interval);
    }
    i++;
  }, 1000);
}

function runImmediate() {
  setImmediate(() => {
    console.log('Immediate');
  });
}

function printProcess() {
  console.log(process); // Imprime el obj completo de process (muy grande)
}

function printDirname() {
  console.log(__dirname); // /ruta/node-fundamentos/03-modulos
}

function printFileName() {
  console.log(__filename); // /ruta/node-fundamentos/03-modulos/01-globales.js
}

// printGlobal();
// runInterval();
// runImmediate();
// printProcess();
// printDirname();
// printFileName();