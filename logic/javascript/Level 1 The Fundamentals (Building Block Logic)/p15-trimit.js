//15. Remove whitespace from a string without .trim()
function trimit(str){
   let start = 0 , end = str.length-1;
   while(str[start] === ' ') start++;
   while(str[end] === ' ') end--;
   return str.slice(start, end+1);
}
const mystr = prompt("Enter a string :  ")
console.log('trimmed string is : ',trimit(mystr));