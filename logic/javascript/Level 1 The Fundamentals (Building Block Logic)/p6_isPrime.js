// Check if a number is Prime.
//2,3,5,7,11,13....
function isPrime(n){
    if(!Number.isInteger(n)) return false;
    if(n<2) return false;
    if(n===2) return true;
    if(n%2===0) return false;
    
        
    for(let i=3;i*i<=n;i+=2){
        if(n%i===0) return false;
    }
    
    return true;
}
console.log(isPrime(2.5));