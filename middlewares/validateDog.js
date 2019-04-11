module.exports = function dogValidation(request, response, next) {
  var { name } = request.body;

  const specialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  const error = [];

  const requestMethod = request.route.methods;

  if (requestMethod.post) {
    if (!name || name.trim() === "") {
      error.push("name cannot be empty");
    }

    if (specialChar.test(name)) {
      error.push("Invalid name");
    }

    if (typeof name === "boolean" || typeof name !== "string") {
      error.push("name must be a string");
    }
  }
  if (requestMethod.patch) {
    if (name) {
      if (name.trim() === "") {
        error.push("you cannot update name with empty value");
      }
      if (specialChar.test(name)) {
        error.push("Invalid name");
      }
    }
  }
  if (error.length === 0) {
    return next();
  }
  return response.status(400).json({
    status: "failed",
    message: error
  });
};
