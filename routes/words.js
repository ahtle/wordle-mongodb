const express = require('express');
const router = express.Router();

const Word = require('../models/word');

router
  .get('/', (req, res) => {
    Word.find()
      .then((results) => {
        res.send(results);
      })
      .catch((e) => {
        console.error(e);
      });
  })
  .post('/', (req, res) => {
    const word = new Word({
      value: req.body.value,
    });

    word
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        console.error(e);
      });
  })
  .delete('/:id', (req, res) => {
    Word.deleteOne({
      _id: req.params.id,
    })
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        console.error(e);
      });
  });

module.exports = router;
