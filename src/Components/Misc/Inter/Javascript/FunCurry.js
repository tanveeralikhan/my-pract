//Currying;

const multiply = (num1) => {
  return (num2) => {
    return num1 * num2;
  };
};

//const multiply = (num1) => (num2) => num1 * num2;

console.log(multiply(2)(3));
