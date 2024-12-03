let currentPage = window.location.pathname.split('/').pop();
let pageNumber = parseInt(currentPage.replace(/[^0-9]/g, '')); 

const totalPages = 20; 

let prevPageNumber = pageNumber > 1 ? pageNumber - 1 : totalPages;  
let nextPageNumber = pageNumber < totalPages ? pageNumber + 1 : 1;    

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.href = `coreone/new/entries/entry${prevPageNumber}/entry${prevPageNumber}.html`;
nextButton.href = `coreone/new/entries/entry${nextPageNumber}/entry${nextPageNumber}.html`;



let headlines = document.querySelectorAll("h1");
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8C00', '#4B0082', '#00FFFF'];

headlines.forEach(function (headline) {
  headline.addEventListener('click', function (event) {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    headline.style.color = randomColor;
  });
});


