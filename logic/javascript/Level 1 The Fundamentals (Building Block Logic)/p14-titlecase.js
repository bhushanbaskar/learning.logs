//14. Title Case a Sentence (capitalize first letter of each).  
function titlecase(sentence){  
    const words = sentence.split(" ");  
      
    for(let i = 0; i < words.length; i++){  
          
             words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);  
          
    }  
    return words.join(' ');  
}  
const mysentence = prompt("Enter a sentence: ");  
console.log(titlecase(mysentence));


//More polished version 
function titleCase(sentence) {
    if (!sentence) return "";

    return sentence
        .toLowerCase()
        .split(" ")
        .filter(word => word.length > 0)
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}