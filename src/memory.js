class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.cards = cards;
		this.pickedCards = [];
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
			return undefined;
		}
		this.cards.sort(() => Math.random() - 0.5);
		return this.cards;
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
		if (card1 === card2) {
			this.pairsGuessed++;
			return true;
		}
		return false;
    // ... write your code here
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
    // ... write your code here
  }
}
