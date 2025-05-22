// objects in typescript

let obj1 = {_name : 'Kaushal Jha', _id : 'RA0193'};  // Implicit Object Type
let car: {_name : string, _brand : number} = {_name : 'Toyota', _brand : 2024} // Explicit Object Type

let potato = {_name : 'Potato', _price : 10};
let carrot = {_name : 'Carrot', _price : 12};
let tomato = {_name : 'Tomato'};

let vegetables: readonly {readonly _name : string, _price? : number} [] = [potato, carrot, tomato]; // Now we can't update array and as well as _name of an object

// vegetables[0]._name = 'Cucumber'; // throws an error because _name is read-only

console.log(obj1, car, vegetables);
