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

function createIncrement() {
  let count = 10;
  function increment() {
    count++;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?
