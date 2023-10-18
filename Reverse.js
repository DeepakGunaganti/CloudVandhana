//1. reverse every word in sentence//

function reverseWordsInSentence(sentence){
    const Words = sentence.split(' ')
    const reversedWords = Words.map(word => {
        return word.split('').reverse().join('')
    })
    const reversedSentence = reversedWords.join(' ')
    return reversedSentence
}

const inputSentence = "This is a Sunny day "
const reversedSentence = reverseWordsInSentence(inputSentence)
console.log(reversedSentence)

// 2. sorting of array in descending order//

function sortingarray(arr){
   return arr.sort((a,b) => b-a)
}
const Inputarray = [5,2,9,1,5,6]
const array = sortingarray(Inputarray)
console.log(array)
