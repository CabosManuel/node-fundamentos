function asyncFn(callback) {
  setTimeout(() => {
    try {
      // let add = 2;
      let num = 3 + add;
      callback(null, num)
    } catch (error) {
      callback(error)
    }
  }, 2000);
}

asyncFn(function (error, data) {
  // Validar primero si hay un error, antes de seguir ejecutando el código
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('Data:', data);
});