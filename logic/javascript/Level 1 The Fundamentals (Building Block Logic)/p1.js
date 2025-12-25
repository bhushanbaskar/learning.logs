//1. Swap two variables without a third variable.
let a = 10,b=20;

/*let temp =a ;
a = b;
b = temp;
console.log(a,b)*/

/*a = a+b ; //a=30
b= a -b; //b = 10;
a = a - b; // a = 20;
console.log(a,b);*/

/*a = a/b ; //a=1/2
b= a *b; //b = 10;
a = b/a; // a = 20;
console.log(a,b);*/

//Most SAFE Method in JavaScript is
[a,b] = [b,a];
console.log(a,b);