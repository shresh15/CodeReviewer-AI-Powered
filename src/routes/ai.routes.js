const express = require("express");
const router = express.Router();
const aiController = require("../contollers/ai.controller");
router.get("/get-response", aiController.getResponse);
module.exports = router;
