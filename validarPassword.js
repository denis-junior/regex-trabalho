let regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/
// ! nega a logica

console.log(regexPassword.test("Denis200!"))
console.log(regexPassword.test("Denis200! "))
console.log(regexPassword.test("Denis2001"))
console.log(regexPassword.test("denis2001"))
console.log(regexPassword.test("DENIS200!"))
console.log(regexPassword.test("Denis2!"))

