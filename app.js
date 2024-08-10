// app.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

// Serve static files (CSS)
app.use(express.static(path.join(__dirname)));

// Serve the HTML file for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// In-memory storage for to-dos
let todos = [];
let currentId = 1;

// Get all to-dos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a new to-do
app.post('/todos', (req, res) => {
  const { title, completed = false } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }
  const newTodo = { id: currentId++, title, completed };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = todos.find(todo => todo.id == id);
  if (!todo) {
    return res.status(404).json({ message: 'To-do not found' });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// Delete a to-do
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(todo => todo.id == id);

  if (index === -1) {
    return res.status(404).json({ message: 'To-do not found' });
  }

  const deletedTodo = todos.splice(index, 1);
  res.json(deletedTodo[0]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`To-Do List server running on port ${PORT}`);
});
