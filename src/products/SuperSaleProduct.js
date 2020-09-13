const { Product } = require("./Product");
const { config } = require("../config");

class SuperSaleProduct extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    // price velocity twice than normal
    const priceVelocity = config.priceVelocity * 2;

    
    // update price if allowed
    const newPrice = this._calculateNewPrice(priceVelocity);
    if (newPrice >= config.minAllowedPrice) this.price = newPrice;
    
    this._decrementSellIn();
    return this.price;
  }

  _calculateNewPrice(priceVelocity) {
    return this.price - priceVelocity;
  }
}

module.exports = { SuperSaleProduct };
