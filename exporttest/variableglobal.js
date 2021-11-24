
var viseth

console.log(viseth)
const add = (value1, value2) => {
    console.log('add')
    viseth = 'viseth'
    return value1 + value2
}
const subtract = (value1, value2, value3) => {
    console.log('subtract')

    return value3(value1, value2)
}

// c = add(1,3)
d = subtract(1,3, add)
// console.log(c)
console.log(d)
console.log(viseth)