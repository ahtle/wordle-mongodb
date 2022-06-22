require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.error(e);
  });

// middlewares
app.use(logger);
// handle form req body
app.use(express.urlencoded({ extended: true }));
// handle json req body
app.use(express.json());

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'hi' });
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);

const wordsRouter = require('./routes/words');
app.use('/words', wordsRouter);
