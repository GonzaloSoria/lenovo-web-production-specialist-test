let word = 'neuquen'
let reverseWord = ''
let palindromeWord = []

const isPalindrome = () => {
    for (let i = word.length; i >= 0; --i) {
        reverseWord += [word[i]]
    }
    return reverseWord == word ? true : false    
}
console.log(isPalindrome(word));
