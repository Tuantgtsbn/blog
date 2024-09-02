
class SearchController {
    // [GET] /search
    index(req, res) {
        res.render('search');

    }
    // [GET] /search/:slug
    show(req, res) {
        res.render('detail', {...req.query});
    }
}

module.exports = new SearchController;