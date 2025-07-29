const authMiddleware = (req, res, next) => {
  if (req.session?.authenticated) {
    return next();
  } else {
    return res.redirect('/');
  }
};

module.exports = authMiddleware;