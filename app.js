const fs = require("fs");
const tiny = require("tiny-json-http");

const url = "https://api.magicthegathering.io/v1/";
const cardsPath = "cards?page=";

let cards = {
  cardNames: [],
  cardTexts: [],
  cardFlavours: [],
  cardArtists: []
};
let i = 1;

const getCards = i => {
  tiny.get({ url: url + cardsPath + i }, (err, res) => {
    if (err) return err;

    if (res.body.cards.length > 0) {
      res.body.cards.forEach(element => {
        if (element.name) cards.cardNames.push(element.name);
        if (element.text) cards.cardTexts.push(element.text);
        if (element.flavor) cards.cardFlavours.push(element.flavor);
        if (element.artist) cards.cardArtists.push(element.artist);
      });
      console.log(`Captured page ${i}.`);
      getCards(i + 1);
    } else {
      fs.writeFileSync("./cards.json", JSON.stringify(cards, null, "  "));
      console.log(`Captured all pages.`);
    }
  });
};

getCards(i);
