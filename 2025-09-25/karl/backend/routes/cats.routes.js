const express = require("express");
const router = express.Router();
const catsController = require("../controllers/cats.controller");
const {
  catsRouteMiddleware,
  catsGetRouteMiddleware,
} = require("../middlewares/cats.middlewares");

router.use(catsRouteMiddleware);

// /cats/ Get endpoint level middleware
router.get("/", catsGetRouteMiddleware, catsController.read);
const { body } = require('express-validator');
router.post(
  "/",
  body("name").isString().isLength({ min: 1 }).withMessage("Name is required and must be a string."),
  catsController.create
);
router.put(
  "/",
  body("id").isString().withMessage("ID is required."),
  body("name").optional().isString(),
  catsController.update
);
router.delete("/", catsController.delete);

module.exports = router;
