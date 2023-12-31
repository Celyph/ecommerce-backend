const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  return Tag.findAll();
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  return Tag.findAll({
    where: {
      id: req.params.id
    }
  })
});

router.post('/', (req, res) => {
  res.send(Tag.create(req.body));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  res.send(Tag.delete({
    where: {
      id: req.params.id
    }
  }));
});

module.exports = router;
