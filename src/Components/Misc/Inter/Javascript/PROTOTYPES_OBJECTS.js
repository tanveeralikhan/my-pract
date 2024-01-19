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
