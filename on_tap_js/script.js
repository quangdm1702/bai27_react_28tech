// const sum = (a = 10, b = 20) => {
//     return a + b;
// };

const sum = (a, b) => {
    a = a || 0;
    b = b || 0;
    return a + b;
};

console.log(sum());