import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Masukkan nama judul tugas"],
        trim: true
    }, 
    course: {
        type: String, 
        required: [true, "Masukkan nama mata kuliah"],
        trim: true
    }, 
    description: {
        type: String, 
        trim: true
    }, 
    deadline: {
        type: Date, 
        required: [true, "Masukkan tenggat waktu tugas"]
    }, 
    priority: {
        type: String, 
        enum: ["low", "medium", "high"],
        trim: true, 
        default: "medium"
    }, 
    status: {
        type: String, 
        enum: ["pending", "in-progress", "completed"],
        trim: true, 
        default: "pending"
    }
}, { timestamps: true });

const Task = mongoose.model("Task", TaskSchema);

export default Task;