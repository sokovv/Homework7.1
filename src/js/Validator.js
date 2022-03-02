 class Validator {
  validateUsername(usernameStr) {
    return /^[a-z][-\w]*[a-z]$/i.test(usernameStr)  && !(/\d{4,}/.test(usernameStr));
  }
}

const validat = new Validator()

console.log(validat.validateUsername('Vale111ra'))

export default Validator