function greet(greeting) {
  console.log(`${greeting} ${this.name}`);
}

var person1 = {
  name: "Tanveer",
};

var person2 = {
  name: "Nilofar",
};

greet.call(person1, "Hi!");
greet.apply(person2, ["Hello"]);

var greetPerson = greet.bind(person1);
greetPerson("Hello");
