notes = "EXP:2022-02-26,RCR:f,LMT:500,CNT:501"

console.log(notes)

noteswithoutcnt = notes.slice(0,33)
console.log(noteswithoutcnt)
console.log('noteswithoutcount')
cnt = notes.slice(33);
lmt = notes.slice(25, 28);
rcr = notes.slice(19, 20);
exp = notes.slice(4, 14);

console.log(exp)
console.log(rcr)
console.log(lmt)

console.log(cnt)
integerCnt = parseInt(cnt)
console.log(integerCnt)
console.log(typeof integerCnt)

// integerCnt++
console.log(integerCnt)
IncrementedCnt = String(integerCnt+1)
console.log(IncrementedCnt)
console.log(typeof IncrementedCnt)



newString = (noteswithoutcnt + IncrementedCnt)

console.log(newString)
console.log('thisis the finalstring')