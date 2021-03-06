
const express = require('express');
const router = express.Router();

const commentController = require('../Controller/vm-controller');


router.get("/vm", commentController.getAllVms)
router.put("/vm/:id", commentController.patchVm)
router.delete("/vm/:id", commentController.deleteVm)
router.post("/vm", commentController.postVm)

module.exports = router;
