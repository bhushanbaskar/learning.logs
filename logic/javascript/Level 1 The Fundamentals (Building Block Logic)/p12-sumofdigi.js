//12. Calculate sum of digits in a number (e.g., 123 -> 6).
function sumofdigi(n){
    n = Math.abs(n).toString();
    let sum = 0;
    for(let ch of n){
        if(ch >= '0' && ch<='9') sum += Number(ch);
        
    }
    return sum;
}
console.log(sumofdigi(1.2e5))