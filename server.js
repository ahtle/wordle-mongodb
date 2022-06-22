const express = require('express');
const app = express();

app.use(logger);
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'hi' });
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);

// middlewares
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3001);
