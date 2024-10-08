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

// Synchronous function calling an external API (simulated with setTimeout)
function synchronousApiCall() {
  console.log("Synchronous API call started");
  // Simulate a synchronous API call with a delay
  let startTime = Date.now();
  while (Date.now() - startTime < 2000) {} // Simulate a 2-second delay
  console.log("Synchronous API call finished");
}

// Asynchronous function calling an external API using fetch
async function asynchronousApiCall() {
  console.log("Asynchronous API call started");
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log("Asynchronous API call finished:", data);
  } catch (error) {
    console.error("Error during asynchronous API call:", error);
  }
}

// Asynchronous function with Promise and error handling
function asynchronousFuncPromiseWithErrorHandling(shouldResolve) {
  console.log("Asynchronous function with Promise and error handling started");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error
      if (shouldResolve) {
        resolve("Asynchronous operation with Promise finished successfully");
      } else {
        reject("Asynchronous operation with Promise failed");
      }
    }, 4000); // Simulate a 4-second delay
  });
}

synchronousApiCall();
asynchronousApiCall();
asynchronousFuncPromiseWithErrorHandling(true)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error caught:", error);
  });

asynchronousFuncPromiseWithErrorHandling(false)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error caught:", error);
  });

// Asynchronous function with async/await (using external API)
// Use async/await when you want to write asynchronous code that looks
// and behaves a bit more like synchronous code. It makes asynchronous
// code easier to read and reason about.
//
// `await` can only be used inside an `async` function.
async function asynchronousFuncWithAwait() {
  console.log("Asynchronous function with async/await started");
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log("Asynchronous API call finished with async/await:", data);
  } catch (error) {
    console.error("Error during asynchronous API call with async/await:", error);
  }
}

asynchronousFuncWithAwait();

console.log("Main thread continued");
