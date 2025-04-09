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
    <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-2xl">
      <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
        Ajouter une nouvelle tâche
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Entrez une description de la tâche"
            className="w-full p-4 text-lg rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-400"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-2xl hover:scale-105 transition duration-300"
          >
            Ajouter la tâche
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
