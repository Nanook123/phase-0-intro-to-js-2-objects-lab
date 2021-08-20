const employee = {

    name: "Sam",
    streetAddress: "poop town"

}






function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };

    newObj[key] = value;

    return newObj;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, "street Address", "11 Broadway");

newEmployee.name;



function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {

    employee[key] = value;

    return employee;

}

function deleteFromEmployeeByKey(obj, key) {

    delete newEmployee.name;

    return newEmployee;


}

employee.name;

function destructivelyDeleteFromEmployeeByKey(obj, key){

    delete employee.name

    return employee

}

