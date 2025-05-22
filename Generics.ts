// Generics in TypeScript

// // Basic Generics

// function identity<T>(value: T): T {
//   return value;
// }

// console.log(identity<string>("Hello")); // Output: "Hello"
// console.log(identity<number>(42));      // Output: 42

// // Generics with Arrays

// function reverseArray<T>(arr: T[]): T[] {
//   return arr.reverse();
// }

// console.log(reverseArray<number>([1, 2, 3]));  // Output: [3, 2, 1]
// console.log(reverseArray<string>(["A", "B", "C"])); // Output: ["C", "B", "A"]

// // Generics with Interfaces

// interface StorageBox<T> {
//   content: T;
// }

// let numberBox: StorageBox<number> = { content: 100 };
// let stringBox: StorageBox<string> = { content: "TypeScript" };

// console.log(numberBox.content); // Output: 100
// console.log(stringBox.content); // Output: "TypeScript"

// // Generics with Multiple Type Parameters

// function swap<T, U>(first: T, second: U): [U, T] {
//   return [second, first];
// }

// console.log(swap<string, number>("Age", 25)); // Output: [25, "Age"]
// console.log(swap<boolean, string>(true, "Yes")); // Output: ["Yes", true]

// // Generics with Constraints

// function getLength<T extends { length: number }>(item: T): number {
//   return item.length;
// }

// console.log(getLength("Hello"));   // Output: 5
// console.log(getLength([1, 2, 3])); // Output: 3

// // Advanced: Generics with the keyof Operator

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// let user = { name: "Alice", age: 30 };

// console.log(getProperty(user, "name")); // Output: "Alice"
// console.log(getProperty(user, "age"));  // Output: 30
