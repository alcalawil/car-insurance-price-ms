const { Product } = require("./Product");
const { config } = require("../config");

class MegaCoverageProduct extends Product {
  constructor(name) {
    const sellIn = 0; // Mega coverage has no expiration
    const price = config.megaCoveragePrice; // fixed price
    super(name, sellIn, price);
  }

  updatePrice() {
    // Do nothing
  }
}

module.exports = { MegaCoverageProduct };
