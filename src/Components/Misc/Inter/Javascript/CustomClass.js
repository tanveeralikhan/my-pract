//Class based quesitons
class Employee {
  constructor(id, name) {
    this.name = name;
    this.id = id;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

const employee = new Employee(1, "tanveer");
console.log(employee);
console.log(employee.getId());
console.log(employee.getName());

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

   getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const member = new Person("Lydia", "Hallie");

// Add prototype to Person object
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
