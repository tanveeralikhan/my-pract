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
