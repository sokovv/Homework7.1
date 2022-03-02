 class Validator {
  validateUsername(usernameStr) {
    return /^[a-zA-Z][-\w]*[a-zA-Z]$/.test(usernameStr)  && !(/\d{4,}/.test(usernameStr));
  }
}

const validat = new Validator()


export default Validator