const express = require('express');
const router = express.Router();
const { list, show, getLastClass, create, update, remove } = require("../controllers/ClassDataController");

router.get("/api/classdata", list);
router.get("/api/classdata/:id", show);
router.get("/api/classdata/lastclass/:id", getLastClass)
router.post("/api/classdata", create);
router.put("/api/classdata/:id", update);
router.delete("/api/classdata/:id", remove);

module.exports = router;