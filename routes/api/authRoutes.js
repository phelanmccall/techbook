require("../../controller/passport");
const router = require("express").Router();
const passport = require("passport");

router.route("/auth/github")
  .get(passport.authenticate("github", { scope: ["profile"] }));

router.route("/auth/github/callback")
  .get(passport.authenticate("github"), function (req, res) {
    res.redirect("http://localhost:3000/home");
  })

router.route("/api/current_user")
  .get(function (req, res) {
    res.send(req.user)
  });

router.route("/api/logout")
  .get(function (req, res) {
    req.logout();
    res.redirect("http://localhost:3000/")
  })


// Google //

// app.get("/auth/google",
//   passport.authenticate("google", { scope: ["https://www.googleapis.com/auth/plus.login", 
//  "https://www.googleapis.com/auth/plus.me"] }));

router.route("/auth/google")
  .get(passport.authenticate("google", {
    scope: ["profile"]
  }));


router.route("/auth/google/redirect")
  .get(passport.authenticate("google"),
    function (req, res) {
      res.redirect("http://localhost:3000/home");
    });

router.route("/api/current_user")
  .get(function (req, res) {
    res.send(req.user)
  });

router.route("/api/logout")
  .get(function (req, res) {
    req.logout();
    res.redirect("http://localhost:3000/")
  })

module.exports = router;
