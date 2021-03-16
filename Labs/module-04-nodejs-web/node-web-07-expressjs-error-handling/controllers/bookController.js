// Display list of all BookInstances.
exports.index = function (req, res, next) {
    // res.send('NOT IMPLEMENTED: BOOK INDEX');
    let err = new Error(`${req.ip} tried to access Forbidden /catalog`); // Sets error message, includes the requester's ip address!
    err.statusCode = 403;
    next(err);

};

// Display detail page for a specific BookInstance.
exports.book_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: BOOK CREATE GET');
};

// Display BookInstance create form on GET.
exports.book_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: BOOK CREATE POST');
};