import Task from '../models/Task.js';

export async function createTask(req, res) {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({
            message: "Tugas berhasil ditambahkan", 
            data: task
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
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

export async function getTaskById(req, res) {
    const { id } = req.params;
    try {
        const task = await Task.findById(id).exec();
        if (!task) {
            return res.status(404).json({ message: 'Task not found.'});
        }
        res.status(200).json({
            message: `Berhasil mengambil tugas id: ${id}`, 
            data: task 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateTask(req, res) {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndUpdate(
            id, 
            req.body, 
            { new: true, runValidators: true }
        ).exec();
        
        if (!task) {
            return res.status(404).json({ message: 'Task not found.'});
        }

        res.status(201).json({
            message: `Berhasil mengubah tugas: ${id}`, 
            data: task 
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deleteTask(req, res) {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete(
            id, 
            { new: true, runValidators: true }
        ).exec();
        
        if (!task) {
            return res.status(404).json({ message: 'Task not found.'});
        }

        res.status(200).json({
            message: `Berhasil menghapus tugas: ${id}`
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}