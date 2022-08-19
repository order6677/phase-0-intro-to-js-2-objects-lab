
const employee = {
    name:"sam", streetAddress:"11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    for (const key in employee){
        delete employee [key];
    }
    employee.name = "Sam";
    let anotherEmployee = {
        ...employee ,
        streetAddress:"11 Broadway"
    };
    return anotherEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(){
    for (const key in employee) {
        delete employee [key];
    }
    employee.name = "Sam";
  employee.streetAddress = "12 Broadway";
  return employee;
}
function deleteFromEmployeeByKey(){
    for (const key in employee) {
        delete employee [key];
    }
    employee.name = "Sam";
    let anotherEmployee = {
        ...employee
    }
    delete anotherEmployee.name
    return anotherEmployee
}
function destructivelyDeleteFromEmployeeByKey() {
    for (const key in employee) {
        delete employee [key];
    }
    employee.name = "Sam";
    let anotherEmployee = delete employee.name;
    return employee
}