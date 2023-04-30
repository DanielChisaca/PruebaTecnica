let products = [];

class Product {
  constructor(id, name, description, price, quantity) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }

  static getAll() {
    return products;
  }

  static getById(id) {
    return products.find((product) => product.id === id);
  }

  static create(productData) {
    const newProduct = new Product(
      products.length + 1,
      productData.name,
      productData.description,
      productData.price,
      productData.quantity
    );
    products.push(newProduct);
    return newProduct;
  }

  static update(id, productData) {
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      products[productIndex].name = productData.name;
      products[productIndex].description = productData.description;
      products[productIndex].price = productData.price;
      products[productIndex].quantity = productData.quantity;
      return products[productIndex];
    } else {
      return null;
    }
  }

  static delete(id) {
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      products.splice(productIndex, 1);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Product;
