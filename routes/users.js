const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: 'Solar' },
  { id: 2, name: 'Irene' },
];

router
  .get('/', (req, res) => {
    res.send('user list');
  })
  .post('/', (req, res) => {
    console.log(req.body);
    res.send('Create user');
  });

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User id: ${userId}`);
});

router.param('id', (req, res, next, id) => {
  req.user = users.find((item) => item.id === id);
  next();
});

module.exports = router;
