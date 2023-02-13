const jwt = require("jsonwebtoken");

module.exports = function Auth(req, res, next) {
  console.log(req.header("x-auth-token"));
  let token = req.header("x-auth-token");
  console.log(token);
  if (!token) {
    return res.status("401").send("access denide, no token");
  }
  try {
    const decode = jwt.verify(token, "impactStudio");
    req.user = decode;
    next();
  } catch (error) {
    return res.status(400).send('lama');
  }
};
