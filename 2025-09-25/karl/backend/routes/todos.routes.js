const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos.controller");
const { body } = require('express-validator');

router.get("/", todosController.read);
router.post(
  "/",
  body("text").isString().isLength({ min: 1 }).withMessage("Text is required and must be a string."),
  todosController.create
);
router.put(
  "/",
  body("id").isString().withMessage("ID is required."),
  body("text").optional().isString(),
  todosController.update
);
router.delete("/", todosController.delete);

module.exports = router;
