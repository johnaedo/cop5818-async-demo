// Synchronous function
function synchronousFunc() {
  console.log("Synchronous function started");
  // Perform some synchronous operation
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  console.log("Synchronous function finished: " + sum);
}

// Asynchronous function using setTimeout
function asynchronousFunc() {
  console.log("Asynchronous function started");
  setTimeout(() => {
    console.log("Asynchronous operation finished");
  }, 2000); // Simulate a 2-second delay
  console.log("Asynchronous function continued");
}

// Asynchronous function using Promise
function asynchronousFuncPromise() {
  console.log("Asynchronous function with Promise started");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Asynchronous operation with Promise finished");
    }, 3000); // Simulate a 3-second delay
  });
}

// Call the functions
synchronousFunc();
asynchronousFunc();
asynchronousFuncPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("Main thread continued");
