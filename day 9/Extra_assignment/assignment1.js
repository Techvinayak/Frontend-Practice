const num1 = 5;
const num2 = 3;
function multiplyPositiveNumbers(a, b) {
  return new Promise((resolve, reject) => {
    if (a > 0 && b > 0) {
      resolve(a * b);
    } else {
      reject('Both numbers must be positive to perform multiplication.');
    }
  });
}
multiplyPositiveNumbers(num1, num2)
  .then(result => {
    console.log(`Multiplication result: ${result}`);
  })
  .catch(error => {
    console.log(`Error: ${error}`);
  });
