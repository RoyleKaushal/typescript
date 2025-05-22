// interface User {
//   name: string;
//   age: number;
//   address: string;
// }

// function getUserInfo(user: User): string {
//   return `${user.name} (${user.age} years old) lives at ${user.address}`;
// }

// const user: User = {
//   name: "Alice",
//   age: 30,
//   address: "123 Main St",
// };

// console.log(getUserInfo(user));

// // Extending with Interfaces and Type Aliases

// interface Address {
//   city: string;
//   country: string;
// }

// interface User extends Address {
//   name: string;
//   age: number;
// }

// const user: User = {
//   name: "Alice",
//   age: 30,
//   city: "New York",
//   country: "USA",
// };

// // Using Type Alias for Intersection:

// type Address = {
//   city: string;
//   country: string;
// };

// type User = {
//   name: string;
//   age: number;
// } & Address;

// const user: User = {
//   name: "Alice",
//   age: 30,
//   city: "New York",
//   country: "USA",
// };

// console.log(user)

// Advanced Concepts with Interfaces

// // 1. Optional Properties:

// interface User {
//   name: string;
//   age?: number; // Optional
// }

// const user1: User = { name: "Alice" };
// const user2: User = { name: "Bob", age: 25 };

// console.log(user1, user2);

// // 2. Readonly Properties:

// interface User {
//   readonly id: number;
//   name: string;
// }

// const user: User = { id: 1, name: "Alice" };
// // user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

// console.log(user);

// // 3. Function Types:

// interface Add {
//   (a: number, b: number): number;
// }

// const add: Add = (a, b) => a + b;
// console.log(add(5, 3)); // Output: 8

// // 4. Index Signatures:

// interface StringDictionary {
//   [key: string]: string;
// }

// const dictionary: StringDictionary = {
//   hello: "world",
//   name: "Alice",
// };

// // 5. Extending Multiple Interfaces:

// interface A {
//   propA: string;
// }

// interface B {
//   propB: number;
// }

// interface C extends A, B {
//   propC: boolean;
// }

// const obj: C = {
//   propA: "Hello",
//   propB: 42,
//   propC: true,
// };
