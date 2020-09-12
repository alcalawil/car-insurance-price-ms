const { Product } = require("./Product");

class SuperSaleProduct extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    // TODO
  }
}

module.exports = { SuperSaleProduct };
