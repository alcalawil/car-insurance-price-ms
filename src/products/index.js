const { Product } = require("./Product");
const { DefaultProduct } = require("./DefaultProduct");
const { SuperSaleProduct } = require("./SuperSaleProduct");
const { MegaCoverageProduct } = require("./MegaCoverageProduct");
const { FullCoverageProduct } = require("./FullCoverageProduct");
const { SpecialFullCoverageProduct } = require("./SpecialFullCoverageProduct");
const { PRODUCT_NAMES } = require("../constants");

const productClassesMap = {
  [PRODUCT_NAMES.SpecialFullCoverage]: SpecialFullCoverageProduct,
  [PRODUCT_NAMES.FullCoverage]: FullCoverageProduct,
  [PRODUCT_NAMES.MegaCoverage]: MegaCoverageProduct,
  [PRODUCT_NAMES.SuperSale]: SuperSaleProduct,
};

const createCustomProduct = ({ name, sellIn, price }) => {
  const ProductDynamicClass = productClassesMap[name] || DefaultProduct;
  return new ProductDynamicClass(name, sellIn, price);
};

module.exports = {
  Product,
  DefaultProduct,
  SuperSaleProduct,
  createCustomProduct,
  MegaCoverageProduct,
  FullCoverageProduct,
  SpecialFullCoverageProduct,
};
