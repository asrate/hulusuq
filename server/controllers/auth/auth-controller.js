const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const { request } = require("express");
const jwt = require("jsonwebtoken");
// register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  console.log(req.body);
  if (!userName || !email || !password) {
    return res
      .status(400)
      .json({ success: false, msg: "All fields are required" });
  }

  try {
    const Email = await User.findOne({ email });
    if (Email) {
      return res.status(400).json({ msg: "the email address is already" });
    }
    const extingUserName = await User.findOne({ userName });
    if (extingUserName) {
      return res.status(400).json({ msg: "the user name is already" });
    }

    // if(email){

    // }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = User({ userName, email, password: hashPassword });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: `User saved successfully`,
      newUser,
    });
  } catch (error) {
    // Log error for debugging
    console.error(error);
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error registering",
    });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (!checkPassword) {
      return res.json({
        success: false,
        message: "Invalid password! please try again",
      });
    }
    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
      },
      "CLIENT_SECRET_KEY",
      { expiresIn: "60m" }
    );
    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
      },
    });
  } catch (error) {}
};
const logoutUser = (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully",
  });
};
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorized User",
    });
  try {
    const decoded = jwt.verify(token, "CLIENT_SECRET_KEY");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized User",
    });
  }
};
module.exports = { registerUser, loginUser, logoutUser, authMiddleware };
