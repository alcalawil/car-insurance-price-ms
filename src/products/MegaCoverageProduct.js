const { Product } = require("./Product");

class MegaCoverageProduct extends Product {
  constructor(name) {
    const sellIn = 0; // Mega coverage has no expiration
    const price = 80; // fixed price
    super(name, sellIn, price);
  }

  updatePrice() {
    // Do nothing
  }
}

module.exports = { MegaCoverageProduct };
