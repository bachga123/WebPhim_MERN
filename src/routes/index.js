const SiteController = require('../app/controllers/SiteController');
const newRouter = require('./news');
const siteRouter = require('./site');
const movieRouter = require('./movies')

function route(app) {
    app.use('/news', newRouter);
    app.use('/movies', movieRouter)
    app.use('/', siteRouter);
}

module.exports = route;
