const { Product } = require("./Product");

class SpecialFullCoverageProduct extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    // TODO
  }
}

module.exports = { SpecialFullCoverageProduct };
