// match retorna as cadeias que batem com o regex
// se encontrar cadeias que batem com o regex retorna true senao false

// concatenacao sucessiva ex -> a*b
// let regexConcatenacaoSucessiva = /a+b/g
// let regexConcatenacaoSucessiva = /a*b/g

// let stringTest1 = 'baatata'
// let stringTest2 = 'babilonia'
// let stringTest3 = 'baaabosa babilonia'
// let stringTest4 = 'babosa'

// // console.log(regex.test(str)); test
// console.log(stringTest1.match(regexConcatenacaoSucessiva))
// console.log(stringTest2.match(regexConcatenacaoSucessiva))
// console.log(stringTest3.match(regexConcatenacaoSucessiva))
// console.log(stringTest4.match(regexConcatenacaoSucessiva))

// uniao ex -> a|e
// let regexUniao = /-|\//g
// let regexUniaoData = /[0-9]{2}[/-][0-9]{2}[/-][0-9]{4}/

// let arrayData = ["23/09/2001", "23-09-2001", "23.09.2001", "23_09_2001"]
// arrayData.forEach( data => console.log(regexUniaoData.test(data)))

// let datasValidasArray = []
// arrayData.forEach( data => {
//     if (regexUniaoData.test(data))
//         datasValidasArray.push(data)
// })
// console.log("datas validas: " + datasValidasArray)



// let data1 = "23/09/2001"
// let data2 = "23-09-2001"
// let data3 = "23.09.2001"
// let data4 = "23_09_2001"

// console.log(regexUniaoData.test(data1));
// console.log(regexUniaoData.test(data2));
// console.log(regexUniaoData.test(data3));
// console.log(regexUniaoData.test(data4));


// concatenacao ex -> ab
// let regexConcatenacao = /\.com/gi

// let stringTest1 = 'denis.com'
// let stringTest2 = 'meusite.com.br'
// let stringTest3 = 'outroexemplo.outracoisa'
// let stringTest4 = 'ultimoexemplo.com'
// console.log(regexConcatenacao.test(stringTest1)); // test
// console.log(regexConcatenacao.test(stringTest2)); // test
// console.log(regexConcatenacao.test(stringTest3)); // test
// console.log(regexConcatenacao.test(stringTest4)); // test

