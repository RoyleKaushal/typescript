// // Tuples 

// // A tuple with a string and a number
// let user: [string, number] = ["Alice", 25];

// console.log(user[0]); // Output: Alice
// console.log(user[1]); // Output: 25

// // Tuple with Optional Elements:

// let person: [string, number, boolean?] = ["Bob", 30];

// console.log(person); // Output: ["Bob", 30]

// // Tuple with Read-Only Property:

// const coordinates: readonly [number, number] = [10, 20];

// // coordinates[0] = 50; // Error: Cannot assign to '0' because it is a read-only tuple

// // Enums

// // Numeric Enums (Default):

// enum Status {
//   Pending,   // 0
//   InProgress, // 1
//   Completed,  // 2
// }

// console.log(Status.Pending);   // Output: 0
// console.log(Status.Completed); // Output: 2

// // Custom Number Values in Enums:

// enum OrderStatus {
//   Pending = 1,
//   Shipped = 5,
//   Delivered = 10,
// }

// console.log(OrderStatus.Shipped); // Output: 5

// String Enums:

// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }

// console.log(Direction.Up); // Output: "UP"

// Using Enums in a Function:

enum Status {
    Pending = 'PENDING',
    InProgress = 'IN_PROGRESS',
    Completed = 'COMPLETED'
}

function getStatusText(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "Order is pending.";
    case Status.InProgress:
      return "Order is in progress.";
    case Status.Completed:
      return "Order is completed.";
    default:
      return "Unknown status.";
  }
}

console.log(getStatusText(Status.InProgress)); // Output: "Order is in progress."
