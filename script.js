
//   function getAncients (ancients){
//     // console.log(arrAncions)
//     const {id, name, firstStage, secondStage, thirdStage } = arrAncions[ancients]
//     const {greenCards:firstGreen, blueCards:firstBlue,  brownCards:firstBrown} = firstStage
//     const {greenCards:secondGreen, blueCards:secondBlue,  brownCards:secondBrown} = secondStage
//     const {greenCards:thirdGreen, blueCards:thirdBlue,  brownCards:thirdBrown} = thirdStage
//     firstGreenStage.innerText = firstGreen
//     firstBrownStage.innerHTML = firstBrown
//     firstBlueStage.innerHTML = firstBlue

//     secondGreenStage.innerText = secondGreen
//     secondBrownStage.innerHTML = secondBrown
//     secondBlueStage.innerHTML = secondBlue

//     thirdGreenStage.innerText = thirdGreen
//     thirdBrownStage.innerHTML = thirdBrown
//     thirdBlueStage.innerHTML = thirdBlue
// }


const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
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
];


let deck = [];

for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

console.log('The first five cards are:');

for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}