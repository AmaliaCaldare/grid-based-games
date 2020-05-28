document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray =[ {
        name: 'apple',
        img: 'images/apple.png'
    },
    {
        name: 'apple',
        img: 'images/apple.png'
    },
    {
        name: 'banana',
        img: 'images/banana.png'
    },
    {
        name: 'banana',
        img: 'images/banana.png'
    },
    {
        name: 'blackberry',
        img: 'images/blackberry.png'
    },
    {
        name: 'blackberry',
        img: 'images/blackberry.png'
    },
    {
        name: 'cherry',
        img: 'images/cherry.png'
    },
    {
        name: 'cherry',
        img: 'images/cherry.png'
    },
    {
        name: 'pineapple',
        img: 'images/pineapple.png'
    },
    {
        name: 'pineapple',
        img: 'images/pineapple.png'
    },
    {
        name: 'strawberries',
        img: 'images/strawberries.png'
    },
    {
        name: 'strawberries',
        img: 'images/strawberries.png'
    },
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//create game board
    function createBoard() {
        for(let i=0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    
    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] == cardsChosen[1]){
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Sorry, try again')
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardsArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }
    //flip you card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})