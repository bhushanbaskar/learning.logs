//13. Find the longest word in a sentence
function longestword(sentence){
    const words = sentence.split(" ");
    let longest = "";
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longest.length){
            longest = words[i];
        }
    }
    return `${longest} \nwith length = ${longest.length}`;
}
const mysentence = prompt("Enter a sentence: ");
console.log(`longest word is : ${longestword(mysentence)}`)