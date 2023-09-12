import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
    name: String,
    technologies: String,
    website: String,
    github: String,
}, {timestamp : true})

const Projects = mongoose.models.Projects || mongoose.model("Projects", ProjectsSchema);

export default Projects;