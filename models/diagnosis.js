const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const diagnosisSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  treatment: {
    type: String,
    required: true
  },
  symptoms: {
    type: String,
    required: true
  },
});



const Diagnosis = mongoose.model("Diagnosis", diagnosisSchema);

module.exports = Diagnosis;
