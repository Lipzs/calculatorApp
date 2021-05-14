function validateFields(fields, operation) {
  if (!fields) {
    return false
  }

  const regexNumber = /^(?:[0-9]\d*|\d)$/;
  const invalidNumber = [];

  for (let field of fields) {
    if (!regexNumber.test(field)) {
      invalidNumber.push(field);
    }
  }

  if (invalidNumber.length > 0) {
    return false;
  }

  if (operation === 'divide') {
    return fields[1] != 0;
  }

  return true;
}

export default validateFields;