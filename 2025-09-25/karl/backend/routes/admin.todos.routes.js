
const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos.controller");

// Get all todos (admin)
router.get("/all", (req, res) => {
  const todos = todosController._getAllTodos();
  res.json(todos);
});

// Toggle deleted status for a TODO
router.put("/toggle-delete", (req, res) => {
  const { id } = req.body;
  const todo = todosController._getTodoById(id);
  if (!todo) {
    return res.status(404).json({ error: "TODO not found" });
  }
  todo.deleted = !todo.deleted;
  todo.updatedAt = Date.now();
  res.json(todo);
});

module.exports = router;
