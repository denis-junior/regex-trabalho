// let myText = "borracha"
// let myPattern = /[a|b]/gi

// let match = myText.match(myPattern)
// let finalText = myText.replace(myPattern, "-")

// console.log(match)
// console.log(finalText)

//pattern /o que eu quero{numero de ocorrencia,}/ com virgula, é pelo menos aquele valor descrito
const phrase = 'booh boooooooh';
const regexpSpooky = /bo{3,}h/;
console.log(phrase.match(regexpSpooky));

//pattern /o que eu quero{numero de ocorrencia}/ sem virgula, é exatamente aquele valor descrito
const regexpSpooky2 = /bo{7}h/;
console.log(phrase.match(regexpSpooky2));