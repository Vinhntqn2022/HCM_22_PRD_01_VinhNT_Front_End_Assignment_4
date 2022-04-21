
function findMaxNumber(numbers) {
    const maxNumber = numbers.reduce((accumulator, element) => {
        if(element > accumulator) {
            accumulator = element
        }
        return accumulator
    }, 0)
    return maxNumber
}
function findMinNumber(numbers) {
    const minNumber = numbers.reduce((accumulator, element) => {
        if(element < accumulator) {
            accumulator = element
        }
        return accumulator
    }, numbers[0])
    return minNumber
}
function getUniqueNumberArray(numbers) {
    const uniqueNumbers = numbers.reduce((accumulator, element) => {
        if(accumulator.indexOf(element) === -1) {
            accumulator.push(element)
        }
        return accumulator
    }, [])
    return uniqueNumbers;
}
function countOccurrencesNumberInArray(numbers, x) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] == x) {
            count++
        }
    }
    return count
}
function countOccurrencesAllElementOfArray(numbers) {
    const inputUniqueNumbers = getUniqueNumberArray(numbers);
    return inputUniqueNumbers.map(element => {
        return countOccurrencesNumberInArray(numbers, element)
    }) 
}

function convertTo2demensionArray(numbers){
    const inputUniqueNumbers = getUniqueNumberArray(numbers)
    return inputUniqueNumbers.map(element => {
        return [element, countOccurrencesNumberInArray(numbers, element)]
    })
}
// viết function tìm ra phần tử xuất hiện nhiều nhất trong mảng
function getTheMostAppearedElement(numbers) {
    const theMostAppearedElement = [];
    const appearedAllElementArray = countOccurrencesAllElementOfArray(numbers)
    const maxOccurences = findMaxNumber(appearedAllElementArray);
    const twoDemensionArray = convertTo2demensionArray(numbers);
    for(let i = 0; i < twoDemensionArray.length; i++) {
        if(twoDemensionArray[i][1] == maxOccurences) {
            theMostAppearedElement.push(twoDemensionArray[i][0])
        }
    }
    return theMostAppearedElement
}
// viết function tìm ra phần tử xuất hiện không phải nhiều nhất cũng không phải ít nhất trong mảng
function getNotMostAndLeastElements(numbers) {
    const theNotMostAndLeastElements = [];
    const appearedAllElementArray = countOccurrencesAllElementOfArray(numbers)
    const maxOccurences = findMaxNumber(appearedAllElementArray);
    const minOccurences = findMinNumber(appearedAllElementArray)
    const twoDemensionArray = convertTo2demensionArray(numbers);
    for(let i = 0; i < twoDemensionArray.length; i++) {
        if(twoDemensionArray[i][1] < maxOccurences && twoDemensionArray[i][1] > minOccurences) {
            theNotMostAndLeastElements.push(twoDemensionArray[i][0])

        }
    }
    return theNotMostAndLeastElements
}
const inputNumbers1 = [1, 2, 3, 1, 2, 1, 1];
const inputNumbers2 = [1, 2, 3, 1, 2, 1, 1, 2, 2]
const inputNumbers3 = [1, 2, 3, 1, 2, 1, 1]
const inputNumbers4 = [1, 2, 3, 1, 2, 7, 7, 1, 1, 4, 5]

console.log('phần tử xuất hiện nhiều nhất trong mảng inputNumbers1 la:')
console.log( getTheMostAppearedElement(inputNumbers1))
console.log('phần tử xuất hiện nhiều nhất trong mảng inputNumbers2 la:')
console.log( getTheMostAppearedElement(inputNumbers2))
console.log(' phần tử xuất hiện không phải nhiều nhất cũng không phải ít nhất trong mảng inputNumbers3 là:')
console.log(getNotMostAndLeastElements(inputNumbers3))
console.log(' phần tử xuất hiện không phải nhiều nhất cũng không phải ít nhất trong mảng inputNumbers4 là:')
console.log(getNotMostAndLeastElements(inputNumbers4))
