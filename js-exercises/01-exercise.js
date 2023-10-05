let numberList = [1,3,6,7,9,44,101,1200]
let pairNumbers = []

const getPairNumbers = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 == 0) {
            pairNumbers = [...pairNumbers, array[i]]
        }
    }
}
getPairNumbers(numberList)
console.log(pairNumbers);
