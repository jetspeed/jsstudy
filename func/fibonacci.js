function Fibonacci(n) {
  if (n <= 1) {return 1;}
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

function Fibonacci2(n, ac1 = 1, ac2 = 1){
  if(n <=1){return ac2};
  return Fibonacci2(n - 1, ac2, ac1+ac2);
}

console.log(Fibonacci(10));
console.log(Fibonacci2(1000));
