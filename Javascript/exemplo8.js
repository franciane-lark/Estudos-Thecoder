let nome = 'Franciane'
let cpf = '123.123.123-55'

console.log('TAM' + nome.length)
console.log(nome.toUpperCase())

cpf = cpf.replace('.', '')

cpf = cpf.replace('.', '')

cpf = cpf.replace('.', '')

console.log(cpf)

let texto = 'Nome: ' + nome + 'CPF: ' + cpf

console.log(texto)

let texto2 = `
    Nome: ${nome}
    Cpf: ${cpf}
`
console.log(texto2)
