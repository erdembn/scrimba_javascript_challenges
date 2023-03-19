const studentCount = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];

function sumArray(arr) {
    return arr.reduce((acc, value) => acc += value, 0)
}

// function sumArray(arr) {
//     let totalCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         totalCount += arr[i];
//     }
//     return totalCount;
// }

console.log(sumArray(studentCount));
console.log(sumArray([1, 2, 3]))