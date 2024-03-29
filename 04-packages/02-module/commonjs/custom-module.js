function hello() {
  console.log('Hello from module.js');
}

module.exports = { 
  hello,
  customProp: 'property from module.js'
};