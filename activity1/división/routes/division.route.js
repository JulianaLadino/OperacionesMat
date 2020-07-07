const express = require("express");
const { body } = require("express-validator");
const calculator = require("../controller/calculator.controller");

const router = express.Router();

router.post(
  "/division",
  [
    body("paramone")
      .exists()
      .withMessage("El paramatro Uno es requerido")
      .matches(/^[0-9]+$/, "i")
      .withMessage("El parametro Uno debe ser número")
      .isLength({ min: 2, max: 5 })
      .withMessage("El parametro Uno debe ser entre 2-5 caracteres")
      .trim()
      .escape(),
    body("paramtwo")
      .exists()
      .withMessage("El paramatro Dos es requerido")
      .matches(/^[0-9]+$/, "i")
      .withMessage("El parametro Dos debe ser número")
      .isLength({ min: 1, max: 3 })
      .withMessage("El parametro Dos debe ser entre 1-3 caracteres")
      .trim()
      .escape(),
  ],
  calculator.division
);

module.exports = router;
