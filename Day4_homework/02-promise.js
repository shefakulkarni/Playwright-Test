
function fetchDataFromDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = true; 

      if (data) {
        resolve("Data fetched successfully!");
      } else {
        reject("Data not found!");
      }
    }, 3000); 
  });
}


fetchDataFromDatabase()
  .then((message) => {
    console.log(message); // Output if resolved
  })
  .catch((error) => {
    console.error(error); // Output if rejected
  });
