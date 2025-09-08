const express = require("express");
const router = express.Router();
//get
router.route("/").get((req, res) => {
    res.status(200).json({ message: "Get all contacts"});
});
//get:id
router.route("/").get((req, res) => {
   res.status(200).json({message: `Get ID contacts for ${res.params.id}`}) 
});
//post
router.route("/").post((req, res) => {
    res.status(200).json({ message: "Creat contacts"});
});
//put
router.route("/:id").put((req, res) => {
    res.status(200).json({ message: `Update contacts for ${req.params.id}`});
});
//delete
router.route("/:id").delete((req, res) => {
    res.status(200).json({ message: `Delete contacts for ${req.params.id}`});
});
module.exports = router;