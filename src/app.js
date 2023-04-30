const express = require('express');
const app = express();
const productsRoutes = require('./routes/productsRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api', productsRoutes);
app.use('/api', authRoutes);


app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
  
  module.exports = () => app;