import type { Request, Response } from 'express';

let tasks: { id: number; text: string; completed: boolean }[] = [];
let nextId = 1;

export const getTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const addTask = (req: Request, res: Response) => {
  const { text } = req.body;
  const newTask = { id: nextId++, text, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;
  const task = tasks.find(t => t.id === Number.parseInt(id));
  if (task) {
    task.completed = completed;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id !== Number.parseInt(id));
  res.status(204).send();
};