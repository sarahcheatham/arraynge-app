const express = require('express');
const router = express.Router();
const { list, show, create, update, remove } = require("../controllers/ClassController");

router.get("/api/classdata", list);
router.get("/api/classdata/:id", show);
router.post("/api/classdata", create);
router.put("/api/classdata/:id", update);
router.delete("/api/classdata/:id", remove);

module.exports = router;