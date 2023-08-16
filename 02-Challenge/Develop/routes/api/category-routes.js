
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  res.send(Category.findAll());
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  res.send(Category.findAll({
    where: {
      id: req.params.id
    }
  }));
});

router.post('/', (req, res) => {
  // create a new category
  res.send(Category.create(req.body));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  res.send(Category.delete({
    where: {
      id: req.params.id
    }
  }));
});

module.exports = router;
