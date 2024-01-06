/***************/
Hoisting 


let var1;
console.log(var1);
console.log(typeof var1);

let var2 = null;
console.log(var2);
console.log(typeof var2);

console.log(foo);
foo = 1;

// What will be logged in in above example

hoistedVariable = 3;
console.log(hoistedVariable);
var hoistedVariable;

var y = 10;
console.log(y);

console.log(y)
y=10
console.log(y)
let y;

var y = 10;
y = 10;

myfun();
function myfun() {
      console.log("Hello First");
    }
myfun();
var myfun = function () {
      console.log("Hello Second");
    };
myfun();


myfun();
var myfun = function () {
      console.log("Hello function expression");
    }; 
myfun();
function myfun() {
      console.log("Hello function");
    }
myfun();

/***************//
// This keyword
// What will be logged here

function getItem() {
  console.log(this);
}

getItem();

const item = {
  title: "This is Title",
  getItem() {
    console.log(this);
  },
};

item.getItem();

class Item {
  title = "This is Title";
  getItem() {
    console.log(this);
  }
}
const myItem = new Item();
myItem.getItem();

myItem.getItem();

class Item2 {
  title = "This is Title";
  getItem() {
    function A() {
      console.log(this);
    }
    A();
  }
}
const myItem2 = new Item();
myItem2.getItem;
/*****************/

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
console.log(employee.getId())
console.log(employee.getName())


//*****************//
//Remove Duplicate

var arr1 = ["apple", "bannana", "orange", "apple", "orange", "apple"];

    arr1 = arr1.filter((item, index, inputArray) => {
      return inputArray.indexOf(item) == index;
    });
	
//***************//
//How many wys obj can be created in javascript?

///Shallow Copy Ques
let val1 = { a: 1, b: 2 };
    let val2 = { b: 4, c: 3 };
    let val = { ...val1, ...val2 };
    console.log(val);
	

//Shallow Cloning

let obj = {
  a: 1,
  b: 2,
  c: {
    age: 30,
  },
};

var objclone = Object.assign({}, obj);
console.log("objclone: ", objclone);

obj.c.age = 45;
console.log("After Change - obj: ", obj);
console.log("After Change - objclone: ", objclone);


	
/***************/
// Find number of occurences of minimum value in an array

const arr = [1,2,3];
const minvalue = Math.min([...arr]);
const newArr = arr.filter((val)=> val === minvalue);
console.log(newArr.length);
	
function myFun(...params) {
      return params;
}

let x = myFun(1, 2, 3);

var arr= [1,9,3,2,5];
arr.sort()
console.log(arr);

var arr= [1,11,9,45,10,8];
arr.sort()
console.log(arr);


// Write a function which gets an array and an element and returns a array with this element at the end
const appendElement =(arr,ele)=>{
  return [...arr,ele]
}

// Concate two arrays

const concateArr=(arr1,arr2)=>{
	return [...arr1,...arr2];
}
console.log(concateArr([1,2,3],[4,5,6]));

console.log(appendElement([1,2,3],4));


var a = "Rekha";
var b = "Rekha";
var c = a;

a==b;
a===b;
c===a;




/***************/
function calling1(a = 1, b = 10) {
      return a + b;
    }

    console.log(calling1(2, 2));
    console.log(calling1(9) );
    console.log(calling1(undefined, 100));
    console.log(calling1(2, 99) );
	
//output 1`
//output 2`
// output 3`
//output 4`


/***************/
//Prototype
	
var Employee = {
      company: "xyz",
    };
    var emp1 = Object.create(Employee);
    delete emp1.company;
    console.log(emp1.company);
	
	/// output "xyz";
	
	
/***************/



/***************/
//Micro and macro Task


console.log(1);
setTimeout(()=>{
console.log(2);
},0)
setTimeout(()=>{
console.log(3);
},0)

console.log(4)


/****************/

var arrayVal = [1, 2, 3, 4, 5, 6];
    var num = 3;
    var newArrayVal = [
      //...arrayVal.slice(arrayVal.length - num, arrayVal.length),
      ...arrayVal.slice(-num),
      ...arrayVal.slice(0, num),
    ];
	
/****************/

///insert element in nth posiiton of an array

/****************/
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

	
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayHello = function () {
      console.log('Hello', this.name);
       function innerFunction(){
        console.log(this.age); 
        console.log(this);
      }
      innerFunction(); 
   }
}
let x = new Person();
x.sayHello()


/**************//

for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 1000 + i);
}

/*******************/

const users = [
  { id: 1, name: "React JS", isActive: true },
  { id: 2, name: "Angular", isActive: false },
  { id: 1, name: "Vue", isActive: true },
];

// WAP to add only names in an array
// WAP to add name with active user only
// Check if a name exist  (some,find, findIndex)
// Sort with name property
const isNameExist = (name,users)=> users.some((user)=> user.name === name);


/*******************/
Closure
// How to create private variables 

const privateCounter = () => {
  let count = 0;
  return {
    increment: (val = 1) => {
      count += val;
    },
    getCount: () => {
      return count;
    },
  };
};

const counter = privateCounter();
console.log(counter.getCount());
counter.increment();

/*****************/
Currying

const multiply = (num1) => {
  return (num2) => {
    return num1 * num2;
  };
};

//const multiply = (num1) => (num2) => num1 * num2;

console.log(multiply(2)(3));

/*************************/