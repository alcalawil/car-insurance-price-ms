const { Product } = require("./Product");
const { config } = require("../config");

class DefaultProduct extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
    this.priceVelocity = config.priceVelocity;
  }

  updatePrice() {
    // once expired, duplicate velocity
    if (this.sellIn === 0) this.priceVelocity *= 2;

    // update price if allowed
    const newPrice = this._calculateNewPrice(this.priceVelocity);
    this.setPrice(newPrice);

    this._decrementSellIn();
    return this.price;
  }

  _calculateNewPrice(priceVelocity) {
    return this.price - priceVelocity;
  }
}

module.exports = { DefaultProduct };
