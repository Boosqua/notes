const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateNoteInput(data) {
  let errors = {};
  data.name = validText(data.name) ? data.name : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Note name cannot be blank";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
