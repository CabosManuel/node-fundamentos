function otherFail() {
  fail();
}

function fail() {
  return 3 + x;
}

try {
  otherFail();
} catch (error) {
  console.group('Error #1');
  console.error('Error: ' + error);
  console.error(error);
  console.error(error.message);
  console.log('Error occurred');
  console.groupEnd('Error #1');
}

// Async function error --------------------------
function asyncFail() {
  setTimeout(() => {
    // Si no hay un try/catch dentro de la función asíncrona
    // ¡NODE CRASHEARA EL PROCESO!
    // Node.js v20.11.0
    // [nodemon] app crashed - waiting for file changes before starting...
    
    // return 3 + x;
    
    try {
      return 3 + x;
    } catch (error) {
      console.group('Error #2');
      console.error('Error in async function: ' + error.message);
      console.groupEnd('Error #2');
    }
  });
}

try {
  asyncFail();
} catch (error) {
  // Este error no se captura correctamente, se tiene que hacer el try/catch 
  // dentro de la función asíncrona.
  console.error(error.message);
}