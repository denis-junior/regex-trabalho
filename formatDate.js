let regexDateValidate = /^[0-9]{2}[/-][0-9]{2}[/-][0-9]{4}$/

// console.log(regexDateValidate.test("23/09/2001"))
// console.log(regexDateValidate.test("23-09-2001"))
// console.log(regexDateValidate.test("23/09/20012"))
// console.log(regexDateValidate.test("2/09/2001"))
// console.log(regexDateValidate.test("23/0/2001"))
// console.log(regexDateValidate.test("23$09$2001"))

//cpf date phone-number email password

let input = "23092001"

const formatDate2 = date => date.replace(/^(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')

formatDate2(input)
