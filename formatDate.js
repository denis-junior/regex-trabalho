let regexDateValidate = /^[0-9]{2}[/-][0-9]{2}[/-][0-9]{4}$/

/*
    [] -> usado para achar quaisquer caracteres que estao contidos dentro da barra, no exemplo foi posto todos os numero de 0 a 9
    {} -> novamente a chaves sendo usada para achar somente n vezes a correspondencia que queremos
    */


// console.log(regexDateValidate.test("23/09/2001"))
// console.log(regexDateValidate.test("23-09-2001"))
// console.log(regexDateValidate.test("23/09/20012"))
// console.log(regexDateValidate.test("2/09/2001"))
// console.log(regexDateValidate.test("23/0/2001"))
// console.log(regexDateValidate.test("23$09$2001"))

let input = "23092001"

const formatDate2 = date => date.replace(/^(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')

console.log(formatDate2(input))
