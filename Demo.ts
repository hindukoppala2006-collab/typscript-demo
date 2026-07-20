// Functions with parameters and return types

function findingFactorial(num : number): number{
    if(num < 0) return -1;
    if(num == 0 || num == 1) return 1;
    return num *  findingFactorial(num - 1);
}
console.log( findingFactorial(10));