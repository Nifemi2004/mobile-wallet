require('dotenv').config();
require('express-async-errors');

const ejs = require('ejs');

const express = require('express');
const app = express();
const router=express.Router()
const connectDB = require('./db/connect');

const authRouter = require('./routes/authRoute');
const transactionRouter = require('./routes/transactionRoute')

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');


//initialize ejs
app.set('view engine', 'ejs');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get('/register', (req, res) => {
   res.render('register')
});

app.get('/login', (req, res) =>{
  res.render('login');
})

app.get('/deposit', (req, res) => {
  res.render('deposit')
})


     //Routes
     app.use( authRouter);
     app.use( transactionRouter);


     //Middleware
     app.use(notFoundMiddleware);
     app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB("mongodb://localhost:27017/finance");
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
