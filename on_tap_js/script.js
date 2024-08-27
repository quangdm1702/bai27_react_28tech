// default param

// const sum = (a = 10, b = 20) => {
//     return a + b;
// };

// const sum = (a, b) => {
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// };

// console.log(sum());

// End default param

// Spread synctax
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];

console.log(...a);
console.log(...b);
console.log(c);

const user = {
    name: 'Quang',
    age: 21,
    colorEyes: 'brown'
};

console.log('Thong tin user:', user);

const updateUser = {
    address: 'Thanh Loc , Can Loc'
};

console.log({ ...user, ...updateUser });
//End Spread synctax

// Rest parameters

const sum = (...numbers) => {
    let sum = 0;
    sum = numbers.reduce((total, item) => {
        return total + item;
    }, 0);
    return sum;
}

console.log(sum(10, 20, 30, 40, 50, 60));

// Rest parameters

// Destructuring
const users = {
    name: 'Quang',
    age: 21,
    colorEyes: 'brown'
};
const { name, age } = users;
console.log(name);
console.log(age);
// Destructuring