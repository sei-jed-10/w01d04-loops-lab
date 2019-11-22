// ## Print every number from 0 to 10
var number = new Array(10);
for (var i = 0; i < 10; i++) {
    number[i] = i + 1; 
    console.log(number[i]);
}


// Print every number from 10 to 0
var number = new Array(10);
for (var i = 10; i >= 0; i--) {
    number[i] = i; 
    console.log(number[i]);
}

// Print every number from 4 to -16
for (var i =4; i >=-16; i--) {

    console.log(i);
}


// Print every fifth number from 8 to 41
for (var i = 8; i <= 40; i+=5) {
 console.log(i);
}

// The classic Fizzbuzz Program
for (var i= 0; i<=100; i++ ){
if ((i%3 == 0) && (i%5 ==0)){
console.log("Fizzybuzz");
}else if(i%3 == 0){
console.log("Fizzy");
}else if(i%5 ==0){
console.log("Buzz");
}
}


// The even/odd reporter
for (i =0; i <= 20; i++){
if (i%2 == 0){
console.log(`${i} is even`);
}else{
console.log(`${i} is odd`);
}
}

// Multiplication Tables
var multiply=0; 
for ( i =0; i <= 10; i++){
multiply= i*9;  

console.log(`${i}*9 = ${multiply}`);
}