const { validationResult } = require("express-validator");

const multiplicationOperator = (param1, param2) => +param1 * +param2;

exports.multiplication = (req, res, nest) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);

    const err = new Error("Error");
    err.statusCode = 500;
    err.data = errors.array();
    throw err;
  }

  const multiplication = multiplicationOperator(
    +req.body.paramone,
    +req.body.paramtwo
  );

  const params = {
    body: req.body,
    result: multiplication,
  };

  try {
    res.status(201).json({ message: "multiplication", params });
  } catch (err) {
    const error = new Error("Error");
    error.statusCode = 500;
    error.data = err;
    throw error;
  }
};
