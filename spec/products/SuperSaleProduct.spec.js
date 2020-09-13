const { SuperSaleProduct } = require("../../src/products");
const { PRODUCT_NAMES } = require("../../src/constants");
const { executeMany } = require("../../src/helpers/misc.helper");
const { config } = require("../../src/config");

describe("Super sale coverage product tests", () => {
  it("price should reduce at twice default velocity", () => {
    // Arrange
    const sellIn = 2;
    const initPrice = 40;
    const expectedPrice = initPrice - config.priceVelocity * 2 * sellIn;

    const superSaleProduct = new SuperSaleProduct(
      PRODUCT_NAMES.SuperSale,
      sellIn,
      initPrice
    );

    // Act
    executeMany(() => superSaleProduct.updatePrice(), sellIn);

    // Assert
    expect(superSaleProduct.price).toEqual(expectedPrice);
  });

  it("price shouldn't be less than minimum allowed price", () => {
    // Arrange
    const sellIn = 2;
    const initPrice = 2;
    const expectedPrice = config.minAllowedPrice;

    const superSaleProduct = new SuperSaleProduct(
      PRODUCT_NAMES.SuperSale,
      sellIn,
      initPrice
    );

    // Act
    executeMany(() => superSaleProduct.updatePrice(), sellIn);

    // Assert
    expect(superSaleProduct.price).toEqual(expectedPrice);
  });
});
