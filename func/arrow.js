const pipeline = (...funcs) =>
  val => funcs.reduce((a, b) => b(a), val);

const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);

const r = addThenMult(5);


const arr = [1,2,3];
console.log(arr.reduce((a, b) => a + b, 1));
console.log(r)
