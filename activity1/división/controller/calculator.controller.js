const { validationResult } = require("express-validator");

const divisionOperator = (param1, param2) => +param1 / +param2;

exports.division = (req, res, nest) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);

    const err = new Error("Error");
    err.statusCode = 500;
    err.data = errors.array();
    throw err;
  }

  const division = divisionOperator(
    +req.body.paramone,
    +req.body.paramtwo
  );

  const params = {
    body: req.body,
    result: division,
  };

  try {
    res.status(201).json({ message: "division", params });
  } catch (err) {
    const error = new Error("Error");
    error.statusCode = 500;
    error.data = err;
    throw error;
  }
};
