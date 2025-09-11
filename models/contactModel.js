const mongoose = require("mongoose");
// defines the structure (rules, types, validation).
const contactSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please add the contact name"]
        },
        email: {
            type: String,
            required: [true, "Please add the contact email address"]
        },
        phone: {
            type: String,
            required: [true, "Please add the contact phone number"]
        },
    },
    // automatically adds createdAt and updatedAt fields.
    {
        timestamps: true,
    }
);
// In Node.js, module.exports defines what this file will export so that other files can import and use it.
module.exports = mongoose.model("Contacts", contactSchema);