let regexEmail = /^\w?.+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

console.log(regexEmail.test('foobar@gmail.com'))
console.log(regexEmail.test('denis@gmail.com.br'))
console.log(regexEmail.test('denis@gmail.com..br'))
console.log(regexEmail.test('denis@gmail.com.br br'))
console.log(regexEmail.test('denisgmail.com'))
console.log(regexEmail.test('@hotmail.com'))