import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    position: String,
    company: String,
    duration: String,
    jobprofile: String,
}, {timestamp : true})

const Experience = mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);

export default Experience;