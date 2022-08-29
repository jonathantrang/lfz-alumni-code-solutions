const width = 4;
const height = 7;
const area = width * height;

const bill = 100000;
const payment = 100001;
const change = payment - bill;

const quizzes = 10;
const midterm = 10;
const final = 100;
const grade = (quizzes + midterm + final) / 3;

const firstName = 'Jonathan';
const lastName = 'Trang';
const fullName = firstName + ' ' + lastName;

const pH = 7;
const isAcidic = pH < 7;

const headCount = 300;
const isSparta = headCount === 300;

let motto = fullName;
motto += ' is the GOAT';

console.log('value of area:', area);
console.log('typeof area:', typeof area);

console.log('value of change:', change);
console.log('typeof change:', typeof change);

console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
