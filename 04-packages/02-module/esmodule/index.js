/* ********** Import object ************** */
// import customModule from './custom-module.js';

// customModule.hello();
// console.log(customModule.customProp);

/* ************ Import named ************ */
// import { hello, customProp } from './custom-module.js';

// hello();
// console.log(customProp);

/* *********** Export default *********** */
import moduleDefaultValue from './custom-module.js';
import { hello } from './custom-module.js';

console.log(moduleDefaultValue);
hello();