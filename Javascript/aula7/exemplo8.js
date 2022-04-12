let texto = "No ano de 2000 houve um erro nos sistema, mais de 100000 erros, relacionado ao BUG do milenio"
/*
\d -- significa valor numerico
*/
let pattern = /\d+/g

let regex = pattern.exec(texto)

console.log(regex[0])
console.log(regex["index"])
console.log(regex)

let regex2 = pattern.exec(texto)

console.log(regex2[0])
console.log(regex2["index"])
console.log(regex2)