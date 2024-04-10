const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userControllers");

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(getMe);
// router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
