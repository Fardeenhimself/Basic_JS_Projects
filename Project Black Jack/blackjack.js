const generateDeck = () => {
  const deck = [];
  const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

  for (const card of cards) {
    for (const suit of suits) {
      deck.push({ card: card, suit: suit });
    }
  }

  return deck;
};

const drawCard = (deck) => {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return card;
};

const checkScore = (hand) => {
  let total = 0;

  for (const cardObject of hand) {
    if (
      cardObject.card === "King" ||
      cardObject.card === "Queen" ||
      cardObject.card === "Jack"
    ) {
      total += 10;
    } else {
      if (cardObject.card === "Ace") {
        total += 1;
      } else {
        total += Number(cardObject.card);
      }
    }
  }
  return total;
};

const myDeck = generateDeck();
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

console.log("Starting Player Hand: ", playerHand);
console.log("Starting Player Score: ", checkScore(playerHand));
console.log("Starting Dealer Hand: ", dealerHand);
console.log("Starting Dealer Score: ", checkScore(dealerHand));

while (true) {
  playerHand.push(drawCard(myDeck));

  const playerScore = checkScore(playerHand);
  let dealerScore = checkScore(dealerHand);

  if (playerScore > 21) {
    console.log(
      `You lost!  Your score is ${playerScore}. Dealer scored ${dealerScore}.`
    );
    break;
  }
  if (playerScore === 21) {
    console.log(
      `You won! You scored ${playerScore}. Dealer scored ${dealerScore}`
    );
    break;
  }

  dealerHand.push(drawCard(myDeck));

  dealerScore = checkScore(dealerHand);

  if (dealerScore > 21) {
    console.log(
      `You Win!  Your score is ${playerScore}. Dealer scored ${dealerScore}.`
    );
    break;
  }

  if (dealerScore === 21) {
    console.log(
      `You win!  Your score is ${playerScore}. Dealer scored ${dealerScore}.`
    );
    break;
  }
}

console.log("Ending Player Hand: ", playerHand);
console.log("Ending Player Score: ", checkScore(playerHand));
console.log("Ending Dealer Hand: ", dealerHand);
console.log("Ending Dealer Score: ", checkScore(dealerHand));
