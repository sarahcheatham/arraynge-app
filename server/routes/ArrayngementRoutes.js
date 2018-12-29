const express = require('express');
const router = express.Router();
const { list, show, create, update, remove } = require("../controllers/ArrayngementController");

router.get("/api/arrayngements", list);
router.get("/api/arrayngements/:id", show);
router.post("/api/arrayngements", create);
router.put("/api/arrayngements/:id", update);
router.delete("/api/arrayngements/:id", remove);

module.exports = router;