const { createCustomProduct } = require("./products");

class CarInsurance {
  constructor(products = []) {
    this.products = this.createCustomProducts(products);
  }

  createCustomProducts(products) {
    return products.map((product) => createCustomProduct(product));
  }

  updatePrice() {
    this.products.map((product) => product.updatePrice());
    return this.products;
  }
}

module.exports = { CarInsurance };
