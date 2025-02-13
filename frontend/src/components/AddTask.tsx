import type React from "react";
import { useState } from "react";

interface AddTaskProps {
  addTask: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return; // Eviter d'ajouter des tâches vides
    addTask(text); // Ajouter la tâche via la fonction passée en props
    setText(""); // Réinitialiser le champ de texte
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Ajouter une nouvelle tâche
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Entrer une description de la tâche"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Ajouter la tâche
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
