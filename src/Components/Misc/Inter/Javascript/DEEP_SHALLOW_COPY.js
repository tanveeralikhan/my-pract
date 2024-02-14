// A shallow copy that containes (sub) values which are connected to the original values.
// deep copy means all the values of new variable are copied while being disconnected from the original values.
/* let a = "Tanveer";
let b = a;
console.log(b);
console.log(a);
b = "Nilofar";
console.log(a);
console.log(b); */
const obj = {
  a: 1,
  b: 2,
  c: {
    age: 30,
  },
  d: "tanveer",
};

const objclone = Object.assign({}, obj);
//console.log("objclone: ", objclone);

objclone.d = "Sam";
objclone.a = 3;
objclone.b = 4;
objclone.c.age = 45;
console.log("After Change - obj: ", obj);
console.log("After Change - objclone: ", objclone);

const employee1 = [{ name: "Tanveer", company: "Luxoft" }];
const cloneEmployee1 = [...employee];
cloneEmployee[0].company = "JLL";
console.log(employee);
console.log(cloneEmployee);

const employee = { name: "Tanveer", company: "Luxoft" };
const cloneEmployee = { ...employee };
cloneEmployee.company = "JLL";
console.log(employee);
console.log(cloneEmployee);
