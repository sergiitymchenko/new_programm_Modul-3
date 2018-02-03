const KEYBOARD = `qwertyuiop[]asdfghjkl;'zxcvbnm,./`;
let keyboard = KEYBOARD.split('');

let upper = keyboard.slice(0,12).sort();
let middle = keyboard.slice(12,23).sort();
let lower = keyboard.slice(23,33).sort();

let hello = `${middle[6]}${upper[2]}${middle[9]}${middle[9]}${upper[4]}`;
let javascript = `${middle[7]}${middle[2]}${lower[7]}${middle[2]}${middle[10]}${lower[4]}${upper[7]}${upper[3]}${upper[5]}${upper[8]}`;
let trainer = `${upper[8]}${upper[7]}${middle[2]}${upper[3]}${lower[6]}${upper[2]}${upper[7]}`;

console.log(KEYBOARD);
console.log(keyboard);
console.log(upper);
console.log(middle);
console.log(lower);
console.log(hello);
console.log(javascript);
console.log(trainer);


