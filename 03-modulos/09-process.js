process.on('beforeExit', () => {
  console.log('Process will end!');
});

process.on('exit', () => {
  console.log('Process end!');

  setTimeout(() => {
    console.log('Timeout not working!');
  }, 0);
});

setTimeout(() => {
  console.log('Timeout working!');
}, 0);

process.on('uncaughtException', (err, origin) => {
  console.error('>> Error:', err);
  console.error('>> Origin:', origin);
});

console.log('Start error');
fun();
console.log('End error');