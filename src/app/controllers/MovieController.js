const res = require('express/lib/response');
const Movie = require('../models/Movie')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class MovieController {
    //[GET] /movies/:slug

    show(req, res, next) {
        Movie.findOne({ slug: req.params.slug })
            .then(movies => {
                res.render('movies/show', { movies: mongooseToObject(movies) });
            })
            .catch(next);
        res.render('movies/show');
    }
}

module.exports = new MovieController();
