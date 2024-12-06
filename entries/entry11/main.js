document.addEventListener('DOMContentLoaded', function () {
  let headlines = document.querySelectorAll("h1");
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8C00', '#4B0082', '#00FFFF'];

  headlines.forEach(function (headline) {
      headline.addEventListener('click', function () {
          let randomColor = colors[Math.floor(Math.random() * colors.length)];
          headline.style.color = randomColor;  // This will change the color of the clicked <h1>
      });
  });
});
