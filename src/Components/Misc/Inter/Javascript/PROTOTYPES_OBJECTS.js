const obj = { name: "Tanveer" };
//console.log(obj.name);

delete obj.name;
//console.log(obj.name);
const newObj = Object.create({
  name: "Tanveer",
});

console.log(newObj.name);

delete newObj.name;
console.log(newObj.name);

function Person(id, name) {
  this.name = name;
  this.id = id;
}
const getPerson = new Person(10, "Tanveer");
console.log(getPerson.name);
const newPerson = Object.assign(getPerson, { profession: "React Developer" });
console.log(newPerson.profession);
