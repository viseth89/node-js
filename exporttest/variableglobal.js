
var viseth

console.log(viseth)

const math = (value1, value2, value3) => {
    console.log('math')

    return value3(value1, value2)
}

const add = (value1, value2) => {
    console.log('add')
    viseth = 'viseth'
    return value1 + value2
}

const subtract = (value1, value2) => {
    console.log('subtract')

    return (value1 - value2)
}
const multiply = (value1, value2) => {
    console.log('subtract')

    return (value1 * value2)
}
const divide = (value1, value2) => {
    console.log('subtract')

    return (value1 / value2)
}

// c = add(1,3)
d = math(1,3, add)
e = math(9,8, subtract)
f = math(2,3, multiply)
// console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(viseth)