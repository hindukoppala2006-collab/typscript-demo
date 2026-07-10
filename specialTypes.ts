// Special Types for TypeScript 
let unknownValue: unknown = "Hello, World!";
if (typeof unknownValue === "string") {
    console.log(`The length of the string is: ${unknownValue.length}`); 
} else {
    console.log("The value is not a string.");
}
let anyValue: any = 42;
anyValue = "Now I'm a string!";
console.log(`The value of anyValue is: ${anyValue}`);
let neverValue: never;
function throwError(message: string): never {
    throw new Error(message);
}
function logMessage(message: string): void {
    console.log(message);
}
logMessage("This is a log message.");