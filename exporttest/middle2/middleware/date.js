const current = new Date("2021-12-01");
const expire = new Date("2021-11-01");


console.log(current)
console.log(expire)

if(expire>current){
    console.log('current date is expired')
} else {
    console.log('current date is valid?')
}