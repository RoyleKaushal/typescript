//Function Params and Function Returns

// //Inferred Return Type

// function arithmeticOperation( _price : number ) {
//     return _price * 9;
// }

// const OP = arithmeticOperation( 20 );

// // Explicit Return Type

// let hasDiscount = false;

// function arithmeticOperation( _price : number ) : number | string {
//     if(hasDiscount) return 'discount'; // Type 'string' is not assignable to type 'number'.
//     return _price * 9;
// }

// const OP = arithmeticOperation( 20 );
// const OP2 = arithmeticOperation( 30 );

// // Example 1

// function calculateFinalScore(baseScore: number, deductions: number = 0 ): number {
//   return baseScore - deductions;
// }

// let scoreWithDeductions = calculateFinalScore(50, 10);
// let scoreWithoutDeductions = calculateFinalScore(50); // Error, to resolve it we need default value to 0.

// // Rest Parameters

// function joinWords(...words: (string | number) []): string {
//   return words.join(" ");
// }

// let sentence = joinWords("TypeScript", "makes", "coding", "fun", 13, 14, 15);
// console.log(sentence); // "TypeScript makes coding fun"

// // Using Objects with Specific Properties

// function createEmployee({ id }: { id: number }): { id: number; isActive: boolean } {
//   return { id, isActive: id % 2 === 0 };
// }

// const firstEmployee = createEmployee({ id: 1 });
// console.log(firstEmployee); // { id: 1, isActive: false }

// const secondEmployee = createEmployee({ id: 2 });
// console.log(secondEmployee); // { id: 2, isActive: true }

// // Accepting More Complex Objects

// function createStudent(student: { id: number; name: string }): void {
//   console.log(student);
//   console.log(`Welcome to the course, ${student.name}!`);
// }

// const newStudent = { id: 1, name: "John" };
// createStudent(newStudent); // "Welcome to the course, John!"

// // Extra Property Error

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome, ${student.name}!`);
}

const newStudent = { id: 1, name: "John", age: 20 }; // Extra property 'age'

createStudent(newStudent);
