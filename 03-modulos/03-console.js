// console.log('Log..');
// console.info('Info...');
// console.error('Error...');
// console.error('Warning...');

// Console Group ------------------------------------------
console.group('Console Group');
console.group('Group #1');
console.group('Group #2');
console.log('Starting...');
console.log('Processing...');
console.log('Ending...');
console.groupEnd('Group #2');
console.groupEnd('Group #1');
/*
Group #1
Group #2
Starting...
Processing...
Ending...
*/
console.groupEnd();

function process1() {
  console.group('fn #1');
  console.log('Processing function #1...');
  process2();
  console.groupEnd('fn #1');
}

function process2() {
  console.group('fn #2');
  console.log('Processing function #2...');
  console.groupEnd('fn #2');
}

process1();
/*
fn #1
  Processing function #1...
  fn #2
    Processing function #2...
  fn #1
*/

console.groupEnd('Console Group');

// Console Table ------------------------------------------
console.group('Console Table');
let table = [
  {
    name: 'Manuel',
    job: 'Developer',
  },
  {
    name: 'Alejandro',
    job: 'Designer',
  },
];
console.log(table);
console.table(table);
/*
┌─────────┬─────────────┬─────────────┐
│ (index) │ name        │ job         │
├─────────┼─────────────┼─────────────┤
│ 0       │ 'Manuel'    │ 'Developer' │
│ 1       │ 'Alejandro' │ 'Designer'  │
└─────────┴─────────────┴─────────────┘
*/
console.groupEnd('Console Table');


// Console Count --------------------------------
console.group('Console Count');
console.count('test');
console.count('test');
console.count('test');
console.countReset('test');
console.count('test');
console.count('test');
/*
test: 1
test: 2
test: 3
test: 1
test: 2
*/
console.groupEnd('Console Count');