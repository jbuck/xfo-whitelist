module.exports = function(whitelist) {
  whitelist = whitelist || [];

  return function xfo_whitelist(req, res, next) {
    if (whitelist.indexOf(req.url) === -1) {
      res.set("X-Frame-Options", "DENY");
    }

    next();
  };
};
