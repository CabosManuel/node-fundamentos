/* ********** Import object ************** */
import customModule from './custom-module.mjs';

customModule.hello();
console.log(customModule.customProp);

/* ************ Import named ************ */
// import { hello, customProp } from './custom-module.mjs';

// hello();
// console.log(customProp);