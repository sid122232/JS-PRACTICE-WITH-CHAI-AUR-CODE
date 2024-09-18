function addTwoNumber(number1,number2){
    if(typeof number1 === "number" && typeof number2 === "number"){
        return number1 + number2
    }
    else{
        return NaN
    } 
}
// console.log(addTwoNumber(1,2))


// rest operator(...name) weuse to convert rest of the values in array
//eg:
function finalizeCartValues(...num1){
    return num1
}
console.log(

    finalizeCartValues(122,23,4,5,666,88)
);
finalizeCartValues.array.forEach(element => {
    console.log(element)
});
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));