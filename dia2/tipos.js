let word = 'JavaScript'

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)

let js = 'JavaScript'
let py = 'Python'

console.log(js == py) 

let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)

let idade = 35
let peso = 72
const PI = 3.14

// MATH: Arredondando para o número mais próximo
// randomNum: Gerador de número aleatório


// String
let espaco = ' '
let nome = 'Luis'
let sobreNome = 'Filho'

// Concatenação
let nomeCompleto = nome + espaco + sobreNome
console.log(nomeCompleto)

// Métodos de String
// length: retorna o número de caractere em uma string incluindo espaços

let meuNome = 'Luis de Sousa Lima Filho'
console.log(meuNome.length)

// Manipulação de String
let string = 'JavaScript'
let firstLetter = string[0] // J

let lastIndex = string.length - 1
console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

//toUpperCase
console.log(string.toUpperCase())     // JAVASCRIPT

//toLowerCase
console.log(string.toLowerCase())     // javascript

//substr
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

//split
let string = '30 Days Of JavaScript'
console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

//includes
let string = '30 Days Of JavaScript'
console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!

//replace
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

//Checar tipo de dado
let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object