const { config } = require("../config");

class Product {
  // ALERT: Don't change this constructor
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  setPrice(newPrice) {
    if (
      newPrice >= config.minAllowedPrice &&
      newPrice <= config.maxAllowedPrice
    )
      this.price = newPrice;
  }

  /**
   * Decrements sellIn by 1 and stops at zero if allowNegative is set to false
   */
  _decrementSellIn(allowNegative = true) {
    if (!allowNegative && this.sellIn < 1) {
      return (this.sellIn = 0);
    }

    this.sellIn--;
  }

  updatePrice() {}
}

module.exports = {
  Product,
};
