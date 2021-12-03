require('dotenv').config();
require('express-async-errors');
const cors = require('cors')
const express = require('express');
const UserRouter = require('./routes/userRouter')
const AuthRouter = require('./routes/authRouter')
const ProductRouter = require('./routes/productRoutes')
const OrderRouter = require('./routes/orderRoute')
const CartRouter = require('./routes/cartRoute')
const StripeRouter = require('./routes/stripeRouter')
const workshopRouter = require('./routes/workshopRoute')
const eventRouter = require('./routes/eventRoute')


const app = express();


app.use(express.json())
app.use(cors());

// database
const connectDB = require('./db/connect');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//  routes
app.use('/api/auth', AuthRouter)
app.use('/api/products', ProductRouter)
app.use('/api/users', UserRouter)
app.use('/api/orders', OrderRouter)
app.use('/api/cart', CartRouter)
app.use('/api/workshops', workshopRouter)
app.use('/api/events', eventRouter)
app.use('/api/stripe', StripeRouter)


// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
