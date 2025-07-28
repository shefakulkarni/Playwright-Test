
function conditionalPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = Math.random(); // Add () to call the function

      if (data > 0.5) {
        resolve("Resolved successfully");
      } else {
        reject("Rejected");
      }
    }, 3000); // 3-second delay
  });
}

conditionalPromise()
  .then((message) => {
    console.log(message); // Output if resolved
  })
  .catch((error) => {
    console.error(error); // Output if rejected
  });
