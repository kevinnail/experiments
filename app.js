const myButton = document.getElementById("button1");
const unPush = myButton.classList.toggle("pushed");

// const showText () => {
//   (for (let line = "#"; line.length < 8; line += "#")
//   console.log(line))};

myButton.addEventListener("click", () => {
  // console.log(showText);
  myButton.classList.toggle("pushed");
  // myButton.setTimeout(unPush, 1000);
  doThis();
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
// function doThis() {
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






