const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./configs/db');
const menuRoutes = require('./routes/menuRoutes');

dotenv.config();
connectDB();

const app = express();

app.use('/api', menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
