const { Product } = require("./Product");
const { config } = require("../config");

const getVelocityWeight = (sellIn) => {
  if (sellIn <= 5) return 3;
  if (sellIn <= 10) return 2;
};

class SpecialFullCoverageProduct extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    if (this.sellIn <= 0) return this.price = 0;

    const weight = getVelocityWeight(this.sellIn);
    const priceVelocity = config.priceVelocity * weight;

    // update price if allowed
    const newPrice = this._calculateNewPrice(priceVelocity);
    this.setPrice(newPrice);
    
    this._decrementSellIn();
    return this.price;
  }

  _calculateNewPrice(priceVelocity) {
    return this.price + priceVelocity;
  }
}

module.exports = { SpecialFullCoverageProduct };
