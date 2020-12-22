import express from 'express';
import User from './userModel';

const router = express.Router(); // eslint-disable-line

// get all users
router.get('/', (req, res, next) => {
  User.find()
  .then(users => res.status(200).json(users))
  .catch(err => next(err));
});

// register
router.post('/', (req, res, next) => {
  User.create(req.body).then(user => res.status(200).json({success:true,token:"FakeTokenForNow"})).catch(err => next(err));
});

// update a user
router.put('/:id', (req, res, next) => {
  if (req.body._id) {
    delete req.body._id;
  }
  User.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false
  })
  .then(user => res.json(200, user))
  .catch(err => next(err));
});
export default router;