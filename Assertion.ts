// Type Assertion
// Type assertion tells TypeScript to treat a value as a specific type. 
// It does not change the value but helps the compiler understand the type.

let value: unknown = "Hello, TypeScript!";

// Using type assertion to treat 'value' as a string
let strLength: number = (value as string).length;

console.log(strLength); // Output: 18

