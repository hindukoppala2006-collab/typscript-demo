//A simple Program with arrow functions

// Arrow function to add two numbers
let add = (a: number, b: number): number => {
    return a + b;
};
console.log(add(5, 3));

//Normal Function to add two numbers
function addNumbers(a: number, b: number): number {
    return a + b;
}
console.log(addNumbers(8, 5));
