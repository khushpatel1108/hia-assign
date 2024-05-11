const express = require("express");

const router = express.Router();
const {createassistant , getAssistant , updateassistant , deleteAssistant} = require("../controllers/crud");

router.post("/create" , createassistant);
router.get("/find/:assistant_id" , getAssistant);
router.put("/updat/:assistant_id" , updateassistant);
router.delete("/del/:assistant_id" , deleteAssistant);


module.exports = router;


