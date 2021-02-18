// let promise = new Promise((reslove, reject) => {
//   console.log("abc");
// });

// promise
//   .then((respose) => {
//     respose;
//   })
//   .catch((error) => {
//     error;
//   });

/*------------------------Fetch data from API------------------------------------------------*/

userPromise = fetch("https://randomuser.me/api/");
console.log(userPromise);
userPromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById(
      "data"
    ).innerText = `Gender is ${data.results[0].gender}`;
  })
  .catch((error) => {
    console.log(error);
  });
