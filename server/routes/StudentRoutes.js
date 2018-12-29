const express = require('express');
const router = express.Router();
const { list, show, create, update, remove } = require("../controllers/StudentController");

router.get("/api/studentdata", list);
router.get("/api/studentdata/:id", show);
router.post("/api/studentdata", create);
router.put("/api/studentdata/:id", update);
router.delete("/api/studentdata/:id", remove);

module.exports = router;