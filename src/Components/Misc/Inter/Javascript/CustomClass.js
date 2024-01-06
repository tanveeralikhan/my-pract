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
console.log(employee.getId());
console.log(employee.getName());
