// 1st way
// let n = parseInt(prompt("Enter the number of elements in the array:"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr[i] = parseInt(prompt(`Enter element ${i + 1}:`));
// }
// console.log("Array elements:", arr);

// let max= arr[1];
// for(let i=0;i<n;i++){
//       if(arr[i]>max){
//         max=arr[i];
//         break;
//       }       
//       console.log("The max value is: "+ max);
// }

//2nd way

// const arr = [10, 20, 21, 18, 5];

// let largest = arr[1];

// arr.forEach(Element => {
//     if (Element > largest) {
//         largest = Element;
//     }
// });
// console.log("Largest no is: ", largest);

//3rd way

function findLargest(arr){
    arr.sort((a,b)=> a-b);

    return arr[arr.length -1];
}

let arr=[10,20,5,8];
console.log("Largest no is: ", findLargest(arr));