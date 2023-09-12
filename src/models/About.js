import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
    aboutme: String,
    noofprojects: String,
    yearofexperience: String,
    skills: String,
}, {timestamp : true})

const About = mongoose.models.About || mongoose.model("About", AboutSchema);

export default About;