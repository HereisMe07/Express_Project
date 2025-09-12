const express = require("express");
const router = express.Router();
const {
    getContact,
    getSingleContact,
    createContact,
    update,
    deleteContact
} = require("../controllers/contactController");

//get all contacts
router.route("/").get(getContact).post(createContact);;
//get single contact by id
router.route("/:id").get(getSingleContact).put(update).delete(deleteContact);
//post
// router.route("/")
//put
// router.route("/:id");
//delete
// router.route("/:id");

module.exports = router;