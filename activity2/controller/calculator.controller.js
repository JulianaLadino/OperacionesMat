const { validationResult } = require("express-validator");

const subtractionOperator = (param1, param2) => +param1 - +param2;
const multiplicationOperator = (param1, param2) => +param1 * +param2;
const divisionOperator = (param1, param2) => +param1 / +param2;
const sumOperator = (param1, param2) => +param1 + +param2;

exports.Operator = (req, res, nest) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);

    const err = new Error("Error");
    err.statusCode = 500;
    err.data = errors.array();
    throw err;
  }

  switch (+req.body.Operador) {
    case 1:
      x = sumOperator(+req.body.paramone, +req.body.paramtwo);
      break;
    case 2:
      x = subtractionOperator(+req.body.paramone, +req.body.paramtwo);
      break;
    case 3:
      x = multiplicationOperator(+req.body.paramone, +req.body.paramtwo);
      break;
    case 4:
      x = divisionOperator(+req.body.paramone, +req.body.paramtwo);
      break;
    default:
      console.log(`No se selecciono un operador de los indicados`);
      break;
  }

  const Operator = x;

  const params = {
    body: req.body,
    result: Operator,
  };

  try {
    res.status(201).json({ message: "Operator", params });
  } catch (err) {
    const error = new Error("Error");
    error.statusCode = 500;
    error.data = err;
    throw error;
  }
};
