let idade = 18

if (idade >= 18) {
  console.log('Maior de idade:')
} else {
  console.log('Menor de idade:')
}

let sexo = 'F'

switch (sexo) {
  case 'M':
    console.log('Masculino')
    break
  case 'F':
    console.log('Feminino')
    break
  default:
    console.log('Sexo nao informado')
}

let nota1 = 8,
  nota2 = 6.4,
  media

media(nota1 + nota2) / 2

if (media >= 7) {
  console.log('Aluno Aprovado')
} else if (media >= 5) {
  console.log('Aluno Recuperação')
} else {
  console.log('Aluno Reprovado')
}

let sexo = 'M'

let idade = 15

if (sexo == 'M' && idade >= 18) {
  console.log('Esta na hora de se alistar no exercito')
} else {
  console.log('Não precisa se alistar no exercito')
}

let maiorIdade = false,
  acompanhaResponsavel = false

if (maiorIdade || acompanhaResponsavel) {
  console.log('Pode assistir ao filme maior 18 anos')
} else {
  console.log('Você ainda nao tem idade para este filme')
}
