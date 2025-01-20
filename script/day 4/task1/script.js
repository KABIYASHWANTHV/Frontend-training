function sortByAge(employees) 
{
    return employees.sort((a, b) => a.age - b.age);
}
const employees = [
    { name: 'John', age: 28 },
    { name: 'Anna', age: 22 },
    { name: 'Mike', age: 32 }];
const sortedEmployees = sortByAge(employees);
console.log(sortedEmployees);