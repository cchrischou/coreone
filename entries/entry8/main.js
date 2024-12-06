let board = document.getElementById('board');
let resetBtn = document.getElementById('resetBtn');

let cards = [];
let shuffledCards = [];  
let flippedCards = [];
let matchedCards = 0;
let totalCards = 0;

fetch('cards.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    cards = data.cards;
    totalCards = cards.length * 2;
    startGame();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function startGame() {
  matchedCards = 0;
  flippedCards = [];

  clearBoard();
  shuffleCards();  


  shuffledCards.forEach((card, index) => {
    const cardElement = createCardElement(card, index);
    board.appendChild(cardElement);
  });
}

function clearBoard() {
  board.innerHTML = '';  
}

function shuffleCards() {

  shuffledCards = [...cards, ...cards];  
  shuffledCards.sort(() => Math.random() - 0.5);  
}

function createCardElement(card, index) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.dataset.id = index;

  cardElement.innerHTML = `
    <div class="front">
      <span>?</span> <!-- You can replace this with a symbol or number -->
    </div>
    <div class="back">
      <img src="${card.image}" alt="Card Back">
    </div>
  `;

  cardElement.addEventListener('click', () => flipCard(cardElement));

  return cardElement;
}

function flipCard(cardElement) {
  if (flippedCards.length === 2 || cardElement.classList.contains('flipped')) {
    return;
  }

  cardElement.classList.add('flipped');
  flippedCards.push(cardElement);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  const [firstCard, secondCard] = flippedCards;
  const firstCardImage = firstCard.querySelector('.back img').src;
  const secondCardImage = secondCard.querySelector('.back img').src;

  if (firstCardImage === secondCardImage) {
    matchedCards++;
    flippedCards = [];
    if (matchedCards === cards.length) {  
      alert('You Win! Congratulations!');
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }
}

resetBtn.addEventListener('click', startGame);
