const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');

// Simulated database
let products = [
  { id: 1, name: "Product 1", description: "This is product 1", price: 10, quantity: 5 },
  { id: 2, name: "Product 2", description: "This is product 2", price: 20, quantity: 10 },
  { id: 3, name: "Product 3", description: "This is product 3", price: 30, quantity: 15 },
];


router.get('/products', authenticateToken, (req, res) => {
  res.status(200).json(products);
});

router.get('/products/:productId', authenticateToken, (req, res) => {
  const product = products.find((p) => p.id === req.params.productId);
  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }
  res.status(200).json(product);
});

router.post('/products', authenticateToken, (req, res) => {
  const product = {
    id: Date.now().toString(),
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  products.push(product);
  res.status(201).json(product);
});

router.put('/products/:productId', authenticateToken, (req, res) => {
  const productIndex = products.findIndex((p) => p.id === req.params.productId);
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }
  products[productIndex].name = req.body.name;
  products[productIndex].description = req.body.description;
  products[productIndex].price = req.body.price;
  products[productIndex].quantity = req.body.quantity;
  res.status(200).json(products[productIndex]);
});

router.delete('/products/:productId', authenticateToken, (req, res) => {
  const productIndex = products.findIndex((p) => p.id === req.params.productId);
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }
  products.splice(productIndex, 1);
  res.status(200).json({ message: 'Producto eliminado correctamente' });
});

module.exports = router;
