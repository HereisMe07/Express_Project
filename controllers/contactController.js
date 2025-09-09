//@desc Get all contacts
//@route Get /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400)
    }
    res.status(201).json({ message: "Creat contact"});
};

//@desc Get single contact
//@route GET /api/contacts/:id
//@access public
const getSingleContact = (req, res) => {
    res.status(200).json({ message: `Get contact with id ${req.params.id}`});
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({message:`Update contact with id ${req.params.id}`})
};

//@desc Delete contact
//@route Delete /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
  res.status(200).json({message: `Delete contact with id ${req.params.id}`})  
};


module.exports = { getContact, createContact, getSingleContact, updateContact, deleteContact };