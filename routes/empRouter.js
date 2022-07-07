const express = require("express");
const router = express.Router();
const empController = require("../controllers/empController");

router.post("/addEmployee", empController.addEmployee);

router.get("/getEmployee", empController.getEmployee);

router.delete("/:id", empController.deleteEmployee);

router.put("/:id", empController.updateEmployee);

router.get("/:id", empController.getOneEmployee);

module.exports = router;