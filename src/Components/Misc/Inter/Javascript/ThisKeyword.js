var name = "Tanveer";
var obj = {
  name: "Name Changed",
  prop: {
    name: "Inside prop",
    getName: function () {
      return this.name;
    },
  },
  getName: function () {
    return this.name;
  },
  getNameV2: () => {
    return this.name;
  },
  getNameV3: (function () {
    return this.name;
  })(),
};

console.log(obj.prop.getName()); // Inside Prop
console.log(obj.getName()); // Name Changed
console.log(obj.getNameV2()); // undefined
console.log(obj.getNameV3); // Name Changed
