const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login'); // make sure to include the login route as seen here within one of the routes files
    } else {
      next();
    }
  };
  
  module.exports = withAuth;