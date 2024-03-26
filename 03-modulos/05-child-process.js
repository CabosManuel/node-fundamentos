const { exec, spawn } = require('child_process');

// exec('ls -la', (error, stdout, stderr) => {
// exec(
//   'node 03-modulos/03-console.js',
//   (error, stdout, stderr) => {
//   if (error) {
//     console.error(error);
//     return false;
//   }
//   console.log(stdout);
// });

let subprocess = spawn('ls', ['-la']);

console.log('pid:', subprocess.pid);
console.log('connected:', subprocess.connected);

subprocess.stdout.on('data', (result) => {
  console.log('killed:', subprocess.killed);
  console.log(result.toString());
});


subprocess.on('exit', () => {
  console.log('Process exit successful!');
});