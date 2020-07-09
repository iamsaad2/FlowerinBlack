const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to Notes' }));

const PORT = process.env.local || 5000;

//Define Routes
app.use('/api/profiles', require('./routes/profiles'));
app.use('/api/flowers', require('./routes/flowers'));
app.use('/api/managers', require('./routes/managers'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
