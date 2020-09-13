const { DefaultProduct } = require("../../src/products");
const { PRODUCT_NAMES } = require("../../src/constants");
const { executeMany } = require("../../src/helpers/misc.helper");
const { config } = require("../../src/config");

describe("Default Product tests", () => {
  it("price should reduce at default velocity when no expired", () => {
    // Arrange
    const sellIn = 10;
    const initPrice = 40;
    const expectedPrice = initPrice - config.priceVelocity * sellIn;

    const defaultProduct = new DefaultProduct(
      PRODUCT_NAMES.DefaultProduct,
      sellIn,
      initPrice
    );

    // Act
    executeMany(() => defaultProduct.updatePrice(), sellIn);

    // Assert
    expect(defaultProduct.price).toEqual(expectedPrice);
  });

  it("price should reduce at twice default velocity when expired", () => {
    // Arrange
    const sellIn = 0;
    const timesToForceExpire = sellIn + 1;
    const initPrice = 10;
    const expectedPrice = (initPrice - config.priceVelocity * 2);

    const defaultProduct = new DefaultProduct(
      PRODUCT_NAMES.DefaultProduct,
      sellIn,
      initPrice
    );

    // Act
    executeMany(() => defaultProduct.updatePrice(), timesToForceExpire);

    // Assert
    expect(defaultProduct.price).toEqual(expectedPrice);
  });

  it("price shouldn't be less than minimum allowed price", () => {
    // Arrange
    const sellIn = 30;
    const timesToForceExpire = sellIn + 1;
    const initPrice = config.minAllowedPrice + 1;
    const expectedPrice = config.minAllowedPrice;

    const defaultProduct = new DefaultProduct(
      PRODUCT_NAMES.DefaultProduct,
      sellIn,
      initPrice
    );

    // Act
    executeMany(() => defaultProduct.updatePrice(), timesToForceExpire);

    // Assert
    expect(defaultProduct.price).toEqual(expectedPrice);
  });
});
