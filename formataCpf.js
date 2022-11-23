const formCPF = cpf => cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
/*
  \d -> correspondencia de numeros de 0 a 9, equivalente a [0-9]
  {3} -> pesquisa/pega 3 ocorrencias do caracter que foi precedido, no caso o \d
  () -> os parenteses em volta das expressoes \d{3} e \d{2} pesquisa a expressao e memoriza a mesma, podendo ser usada posteriormente com a notacao $n
*/

console.log(formCPF("56326458758"))