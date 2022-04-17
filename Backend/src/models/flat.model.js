const mongoose = require('mongoose');

const FlatSchema = new mongoose.Schema(
    {
      name: { 
          type: String,  
          required: [true  , "Please Enter Name"],
        },
      gender: { 
        type: String,
        required: [ true  , "Please Enter gender"],
        default: "Male" 
    },

      age:{ type: Number,required: [ true  , "Please Enter age"], },

      flatImage:{ type: String, required: [ true  , "Please Enter url"], },

      flatType:{ type: String, required: [ true  , "Please Enter Type"], },

      flatBlock:{ type: String, required: [ true  , "Please Enter Block"], },

      flatNumber:{ type: String, required: [ true  , "Please Enter Number"], }
      
    },
    {
      versionKey: false,
    }
  );
  
 module.exports = mongoose.model("flat", FlatSchema);