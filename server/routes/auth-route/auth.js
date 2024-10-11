const express = require("express");
const {
  registerUser,
  loginUser,
  authMiddleware,
} = require("../../controllers/auth/auth-controller");
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", loginUser);
router.get("/checkauth", authMiddleware, (req, res) => {
  const user = req.user;
  return res.status(200).json({
    success: true,
    message: "Authenticated User!",
    user,
  });
});
module.exports = router;
