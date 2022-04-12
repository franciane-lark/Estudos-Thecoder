let texto = "DOG"

let regex = new RegExp("Dog", "i")
console.log(regex.test(texto))

let idade = "30"
let regex2 = new RegExp("^[0-9]+$")
console.log(regex2.test(idade))

/*Regra e do lado o numero de vezes da regra*/
console.log(/[a-z]/.test("Franciane Silva 80"))
console.log(/^[a-z]$/.test("franciane Silva 80"))
console.log(/^[a-z]+$/.test("franciane"))