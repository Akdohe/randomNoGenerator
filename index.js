//Random number genrator

// const min = 50 ;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;


// console.log(randomNum);

const myButton = document.getElementById("myButton");

const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;

let randomNum1 ;
let randomNum2;
let randomNum3 ;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1 ;
    myLabel2.textContent = randomNum2 ;    
    myLabel3.textContent = randomNum3 ;

}












// //Math = built in object that provides a collection
// // of properties and methodes

// //Math.PI  console.log(Math.PI);

// let x = 3;

// // let x = -45;

// let y = 2;

// let z = 1;

// //z = Math.round(x);
// //z = Math.floor(y);
// //z = Math.ceil(x);
// //z = Math.trunc(x);
// //z = Math.pow(x,y)
// //z = Math.sqrt(x);
// //z = Math.log(x);
// //z = Math.sin(x);
// // z = Math.cos(x);
// //z = Math.sign(x);
// //let max = Math.max(x,y,z);

// let min = Math.min(x,y,z) ;


// console.log(min);




