const res = require("express/lib/response");
const Movie = require("../models/Movie");
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
  //[GET] /
  index(req, res, next) {
    Movie.find({})
      .then(movies => {
        res.render('HOME', {
          movies: mutipleMongooseToObject(movies)
        })
      })
      .catch(next);
    // res.render("HOME");
  }

}

module.exports = new SiteController();
