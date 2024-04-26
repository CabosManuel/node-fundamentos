import bcrypt from 'bcrypt';

// Para encriptar y desencriptar contraseñas
const password = '1234';
const wrongPassword = '12345';

bcrypt.hash(password, 1, (err, hash) => {
  console.log(hash);
  
  bcrypt.compare(password, hash, (err, res) => {
    console.log(`Compare ${password} to hash:`, res);
  });
  
  bcrypt.compare(wrongPassword, hash, (err, res) => {
    console.log(`Compare ${wrongPassword} to hash:`, res);
  });
});
