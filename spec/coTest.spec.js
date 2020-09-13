const { CarInsurance, Product } = require("../src/coTest");
const { PRODUCT_NAMES } = require("../src/constants");

describe("Co Test", () => {
  describe("CarInsurance", () => {
    it("should return an array of updated products", () => {
      const product = new Product(PRODUCT_NAMES.DefaultProduct, 1, 10);
      const products = [product];
      const carInsurance =  new CarInsurance(products);

      const updatedProducts = carInsurance.updatePrice();

      expect(updatedProducts).toHaveLength(products.length);
    });

    it("sellIn shouldn't be negative if allowNegative is set to false", () => {
      const sellIn = 0;
      const product = new Product(PRODUCT_NAMES.DefaultProduct, sellIn, 10);

      product._decrementSellIn(false);

      expect(product.sellIn).not.toBeLessThan(0);
    });
  });
});
