//mdn example

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumul1or, currentValue) => accumulator + currentValue, // first time accumulator is = initial value . IInd time accumultaor is = sum of accumulator +inital value and further the loop continue//
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10


// practice
const numbers = [ 1,2,3,4,5,6,7];
const total = numbers.reduce(function(acc,curValue){
    console.log(`acc: ${acc} & curValue is ${curValue}`)
    return acc+curValue
},0)
console.log(total);
