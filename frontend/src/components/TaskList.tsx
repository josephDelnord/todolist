import type React from "react";
import { useState } from "react";
import axios from "axios";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [newText, setNewText] = useState<string>("");

  // Supprimer une tâche
  const deleteTask = async (taskId: number) => {
    await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
    setTasks(tasks.filter((task) => task.id !== taskId)); // Supprimer la tâche du state
  };

  // Modifier une tâche
  const editTask = (taskId: number, currentText: string) => {
    setEditingTaskId(taskId);
    setNewText(currentText);
  };

  // Soumettre la modification de la tâche
  const handleEditSubmit = async (taskId: number) => {
    if (newText.trim() === "") return;

    await axios.put(`http://localhost:5000/api/tasks/${taskId}`, {
      text: newText,
    });

    setEditingTaskId(null); // Fermer le mode édition
    setNewText(""); // Réinitialiser le champ de texte
    const response = await axios.get("http://localhost:5000/api/tasks");
    setTasks(response.data); // Recharger les tâches après la modification
  };

  // Marquer une tâche comme terminée ou en cours
  const toggleCompletion = async (taskId: number, completed: boolean) => {
    await axios.put(`http://localhost:5000/api/tasks/${taskId}`, {
      completed: !completed,
    });
    const response = await axios.get("http://localhost:5000/api/tasks");
    setTasks(response.data); // Recharger les tâches après modification
  };

  return (
    <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-8">
        Liste des tâches
      </h2>
      <ul className="space-y-6">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-6 border-l-4 rounded-lg shadow-lg transition-all duration-300 ${
              task.completed
                ? "bg-green-100 border-green-500 hover:bg-green-200"
                : "bg-yellow-100 border-yellow-500 hover:bg-yellow-200"
            }`}
          >
            <div className="flex justify-between items-start">
              {/* Conteneur pour le texte de la tâche */}
              <div className="flex-1 min-w-0 mr-4">
                {editingTaskId === task.id ? (
                  <div className="flex items-center space-x-2 w-full">
                    <input
                      type="text"
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      className="p-3 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleEditSubmit(task.id)}
                      className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition duration-200"
                    >
                      Enregistrer
                    </button>
                  </div>
                ) : (
                  <span
                    className="text-xl font-medium text-gray-800 overflow-hidden text-ellipsis block"
                    title={task.text} // Affiche le texte complet au survol
                  >
                    {task.text}
                  </span>
                )}
              </div>
              {/* Conteneur pour les boutons */}
              <div className="flex flex-col justify-between space-y-2">
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => toggleCompletion(task.id, task.completed)}
                    className={`px-4 py-2 rounded-lg text-white text-xs ${
                      task.completed ? "bg-green-500" : "bg-yellow-500"
                    } hover:bg-opacity-80 transition duration-300`}
                  >
                    {task.completed ? "Annuler" : "Statut"}
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg text-xs hover:bg-opacity-80 transition duration-200"
                  >
                    Supprimer
                  </button>
                </div>
                {editingTaskId !== task.id && (
                  <button
                    type="button"
                    onClick={() => editTask(task.id, task.text)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xs hover:bg-blue-600 transition duration-200"
                  >
                    Modifier
                  </button>
                )}
              </div>
            </div>
            <span
              className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                task.completed
                  ? "bg-green-500 text-white"
                  : "bg-yellow-500 text-white"
              }`}
            >
              {task.completed ? "Fini" : "En cours"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
