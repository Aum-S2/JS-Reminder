let name = 'Aum';
console.log(name);

// cannot be a reserved keyboard
// should be meaningful
// cannot start with a number (like '123aum')
// cannot contain space or hyphen (-)
// are case-sensitive ('firstName')/ ('FirstName') <--- this 2 are different

let firstName = 'Panda';
let lastName = 'Nawari';

// you should declear variable on a single line because it easy to read

let interestRate = 0.2;
interestRate = 1;
console.log(interestRate);

// use const if you dont need to reassign
// use let if you need to reassign 


// Primitives/Value Types (string/number/boolean/undefined/null)

let name2 = 'Panda Nawari'; // String Literal
let age = 11; // Number Literal
let itApproved = true; // Boolean Literal (true or false)
let firstName2 = undefined;
let selectedColor = null; // means nothing (zero)

// Reference Types

let person = {
  name: 'panda',
  age: 34
};

// Dot Notation
person.name = 'samuri';

// Bracket Notation
let target = 'name';
person[target] = 'balu';

console.log(person);