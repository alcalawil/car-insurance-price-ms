const { MegaCoverageProduct } = require("../../src/products");
const { PRODUCT_NAMES } = require("../../src/constants");
const { executeMany } = require("../../src/helpers/misc.helper");
const { config } = require("../../src/config");

describe("Mega coverage product tests", () => {
  it("price should be constant", () => {
    // Arrange
    const sellIn = 2;
    const expectedPrice = config.megaCoveragePrice;

    const megaCoverageProduct = new MegaCoverageProduct(
      PRODUCT_NAMES.MegaCoverage
    );

    // Act
    executeMany(() => megaCoverageProduct.updatePrice(), sellIn);

    // Assert
    expect(megaCoverageProduct.price).toEqual(expectedPrice);
  });
});
