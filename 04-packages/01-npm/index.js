const joke = require('awesome-dev-jokes');
const { translate } = require('bing-translate-api');
const say = require('say');
const replaceSpecialCharacters = require('replace-special-characters');

// 2. Traduce el chiste a español
translate(
  joke.getRandomJoke(), // 1. Genera un chiste de programador random (Ingles)
  null,
  'es'
).then(res => {
  jokeNotFormatted = res.translation;
  jokeFormatted = replaceSpecialCharacters(res.translation);

  console.log(res.translation); // 3. Imprimir el chiste en español
  say.speak(jokeFormatted); // 4. Una voz cuenta el chiste (sin caracteres especiales)
}).catch(err => {
  console.error(err);
});