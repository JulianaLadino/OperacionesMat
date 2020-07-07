const express = require("express");
const { body } = require("express-validator");
const calculator = require("../controller/calculator.controller");

const router = express.Router();

router.post(
  "/Operator",
  [
    body("Operador")
      .exists()
      .withMessage("Se requiere de un operador para trabajar => Suma(1), Resta(2), Multiplicación(3), División(4)")
      .matches(/^[0-9]+$/, "i")
      .withMessage("El parametro Uno debe ser numerico")
      .isLength({ min: 1, max: 1 })
      .withMessage("Ingresa una de las 4 opciones")
      .trim()
      .escape(),
    body("paramone")
      .exists()
      .withMessage("El paramatro Uno es requerido")
      .matches(/^[0-9]+$/, "i")
      .withMessage("El parametro Uno debe ser numerico")
      .isLength({ min: 1, max: 5 })
      .withMessage("El parametro Uno debe ser entre 1-5 caractes")
      .trim()
      .escape(),
    body("paramtwo")
      .exists()
      .withMessage("El paramatro Dos es requerido")
      .matches(/^[0-9]+$/, "i")
      .withMessage("El parametro Dos debe ser numerico")
      .isLength({ min: 1, max: 5 })
      .withMessage("El parametro Dos debe ser entre 1-5 caractes")
      .trim()
      .escape(),
  ],
  calculator.Operator
);

module.exports = router;
