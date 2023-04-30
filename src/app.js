const express = require('express');
const app = express();
const productsRoutes = require('./routes/productsRoutes');
const authRoutes = require('./routes/authRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use('/api', productsRoutes);
app.use('/api', authRoutes);


app.listen(3001, () => {
    console.log('Server running on port 3001');
  });
  
  module.exports = () => app;