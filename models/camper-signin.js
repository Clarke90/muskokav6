// mongoose
let mongoose = require('mongoose');

// json definition ( data types, properties, etc)
let camperSignInSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: 'Camp name is Required'
  },
  lastName:{
    type: Date,
    required: 'Date is required'
  },
  date:{
    type: Date,
    required: 'Date is required'
  }
});

//make the model public
module.exports = mongoose.model('Camper-signin', camperSignInSchema);
