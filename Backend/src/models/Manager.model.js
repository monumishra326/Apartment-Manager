const mongoose = require('mongoose');

// User Schema
const ManagerSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true},
    },
    {
      versionKey: false,
    }
  );
  
 module.exports = mongoose.model("manager", ManagerSchema);