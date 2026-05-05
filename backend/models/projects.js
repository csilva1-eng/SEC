import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    readMe: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        unique: true,
        required: true
    }
})

const Project = mongoose.model('Project', projectSchema)

export default Project;