const myButton = document.getElementById("button1");
const unPush = myButton.classList.toggle("pushed");

// const showText () => {
//   (for (let line = "#"; line.length < 8; line += "#")
//   console.log(line))};

myButton.addEventListener("click", () => {
  myButton.classList.toggle("pushed");
  setTimeout(doThis,150);
  // myButton.classList.toggle("pushed");
  // doThis();
  
});



// IMPORTANT since I have a button to push to engage code, all 
// experiments must have code inside the doThis function!!!

// function doThis() {
//// put function here:

// }

//-------------------------------------------------------------

// write 1-100 to console log; if divisible by 3 print fizz
// if divisible by 5 print buzz, if divisible by both print
// fizzbuzz, if neither print the number

// let line = 1;
// function` doThis() {
//   for (line; line <= 100; line++){
//     let output ="";
//     if(line % 3 == 0) output += "fizz";
//     if(line % 5 == 0) output += "buzz";
//     console.log(output || line);
//   } 
  
// }

//------------------------------------------------------------

// write function = to math.min to find the minimum number between
// 2 numbers and returns the smaller argument

// const a = -23
// const b = -9

// function doThis() {
//   // function myMathMin (a,b){
// // put function here:
// // let c=a+b;
// let output = 0
//   if (a<b) output = a;
//   else output= b;
//   console.log (output);
// };


// function calling another function with a function- note passing 
// arguments 
// const a = 2
// const b = 5

// function myMathMin (y,z){
// 	let c=y+z;
// 	//console.log (c);
//   return c;
// };

// function doThis() {
//    myButton.classList.toggle("pushed");

//   console.log(myMathMin(a,b));
// }; 


//------------------------------------------------------------




function doThis() {
   myButton.classList.toggle("pushed");


const myImage = document.getElementById("myImage");
let start = Date.now(); // remember start time
let timer = setInterval(function () {
  // how much time passed from the start?
  let timePassed = Date.now() - start;

  if (timePassed >= 3000) {
    clearInterval(timer); // finish the animation after 2 seconds
    return;
  }
  // draw the animation at the moment timePassed
  draw(timePassed);
}, 1);

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePassed) {
  // myImage.style.left = timePassed / 1 + "px";
  myImage.style.rotate = timePassed / 2 + "deg";
}



}; 


