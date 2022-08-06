const employee ={ name:"sam", streetAddress:"dd"

}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee ={...employee};
    newEmployee[key]= value ;
     return newEmployee;
 }

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee[key];
}
function  deleteFromEmployeeByKey(employee, key){
    Object.keys(employee,key);
    
}