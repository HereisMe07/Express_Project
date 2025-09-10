// import express framework
const express = require("express");
const errorHandler = require("./middleware/errorhandle");
const connectDb = require("./config/dbConnection");

// load environment variables from .env file
const dotenv = require("dotenv").config();

connectDb();
const app = express();

// set port from .env or use 5000 by default
const port = process.env.PORT || 5000;

app.use(express.json());
// load contact routes
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

// start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
