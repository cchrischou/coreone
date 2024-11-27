// button for word reveal

// let button = document.querySelector(".button");
// let wrapper = document.querySelector(".wrapper");
// button.addEventListener("click", function(event) {
//   console.log(event, event.target);
//   let newItem = document.createElement("div");
//   newItem.classList.add("new-content");
//   newItem.innerHTML = "Not Now";
//   wrapper.appendChild(newItem);
// });

// blob button 

// let blobs = document.querySelectorAll(".blob");
// let container = document.querySelector(".wrapper");
// // place our blobs randomly
// blobs.forEach(function (blob) {
//   blob.style.right = (100 * Math.random()) + '%';
//   blob.style.top = (100 * Math.random()) + '%';
// });
// container.addEventListener("click", function (event) {
//   if (event.target.classList.contains("blob")) {
//     event.target.remove();
//   }
// });

// new color


// let button = document.querySelector(".button");
// let colors = ["#255c34", "#726756", "#703a56", "#953e00"];
// let body = document.querySelector("body");

// function newColor() {
//   let randIndex = Math.floor(Math.random() * colors.length);
//   let randColor = colors[randIndex];
//   body.style.backgroundColor = randColor;
// }

// button.addEventListener("click", newColor);

let button = document.querySelector(".button");

// Add more custom colors
let colors = [
  "#070b34",  // greenish
  "#141852",  // brownish
  "#2b2f77",  // purple
  "#483475",  // orange
  "#6b4984",  // navy blue
];

let body = document.querySelector("body");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);  // Random index
  let randColor = colors[randIndex];  // Get random color from the array
  body.style.backgroundColor = randColor;  // Apply it to the body background
}

button.addEventListener("click", newColor);  // Trigger the color change on button click



