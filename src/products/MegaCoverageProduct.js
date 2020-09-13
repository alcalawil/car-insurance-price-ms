const { Product } = require("./Product");
const { config } = require("../config");

class MegaCoverageProduct extends Product {
  constructor(name) {
    const sellIn = 0; // Mega coverage has no expiration
    super(name, sellIn, config.megaCoveragePrice);
  }

  updatePrice() {
    // Do nothing
  }
}

module.exports = { MegaCoverageProduct };
