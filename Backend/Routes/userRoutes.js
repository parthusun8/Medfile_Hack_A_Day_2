const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// /api/users/........
router.post("/signup", userController.user_register);
router.post("/login", userController.user_login);
router.get("/logout", userController.logout);
router.post("/getuser", userController.getUserDetails);
router.post("/monitor", userController.monitor_AuthState);
router.post("/updateuser", userController.updateUser);
// just made it in case we decide to make a admin portal
router.get("/all", userController.getAllUsers);
module.exports = router;
