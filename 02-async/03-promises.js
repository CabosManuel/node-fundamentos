function promiseGreeting(name) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(`Hi ${name}!`);
      resolve(name);
    }, 1000);
  });
}

function promiseGoodbye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(`Bye ${name}!`);
      // resolve(name);
      reject('Error!!!'); // ERR_UNHANDLED_REJECTION - Este error se soluciona agregando el catch()
    }, 1000);
  });
}

console.log('Starting...');

// Cómo llamar a la función promiseGreeting()
promiseGreeting('Manuel')
  .then(promiseGoodbye)
  .then(() => {
    console.log('Ending...');
  })
  .catch(error => {
    console.error('Error in promise:');
    console.error(error);
  });