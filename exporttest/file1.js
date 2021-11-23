add = (value1, value2) => {
    console.log('add')
    return value1 + value2
}
subtract = (value1, value2) => {
    console.log('subtract')

    difference = value1 - value2
    return difference
}
module.exports = {add, subtract}