import type React from 'react';
import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import axios from 'axios';

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
    const response = await axios.post("http://localhost:5000/api/tasks", { text });
    setTasks([...tasks, response.data]); // Ajouter la nouvelle tâche à la liste sans recharger la page
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          To-Do List
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Passer la fonction addTask à AddTask */}
          <div className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md">
            <AddTask addTask={addTask} />
          </div>

          {/* Passer les tâches à TaskList */}
          <div className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md">
            <TaskList tasks={tasks} setTasks={setTasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
