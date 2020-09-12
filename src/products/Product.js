class Product {
    // ALERT: Don't change this constructor
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

    // abstract method
    updatePrice() {}
}

module.exports = {
  Product,
};
