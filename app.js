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


function doThis() {
  for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
}



// function handleSubmit() {
//   // questionContainer.classList.toggle('hide');
//   questionContainer.classList.add("fade-out");
//   fortuneContainer.classList.toggle("hide");
//   fortuneContainer.classList.add("fade-in");
//   const randNum = Math.floor(Math.random() * answers.length);
//   const randomAnswer = answers[randNum];
//   console.log(randomAnswer);
//   result.textContent = randomAnswer;
// }
