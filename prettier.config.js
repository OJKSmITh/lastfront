/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  printWidth: 150,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: ["^(react/(.*)$)|^(react$)", "^(next/(.*)$)|^(next$)", "<THIRD_PARTY_MODULES>", "", "^types$", "", "^[./]"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
}
