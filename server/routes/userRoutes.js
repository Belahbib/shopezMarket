const { Router } = require("express");
const router = Router();
const upload = require("../middlewares/multer");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middlewares/auth")

const {
  registerUser,
  loginUser,
  logoutUser,
  CurrentUser,
  TokenInfo,
  UpdateUser,
  verify,
  UpdatePassword,
} = require("../controllers/userController");
const passport = require("passport");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/userbytoken", authenticateToken , TokenInfo);
router.get("/user/:id", authenticateToken, CurrentUser);
router.put("/user/update/:id",authenticateToken, upload.single("avatar"), UpdateUser);
router.get("/users/:userId/verify/:token", verify);
router.put("/user/update/password/:id", UpdatePassword);
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    const userPayload = {
      id: req.user._id,
      email: req.user.email,
      username: req.user.username,
    };
    const token = jwt.sign(userPayload, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    // Set cookie with JWT token
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 3600000,
    }); // Adjust cookie settings as needed
    
    res.redirect("http://localhost:5173/home");
  }
);

module.exports = router;
