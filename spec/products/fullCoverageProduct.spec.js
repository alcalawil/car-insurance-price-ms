const { FullCoverageProduct } = require("../../src/products");
const { PRODUCT_NAMES } = require("../../src/constants");
const { executeMany } = require("../../src/helpers/misc.helper");
const { config } = require("../../src/config");

describe("Full coverage product tests", () => {
  it("price should increase at default velocity when no expired", () => {
    // Arrange
    const sellIn = 10;
    const initPrice = 10;
    const expectedPrice = initPrice + config.priceVelocity * sellIn;

    const fullCoverageProduct = new FullCoverageProduct(
      PRODUCT_NAMES.FullCoverage,
      sellIn,
      initPrice
    );

    // Act
    executeMany(() => fullCoverageProduct.updatePrice(), sellIn);

    // Assert
    expect(fullCoverageProduct.price).toEqual(expectedPrice);
  });

  it("price should increase at twice default velocity when expired", () => {
    // Arrange
    const sellIn = 0;
    const timesToForceExpire = sellIn + 1;
    const initPrice = 10;
    const expectedPrice = (initPrice + config.priceVelocity * 2);

    const fullCoverageProduct = new FullCoverageProduct(
      PRODUCT_NAMES.FullCoverage,
      sellIn,
      initPrice
    );

    // Act
    executeMany(() => fullCoverageProduct.updatePrice(), timesToForceExpire);

    // Assert
    expect(fullCoverageProduct.price).toEqual(expectedPrice);
  });

  it("price shouldn't be greater than maximum allowed price", () => {
    // Arrange
    const sellIn = 30;
    const timesToForceExpire = sellIn + 1;
    const initPrice = config.maxAllowedPrice - 1;
    const expectedPrice = config.maxAllowedPrice;

    const fullCoverageProduct = new FullCoverageProduct(
      PRODUCT_NAMES.FullCoverage,
      sellIn,
      initPrice
    );

    // Act
    executeMany(() => fullCoverageProduct.updatePrice(), timesToForceExpire);

    // Assert
    expect(fullCoverageProduct.price).toEqual(expectedPrice);
  });
});
