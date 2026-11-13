import Task from '../models/Task.js';

export async function createTask(req, res) {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({
            message: "Tugas berhasil ditambahkan", 
            data: task
        });
    } catch (error) {
        res.status(500).json({ message: error.mesage });
    }
}

export async function getAllTasks(req, res) {
    try {
        const tasks = await Task.find();
        res.status(200).json({
            message: "Berhasil mengambil daftar tugas", 
            data: tasks
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}