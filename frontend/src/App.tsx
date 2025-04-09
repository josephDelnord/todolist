import type React from "react";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import axios from "axios";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Récupérer les tâches depuis l'API
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  // Ajouter une nouvelle tâche et mettre à jour l'état des tâches
  const addTask = async (text: string) => {
    const response = await axios.post("http://localhost:5000/api/tasks", {
      text,
    });
    setTasks([...tasks, response.data]); // Ajouter la nouvelle tâche à la liste sans recharger la page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 py-10 px-4 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white p-8 rounded-3xl shadow-xl">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Gestion de tâches
        </h1>

        {/* Disposition en grille responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AddTask addTask={addTask} />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
};

export default App;
