const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = 5000;

app.use(express.json());    

app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}));

const bookRoutes = require('./src/books/book.route');
const orderRoutes = require('./src/orders/order.route')
const userRoutes = require('./src/users/user.route')
const adminDashBoard = require('./src/stats/admin.stats')

app.use('/api/books', bookRoutes);
app.use('/api/orders', orderRoutes)
app.use('/api/auth', userRoutes)
app.use('/api/admin', adminDashBoard)

async function main() {
   await mongoose.connect(process.env.DB_URL);
   
   app.get('/', (req, res) => {
    res.send('Hello World!');
  });
}
main().then(() => console.log("MongoDB Connected Successfully!")).catch(err => console.log(err));

app.use((req, res, next) => {
  res.status(404).send('<h1>404 Page Not Found</h1>');
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});