const { Product } = require("./Product");
const { config } = require("../config");

class SpecialFullCoverageProduct extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    let priceVelocity = config.priceVelocity;
    this.decrementSellIn();

    if (this.sellIn === 0) {
      // once expired, price is zero
      return (this.price = 0);
    }

    if (this.sellIn <= 10) {
      // less than 10 days
      priceVelocity = config.priceVelocity * 2;
    }

    if (this.sellIn <= 5) {
      // less than 5 days
      priceVelocity = config.priceVelocity * 3;
    }

    // update price if allowed
    const newPrice = this._calculateNewPrice(priceVelocity);
    if (newPrice <= config.maxAllowedPrice) this.price = newPrice;

    return this.price;
  }

  _calculateNewPrice(priceVelocity) {
    return this.price + priceVelocity;
  }
}

module.exports = { SpecialFullCoverageProduct };
