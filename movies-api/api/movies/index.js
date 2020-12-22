import express from 'express';
import {
	getMovies, getMovie, getMovieReviews
} from '../tmdb-api';

const router = express.Router(); // eslint-disable-line

router.get('/', (req, res, next) => {
	getMovies()
	.then(movies => res.status(200).send(movies))
	.catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
	const id = parseInt(req.params.id);
	getMovie(id)
	.then(movie => res.status(200).send(movie))
	.catch(err => next(err));
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
	getMovieReviews(id)
	.then(reviews => res.status(200).send(reviews))
	.catch(err => next(err));
});

export default router;

