const root = document.getElementById("root");

import { Card } from "./components/card.js";

const notes = [
  {
    id: 1,
    title: "tareas 📚",
    tags: ["universidad", "tarea", "urgente"],
    content: [
      { text: "fisica", status: true },
      { text: "matematicas", status: true },
      { text: "ingles", status: false },
      { text: "ingles", status: false },
      { text: "calculo", status: false },
      { text: "etica", status: false },
      { text: "ed.fisica", status: false },
      { text: "señales", status: false },
    ],
  },
  {
    id: 2,
    title: "recetas 🍔",
    tags: ["comida", "almuerzo", "desayuno"],
    content: [
      { text: "pastas", status: true },
      { text: "panes", status: false },
      { text: "tomates", status: false },
      { text: "arroz de leche", status: false },
      { text: "pizza", status: false },
      { text: "perro caliente", status: false },
      { text: "jugo de mango", status: false },
    ],
  },
];

notes.map((note) => {
  Card(note);
});

const button = document.createElement("button");
button.innerText = "+";
button.classList.add("btn");
root.appendChild(button);
