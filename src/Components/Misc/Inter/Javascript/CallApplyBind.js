const tanveer = {
  name: "Tanveer Ali Khan",
  sayName: function () {
    console.log(this.name);
  },
};

const nilofar = {
  name: "Nilofar Jahan",
  sayName: function () {
    console.log(this.name);
  },
};

//nilofar.sayName.call(tanveer);

// Example
function sayMyName() {
  console.log(this.name);
}

sayMyName.call(tanveer);
//sayMyName.call(nilofar);

/* setTimeout(() => {
  tanveer.sayName(nilofar);
}, 2 * 1000); */

setTimeout(tanveer.sayName, 3 * 1000); // undefined because setTimeout is of webApi and that is being handled in a saperate callback queue , so sayName doesn't know where to refer
setTimeout(() => tanveer.sayName(), 3000); // With closure this will work.
// use bind to refer the current context , bind here returns new function
setTimeout(tanveer.sayName.bind(nilofar), 3 * 1000);
setTimeout(tanveer.sayName.bind(tanveer), 3 * 1000);

function sayMyName2() {
  console.log(this.name);
}
sayMyName2.apply(tanveer, ["Hello"]);
