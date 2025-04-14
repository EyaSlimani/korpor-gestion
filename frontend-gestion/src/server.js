require('dotenv').config();
const express = require('express');
const cors = require('cors');
const setupSwagger = require('./swaggerConfig'); // Import the Swagger setup file

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const roleRoutes = require('./routes/roleRoutes');

// Import Sequelize instance from your db configuration file
const sequelize = require('./config/db');

const app = express();

app.use(express.json());
app.use(cors());

// Set up Swagger docs
setupSwagger(app);

// Test MySQL connection using Sequelize
sequelize.authenticate()
  .then(() => {
    console.log('MySQL Connected');
  })
  .catch(err => {
    console.error('MySQL Connection Error:', err);
  });

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/roles', roleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Swagger docs available at: http://localhost:5000/api-docs');  
});
