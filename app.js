const fs = require("fs");
const Markov = require("markov-strings");
const tiny = require("tiny-json-http");

const url = "https://api.magicthegathering.io/v1/";
const cardsPath = "cards?page=";

let cards = [];
let i = 1;

const getCards = i => {
  tiny.get({ url: url + cardsPath + i }, (err, res) => {
    if (err) return err;

    if (res.body.cards.length > 0) {
      res.body.cards.forEach(element => {
        cards.push({
          name: element.name,
          flavor: element.flavor || "",
          artist: element.artist || ""
        });
      });
      console.log(`Captured page ${i}.`);
      getCards(i + 1);
    } else {
      fs.writeFileSync("./cards.json", JSON.stringify(cards, null, "  "));
      console.log(`Captured all pages.`);
      console.log(`Size of collection: ${cards.length}`);
    }
  });
};

getCards(i);
