// Helper for admin to get all todos
exports._getAllTodos = () => todos;
// Helper for admin toggle
exports._getTodoById = (id) => todos.find(t => t.id === id);
const todos = [
  {
    id: "1",
    text: "Sample TODO",
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  },
];

const { validationResult } = require('express-validator');

exports.create = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { text } = req.body;
  const newTodo = {
    id: Math.random().toString(36).substr(2, 9),
    text,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

exports.read = (req, res) => {
  res.json(todos.filter(todo => !todo.deleted));
};

exports.update = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { id, text } = req.body;
  const todo = todos.find(t => t.id === id && !t.deleted);
  if (!todo) {
    return res.status(404).json({ error: "TODO not found" });
  }
  if (text) {
    todo.text = text;
    todo.updatedAt = Date.now();
  }
  res.json(todo);
};

exports.delete = (req, res) => {
  const { id } = req.body;
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: "TODO not found" });
  }
  todo.deleted = true;
  todo.updatedAt = Date.now();
  res.json({ success: true });
};
