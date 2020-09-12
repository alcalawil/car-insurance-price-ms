const { Product } = require("./Product");
const { SuperSaleProduct } = require("./SuperSaleProduct");
const { MegaCoverageProduct } = require("./MegaCoverageProduct");
const { FullCoverageProduct } = require("./FullCoverageProduct");
const { SpecialFullCoverageProduct } = require("./SpecialFullCoverageProduct");

const productClassesMap = {
  "Special Full Coverage": SpecialFullCoverageProduct,
  "Full Coverage": FullCoverageProduct,
  "Mega Coverage": MegaCoverageProduct,
  "Super Sale": SuperSaleProduct,
  "Medium Coverage": DefaultProduct,
  "Low Coverage": DefaultProduct,
};

const createCustomProduct = ({ name, sellIn, price }) => {
  const ProductDynamicClass = productClassesMap[name] || DefaultProduct;
  return new ProductDynamicClass(name, sellIn, price);
};

module.exports = {
  Product,
  SuperSaleProduct,
  createCustomProduct,
  MegaCoverageProduct,
  FullCoverageProduct,
  SpecialFullCoverageProduct,
};
