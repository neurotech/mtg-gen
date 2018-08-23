const fs = require("fs");
const Markov = require("markov-strings");

let cardsData = require("./cards.json");

const markovNames = new Markov(cardsData.cardNames, { minScore: 10 });
const markovFlavours = new Markov(cardsData.cardFlavours, { minScore: 100 });
// const markovTexts = new Markov(cardsData.cardTexts, { minScore: 100 });
// const markovArtists = new Markov(cardsData.cardArtists, { minScore: 1 });

markovNames.buildCorpusSync();
markovFlavours.buildCorpusSync();
// markovTexts.buildCorpusSync();
// markovArtists.buildCorpusSync();

const newName = markovNames.generateSentenceSync();
const newFlavour = markovFlavours.generateSentenceSync();
// const newText = markovTexts.generateSentenceSync();
// const newArtist = markovArtists.generateSentenceSync();

// console.log(JSON.stringify(newName, null, "  "));
// console.log(JSON.stringify(newText, null, "  "));
// console.log(JSON.stringify(newFlavour, null, "  "));
// console.log(JSON.stringify(newArtist, null, "  "));

console.log(
  markovNames.generateSentenceSync().string +
    "\n" +
    markovFlavours.generateSentenceSync().string
);
console.log(
  markovNames.generateSentenceSync().string +
    "\n" +
    markovFlavours.generateSentenceSync().string
);
console.log(
  markovNames.generateSentenceSync().string +
    "\n" +
    markovFlavours.generateSentenceSync().string
);
console.log(
  markovNames.generateSentenceSync().string +
    "\n" +
    markovFlavours.generateSentenceSync().string
);
