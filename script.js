import ancientsData from './data/ancients.js';
import cardsDataColor from './data/mythicCards/index.js';
let cardsData = cardsDataColor.blueCards.concat(cardsDataColor.greenCards).concat(cardsDataColor.brownCards);
let ancient = {};
let stack = [];
let array = [];
let newCardsData = [[],[],[]];
let deck = [[],[],[]];

const ANCIENT = document.querySelector ('.ancients');
const IMGANCIENT = document.querySelector ('.image-ancients');
ANCIENT.addEventListener ('change', () =>{
    for (let key in ancientsData) {
        if (ANCIENT.value === ancientsData[key].name) {
            ancient = ancientsData[key];
            IMGANCIENT.setAttribute('src', ancient.cardFace);
            
        }
    }
    array.push([ancient.firstStage.greenCards, ancient.firstStage.blueCards, ancient.firstStage.brownCards]);
    array.push([ancient.secondStage.greenCards, ancient.secondStage.blueCards, ancient.secondStage.brownCards]);
    array.push([ancient.thirdStage.greenCards, ancient.thirdStage.blueCards, ancient.thirdStage.brownCards]);   
});

const COMPLEXITY = document.querySelector ('.complexity');
COMPLEXITY.addEventListener ('change', () => {
    for (let h = cardsData.length - 1; h > 0; h--) {
      let j = Math.floor(Math.random() * (h + 1));
      [cardsData[h], cardsData[j]] = [cardsData[j], cardsData[h]];
    }

    if (COMPLEXITY.value === 'very-easy'){
      for (let key of cardsData) {
          if (key.color === 'green' && key.difficulty === 'easy') {newCardsData[0].push(key)};
          if (key.color === 'blue' && key.difficulty === 'easy') {newCardsData[1].push(key)};
          if (key.color === 'brown' && key.difficulty === 'easy') {newCardsData[2].push(key)};
      }
      
      for (let i = 0; i < 3; i++) {
        let sumCard = array[0][i] + array[1][i] + array[2][i];
        if (sumCard > newCardsData[i].length) {
            if (i === 0) {
              let n = sumCard - newCardsData[i].length;
              for (let key of cardsData) {
                if (key.color === 'green' && key.difficulty === 'normal' && n > 0) {
                  newCardsData[i].push(key);
                  n--;
                }
              }
            }
            if (i === 1) {
              let n = sumCard - newCardsData[i].length;
              for (let key of cardsData) {
                if (key.color === 'blue' && key.difficulty === 'normal' && n > 0) {
                  newCardsData[i].push(key);
                  n--;
                }
              }
            }
            if (i === 2) {
              let n = sumCard - newCardsData[i].length;
              for (let key of cardsData) {
                if (key.color === 'brown' && key.difficulty === 'normal' && n > 0) {
                  newCardsData[i].push(key);
                  n--;
                }
              }
            }
        }
      }
    };  
    if (COMPLEXITY.value === 'easy'){
      for (let key of cardsData) {
        if (key.color === 'green' && key.difficulty !== 'hard') {newCardsData[0].push(key)};
        if (key.color === 'blue' && key.difficulty !== 'hard') {newCardsData[1].push(key)};
        if (key.color === 'brown' && key.difficulty !== 'hard') {newCardsData[2].push(key)};
      }
    };
    if (COMPLEXITY.value === 'normal'){
      for (let key of cardsData) {
          if (key.color === 'green') {newCardsData[0].push(key)};
          if (key.color === 'blue') {newCardsData[1].push(key)};
          if (key.color === 'brown') {newCardsData[2].push(key)};
      }
    };
    if (COMPLEXITY.value === 'high'){
      for (let key of cardsData) {
          if (key.color === 'green' && key.difficulty !== 'easy') {newCardsData[0].push(key)};
          if (key.color === 'blue' && key.difficulty !== 'easy') {newCardsData[1].push(key)};
          if (key.color === 'brown' && key.difficulty !== 'easy') {newCardsData[2].push(key)};
      }
    };
    if (COMPLEXITY.value === 'very-high'){
      for (let key of cardsData) {
          if (key.color === 'green' && key.difficulty === 'hard') {newCardsData[0].push(key)};
          if (key.color === 'blue' && key.difficulty === 'hard') {newCardsData[1].push(key)};
          if (key.color === 'brown' && key.difficulty === 'hard') {newCardsData[2].push(key)};
      }
      for (let i = 0; i < 3; i++) {
        let sumCard = array[0][i] + array[1][i] + array[2][i];
        if (sumCard > newCardsData[i].length) {
        
            if (i === 0) {
              let n = sumCard - newCardsData[i].length;
              for (let key of cardsData) {
                if (key.color === 'green' && key.difficulty === 'normal' && n > 0) {
                  newCardsData[i].push(key);
                  n--;
                }
              }
            }
            if (i === 1) {
              let n = sumCard - newCardsData[i].length;
              for (let key of cardsData) {
                if (key.color === 'blue' && key.difficulty === 'normal' && n > 0) {
                  newCardsData[i].push(key);
                  n--;
                }
              }
            }
            if (i === 2) {
              let n = sumCard - newCardsData[i].length;
              for (let key of cardsData) {
                if (key.color === 'brown' && key.difficulty === 'normal' && n > 0) {
                  newCardsData[i].push(key);
                  n--;
                }
              }
            }
        }
      }
    };

    for (let i = 2; i >= 0; i--) {
        for (let n = 2; n >= 0 ; n--){
            for (let l = 0; l < array[i][n]; l++) {
              let number = Math.floor(Math.random() * (newCardsData[n].length));
              deck[i].push(newCardsData[n][number]);
              newCardsData[n].splice(number, 1);
            }
        }
        for (let h = deck[i].length - 1; h > 0; h--) {
          let j = Math.floor(Math.random() * (h + 1));
          [deck[i][h], deck[i][j]] = [deck[i][j], deck[i][h]];
        }
    }

for (let i = 0; i < 3; i++)
    for (let j = 0; j < deck[i].length; j++) {
      stack.push(deck[i][j]);
    }
    imageCards();

});

const firstOne = document.querySelector ('.first-one');
const firstTwo = document.querySelector ('.first-two');
const firstThree = document.querySelector ('.first-three');
const secondOne = document.querySelector ('.second-one');
const secondTwo = document.querySelector ('.second-two');
const secondThree = document.querySelector ('.second-three');
const thirdOne = document.querySelector ('.third-one');
const thirdTwo = document.querySelector ('.third-two');
const thirdThree = document.querySelector ('.third-three');

function imageCards() {
  firstOne.textContent = array[0][0];
  firstTwo.textContent = array[0][1];
  firstThree.textContent = array[0][2];
  secondOne.textContent = array[1][0];
  secondTwo.textContent = array[1][1];
  secondThree.textContent = array[1][2];
  thirdOne.textContent = array[2][0];
  thirdTwo.textContent = array[2][1];
  thirdThree.textContent = array[2][2];
};

const selectCard = document.querySelector ('.select-card');
const deckCard = document.querySelector ('.deck');
let number = 0;
let n = 0;
let sum = 0;
selectCard.addEventListener ('click', () => {
  if (number !== stack.length - 1) {
    sum = array[n][0] + array [n][1] + array [n][2];    
        if (sum !== 0) {
          deckCard.setAttribute('src', stack[number].cardFace);
          if (stack[number].color === 'green') {array[n][0]--}
          if (stack[number].color === 'blue') {array[n][1]--}
          if (stack[number].color === 'brown') {array[n][2]--}
          imageCards();
          number++;
        } else {
          alert (`Round ${n+1} is over`);
          n++;
        }     
  } else {
    if (stack[number].color === 'green') {array[n][0]--}
    if (stack[number].color === 'blue') {array[n][1]--}
    if (stack[number].color === 'brown') {array[n][2]--}
    imageCards();
    alert ('Game Is Over');
  }
});

