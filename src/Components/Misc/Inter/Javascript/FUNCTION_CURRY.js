//Currying;

const multiply = (num1) => {
  return (num2) => {
    return num1 * num2;
  };
};

//const multiply = (num1) => (num2) => num1 * num2;

console.log(multiply(2)(3));

// for n number pf parameters
// Easy Way************
const add = (a) => {
  const next = (b) => add(a + b);
  next.valueOf = () => a;
  return next;
};
console.log(add(2)(4)(6)(10).valueOf());

/* const one = add(1);
console.log(one.valueOf());

const two = one + 1;
console.log(two);

const four = two + two;
console.log(four);

const six = add(four)(two);
console.log(six.valueOf());

const eleven = six(4)(1);
console.log(eleven.valueOf());*/

console.log(add(2)(4)(6)(10).valueOf());

const sum = (a, ...rest) => {
  a += rest.reduce((total, val) => {
    return total + val;
  }, 0);
  const next = (...b) =>
    sum(
      a +
        b.reduce((total, val) => {
          return total + val;
        }, 0)
    );
  next.valueOf = () => a;
  //console.log('a', a, '; next: ', next, '; rest: ', ...rest);
  return next;
};
//console.log(sum(1, 2)(2, 3)(1, 2, 3, 4).valueOf()); //18
//console.log(sum(1, 2, 3, 4).valueOf()); //10
//console.log(sum(1)(2)(3)(4)(5).valueOf()); //15
