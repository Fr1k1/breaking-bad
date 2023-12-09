var express = require("express");
var router = express.Router();
const controller = require("../controllers/usersController");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/", controller.getAllUsers);
router.delete("/:id", controller.deleteUserById);
router.patch("/:id", controller.updateUserById);

module.exports = router;
