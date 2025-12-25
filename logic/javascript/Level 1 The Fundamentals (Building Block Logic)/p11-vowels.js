//11. Count vowels in a string.

const mystr= prompt("Enter a string : ").toLowerCase();
if(!mystr) {console.log('0'); return;}
const vowels = ['a','e','i','o','u'];
let count= 0;
for(let i=0;i<mystr.length;i++){
    /*if(mystr[i] == 'a'||
       mystr[i] == 'e'||
       mystr[i] == 'i'||
       mystr[i] == 'o'||
       mystr[i] == 'u'
       ){
           count++;
       }*/
       
       if(vowels.includes(mystr[i])) count++;
}

console.log(count);