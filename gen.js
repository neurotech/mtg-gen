const Markov = require("markov-strings");

let cardsData = require("./cards.json");

const markovNames = new Markov(cardsData.cardNames, { minScore: 10 });
const markovFlavours = new Markov(cardsData.cardFlavours, { minScore: 100 });
const markovTexts = new Markov(cardsData.cardTexts, { minScore: 100 });
const markovArtists = new Markov(cardsData.cardArtists, { minScore: 1 });

markovNames.buildCorpusSync();
markovFlavours.buildCorpusSync();
markovTexts.buildCorpusSync();
markovArtists.buildCorpusSync();

console.log(
  markovNames.generateSentenceSync().string +
    "\n" +
    markovFlavours.generateSentenceSync().string
);
console.log("");

console.log(
  markovNames.generateSentenceSync().string +
    "\n" +
    markovFlavours.generateSentenceSync().string
);
console.log("");

console.log(
  markovNames.generateSentenceSync().string +
    "\n" +
    markovFlavours.generateSentenceSync().string
);
console.log("");

console.log(
  markovNames.generateSentenceSync().string +
    "\n" +
    markovFlavours.generateSentenceSync().string
);
console.log("");
