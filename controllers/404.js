exports.get404 = (req, res, next) => {           // in the last after all routes we are declaring here for 404 req
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: '/404'})
}