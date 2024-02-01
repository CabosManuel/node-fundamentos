// function async(callback) {
//   setTimeout(function() {
//     console.log('Async msj..');
//     callback();
//   }, 1000);
// }

// console.log('Starting...');
// async(function () {
//   console.log('Ending...');
// });

// -------------------------------

function asyncGreeting(name, callback) {
  setTimeout(function() {
    console.log(`Hi ${name}!`);
    callback();
  }, 1000);
}

function asyncGoodbye(name, callback) {
  setTimeout(function() {
    console.log(`Bye ${name}!`);
    callback();
  }, 1000);
}

console.log('Starting...');
let name = 'Manuel';

asyncGreeting(name, 
  function () {
    asyncGoodbye(name,
      function () {
        console.log('Ending...');
      }
    )
  }
);