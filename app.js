const myButton = document.getElementById("button1");

myButton.addEventListener("click", () => {
  console.log("My javascript is working.");
 myButton.classList.toggle("pushed");

});




// soda.addEventListener("click", () => {
//   console.log("clicking");
//   soda.classList.toggle("picked");
//   if (soda.classList.contains("picked")) {
//     numberOfItems = numberOfItems + 1;
//   } else {
//     numberOfItems = numberOfItems - 1;
//   }

//   items.textContent = " " + numberOfItems;
// });
