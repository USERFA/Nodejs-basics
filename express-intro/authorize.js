const authorize = (req, res, next) => {
  console.log("authorize middleware");
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
    // next()
  }
};

module.exports = authorize;
