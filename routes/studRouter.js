const express = require("express");
const router = express.Router();
const studController = require("../controllers/studController");

router.get("/", (req, res) => {
    console.log("hello")
    res.send("hello")
})

router.post("/addStudent", studController.addStudent)

router.get("/getAllStudent", studController.getAllStudent)

router.get("/:id", studController.getOneStudent)

router.put("/:id", studController.updateStudent)

router.delete("/:id", studController.deleteStudent)

module.exports = router