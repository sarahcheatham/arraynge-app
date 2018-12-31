const express = require("express");
const {list, show, create} = require( "../controllers/UserController");
const router = express.Router();

router.get("/api/users", list);
router.get("/api/users/:id", show);
router.post("/api/users", create);

module.exports = router;