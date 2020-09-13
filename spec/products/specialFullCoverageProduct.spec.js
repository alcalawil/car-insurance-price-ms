const { SpecialFullCoverageProduct } = require("../../src/products");
const { PRODUCT_NAMES } = require("../../src/constants");
const { executeMany } = require("../../src/helpers/misc.helper");
const { config } = require("../../src/config");

describe("Special coverage product tests", () => {
  it("price should be zero when expired", () => {
    // Arrange
    const sellIn = 2; // TODO: use a random value between 0 and 5
    const timesToForceExpire = sellIn + 1;
    const expectedPrice = 0;
    const initPrice = 20;

    const specialFullCoverageProduct = new SpecialFullCoverageProduct(
      PRODUCT_NAMES.SpecialFullCoverage,
      sellIn,
      initPrice
    );

    // Act
    executeMany(() => specialFullCoverageProduct.updatePrice(), timesToForceExpire);

    // Assert
    expect(specialFullCoverageProduct.price).toEqual(expectedPrice);
  });

  it("price should increase at twice default velocity price when sellIn is less or equal 5 and no expired", () => {
    // Arrange
    const sellIn = 5; // TODO: use a random value between 0 and 5
    const initPrice = 1;
    const expectedPrice = initPrice + config.priceVelocity * 3 * sellIn;

    const specialFullCoverageProduct = new SpecialFullCoverageProduct(
      PRODUCT_NAMES.SpecialFullCoverage,
      sellIn,
      initPrice
    );

    // Act
    executeMany(() => specialFullCoverageProduct.updatePrice(), sellIn);

    // Assert
    expect(specialFullCoverageProduct.price).toEqual(expectedPrice);
  });

  it("price should increase at twice default velocity price when sellIn is less or equal 10 and greater than 5", () => {
    // Arrange
    const sellIn = 10; // TODO: use a random value between 6 and 10
    const initPrice = 5;
    const conditionIsValidUntil = sellIn - 5;
    const expectedPrice = initPrice + config.priceVelocity * 2 * conditionIsValidUntil;

    const specialFullCoverageProduct = new SpecialFullCoverageProduct(
      PRODUCT_NAMES.SpecialFullCoverage,
      sellIn,
      initPrice
    );

    // Act
    executeMany(() => specialFullCoverageProduct.updatePrice(), conditionIsValidUntil);

    // Assert
    expect(specialFullCoverageProduct.price).toEqual(expectedPrice);
  });

  it.skip("price shouldn't be greater than maximum allowed price", () => {
    // Arrange
    const sellIn = 2;
    const initPrice = config.maxAllowedPrice - 1;
    const expectedPrice = config.maxAllowedPrice;

    const specialFullCoverageProduct = new SpecialFullCoverageProduct(
      PRODUCT_NAMES.SpecialFullCoverage,
      sellIn,
      initPrice
    );

    // Act
    executeMany(() => specialFullCoverageProduct.updatePrice(), sellIn - 1);

    // Assert
    expect(specialFullCoverageProduct.price).toEqual(expectedPrice);
  });
});
