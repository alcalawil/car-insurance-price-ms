const { Product } = require("./Product");
const { config } = require("../config");

class DefaultProduct extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    let priceVelocity = config.priceVelocity;

    if (this.sellIn === 0) {
      // once expired, duplicate velocity
      priceVelocity = config.priceVelocity * 2;
    }

    // update price if allowed
    const newPrice = this._calculateNewPrice(priceVelocity);
    this.setPrice(newPrice);

    this._decrementSellIn();
    return this.price;
  }

  _calculateNewPrice(priceVelocity) {
    return this.price - priceVelocity;
  }
}

module.exports = { DefaultProduct };
