// Without type alias

type UserInfo = { name: string, age: number, address: string };
type CompanyInfo = { id: string, designation: string, salary: number };

function getUserInfo(user: UserInfo) {
  console.log(`User Info: 
    Name: ${user.name}, 
    Age: ${user.age}, 
    Address: ${user.address}`);
}
//Syntax of Intersection Type
function getCompleteInfo(user: UserInfo & CompanyInfo){
    console.log(`Complete Info:
    Name: ${user.name},
    Age: ${user.age}, 
    Address: ${user.address},
    Employee Id: ${user.id},
    Designation: ${user.designation},
    Salary: ${user.salary}`)
}

const user: UserInfo = { name: 'Alice', age: 30, address: '123 Main St' };
const completeData: UserInfo & CompanyInfo = { name: 'Alice', age: 30, address: '123 Main St', id: 'RA0193', designation: 'Software Engineer', salary: 38970 }

getCompleteInfo(completeData);
getUserInfo(user);
