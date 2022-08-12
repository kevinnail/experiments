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




// let line = 1;
// function doThis() {
//   for (line; line <= 100; line++){
//     let output ="";
//     if(line % 3 == 0) output += "fizz";
//     if(line % 5 == 0) output += "buzz";
//     console.log(output || line);
//   } 
  
// }












