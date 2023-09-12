import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
    degree: String,
    university: String,
    year: String,
    highschool: String,
}, {timestamp : true})

const Education = mongoose.models.Education || mongoose.model("Education", EducationSchema);

export default Education;