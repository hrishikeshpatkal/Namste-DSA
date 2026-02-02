// function isEvenOdd(number) {
//     if (typeof number !== 'number' || !Number.isInteger(number)) {
//         throw new Error('Input must be an integer.');
//     }
//     return number % 2 === 0 ? 'Even' : 'Odd';
// }

// module.exports = isEvenOdd;

// Example usage:
// console.log(isEvenOdd(4)); // Output: 'Even'
// console.log(isEvenOdd(7)); // Output: 'Odd'

// Search element index in given array 


// function searchElement(arr, x) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == x) {
//             return i
//         }
//     }
//     return -1
// }
// let arr = [1, 2, 11, 3, 4, 5, 6, 7, 8]

// console.log(searchElement(arr, 11));


// write a function that return the number of negative element of array

// let arr = [1, -2, 3, -4, -5, 6, -7, 8, 9, -10]

// function countNegativeElements(arr){
//     let count = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] < 0){
//             count = count + 1
//         }
//     }
//     return count;
// }
// console.log(countNegativeElements(arr));


//  find the largest element in an array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function findLargestElement(arr) {
//     let largest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     return largest;
// }

// console.log(findLargestElement(arr));

// there somthing which is define largest and smallest in integer in javascript - Infinity and Infinity

// find the smallest element in an array 
// let arr = [1, 2, 3, 4, 5, 6, -7, 8, 9, 10]

// function findSmallestElement(arr) {
//     let smallest = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i]
//         }
//     }
//     return smallest;
// }

// console.log(findSmallestElement(arr));

// write a function that return second largest element in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   
function findSecondLargestElement(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(findSecondLargestElement(arr));
