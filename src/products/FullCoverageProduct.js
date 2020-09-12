const { Product } = require("./Product");
const { config } = require("../config");

class FullCoverageProduct extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    let priceVelocity = config.priceVelocity;
    this.decrementSellIn();

    if (this.sellIn === 0) {
      // once expired, duplicate velocity
      priceVelocity = config.priceVelocity * 2;
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

module.exports = { FullCoverageProduct };
