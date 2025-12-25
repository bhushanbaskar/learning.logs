//Print Fibonacci from the 5th term to the 15th term
let n = Number(prompt("Enter N:"));

/*let t1 = 0;
 let t2 = 1;

for (let i = 1; i <= 15; i++) {
    
   if(i>=5) console.log(t1);        
    let next = t1 + t2;     
    t1 = t2;                
    t2 = next;
}*/
//using fibonacci
function fib(n) {
    if (n === 0) return 0;   // base case
    if (n === 1) return 1;   // base case

    return fib(n - 1) + fib(n - 2);
}
console.log(fib(n));
