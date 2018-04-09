function* helloworldGenerator(){
  yield 'hello'
  yield 'world'
  return 'ending'
}

var h = helloworldGenerator();

console.log(h.next())
console.log(h.next())
console.log(h.next())


function* gen(){
  yield 123 + 456
}

console.log(gen())
console.log(gen().next())



function* Fibonacci(){
  let [prev, cur] = [0,1]
  for(;;){
    [prev, cur] = [cur, prev+cur]
    yield cur
  }
}

for(let n of Fibonacci()){
  if (n > 1000) break;
  console.log(n);
}
