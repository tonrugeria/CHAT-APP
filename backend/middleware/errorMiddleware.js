const notFound = (req, res, next) => {
  //if all the url's doesnt exist execute this
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  //next logic
  next(error);
};

//other error
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };
