const formCPF = cpf => cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')

console.log(formCPF("56326458758"))