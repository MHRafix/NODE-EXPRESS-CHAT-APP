// get login controller here
function getLogin(req, res, next) {
  res.render("index", {
    title: "Login",
  });
}

module.exports = {
  getLogin,
};
