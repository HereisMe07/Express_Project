// express-async-handler → a middleware wrapper that lets you use async/await without writing try/catch every time.
// If an error is thrown inside the async function, it automatically passes it to Express’s error handler.
// Contact → this is the Mongoose model for your contacts collection (comes from contactModel.js).
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts *=>Contact.find() → fetches all documents from the contacts collection.
//@route Get /api/contacts
//@access public 
const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body); //Logs the incoming body (good for debugging).
    const { name, email, phone } = req.body;
    //if we create new contact we will see this first. it will check the name,email,phone if empty it will throw error
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !")
    }
    //Contact.create() → inserts new document into contacts collection.
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    //Returns 201 Created + the created contact JSON.
    res.status(201).json(contact); //Route: POST /api/contacts
});

//@desc Get single contact
//@route GET /api/contacts/:id
//@access public
const getSingleContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id); //findById() → fetches one document by _id.
    if (!contact) { //If not found → return 404.
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact); //Else → return 200 OK + contact JSON.
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const update = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    };

    const update = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body, //fields you want to change.
        {new: true} // return the updated doc (return the updated document instead of the old one.)
    );
    res.status(200).json(update);
});

//@desc Delete contact
//@route Delete /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Contact deleted successfully", contact });  
});

//Exports all controller functions so you can use them in your route file.
module.exports = { getContact, createContact, getSingleContact, update, deleteContact };