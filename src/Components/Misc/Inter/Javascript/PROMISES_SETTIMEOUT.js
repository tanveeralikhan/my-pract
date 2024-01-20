function a() {
  console.log("A");
}
setTimeout(() => {
  console.log("B");
}, 0);

a();
console.log("C");

Promise.resolve().then(() => console.log("D"));

// Everything runs in a call stack in javascript , // Call stack waits for none and it runs line by line
// A global execution context(GEC) is created in a call stack , and it runs line by line
// Here Web APIs utiity comes into the picture to delay the execution , like setTimeOut , setInterval, fetch, Promises, etc. They are being exposed in windows object.
// Browser registed all these web APIs and runs in the background. They dont directly put into call stack.
// instead they put it into the queue . its called callBack/ Taskqueue queue,
// Now through event loop these callback/task queue will be pushed into event loop.
// Once global execution context is empty , it will pull the callack task through eventloop.

// Promises are set into micro task queue , --> this is always in high priority.
// Promises are based on Mutation and observer.
// Starvation --> when call back queues waits for the microtask to gets completed , like due to nested promises.

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
}).then(() => {
  console.log(3);
});

const mypromise = async () => {
  const call = await promise1;
};
