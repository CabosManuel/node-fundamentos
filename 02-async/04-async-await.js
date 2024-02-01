async function asyncGreeting(name) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(`Hi ${name}!`);
      resolve(name);
    }, 1000);
  });
}

async function asyncGoodbye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(`Bye ${name}!`);
      resolve(name);
    }, 1000);
  });
}

// Una función async se tiene que ejecutar dentro de otra función async o da este error:
// SyntaxError: await is only valid in async functions and the top level bodies of module
async function main() {
  // await: Para ejecutar una función async
  let name = await asyncGreeting('Manuel');
  await asyncGoodbye(name);
  console.log('Ending...');
}

console.log('Starting...');
main();
console.log('Other code...');