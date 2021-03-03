const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
	index_number: String,
    name: String,
    faculty: String,
    degree: String,
});

mongoose.model("student", studentSchema);
