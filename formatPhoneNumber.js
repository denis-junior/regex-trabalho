const regexPhoneNumber = /^(\d{2})(\d{5})(\d{4})$/
/**/


const formatPhoneNumber = phoneNumber => phoneNumber.replace(regexPhoneNumber, "($1) $2-$3")

console.log(formatPhoneNumber("91989359625"))