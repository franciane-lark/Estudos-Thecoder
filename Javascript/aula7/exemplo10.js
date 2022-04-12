let texto = "Os sistemas deram erro no ano de 2000 por conta de uma mudança"

let regex = /\d+/g
console.log(regex.exec(texto))

console.log(texto.match(regex))

let salario = "Meu salario é R$ 3800,70"

/*
\d -- apenas numeros
\D -- não numeros
*/

let salario2 = salario.replace(/\[^0-9,]/g,"")
console.log(salario)
console.log(salario2)