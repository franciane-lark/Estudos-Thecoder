const dobro = (n) => {
  if( n == undefined) return 0
  console.log("Valor de N = ", n)
  return n * 2
}

console.log(dobro(10))
console.log(dobro(8))
console.log(dobro(13))

console.log(dobro(9, 8, 7, 3))

console.log(dobro())

const hello = (nome = "N/D") => { //senão passar o paramento, não vai aparecer o nome
  return "Seja bem vindo" + nome
}

console.log(hello("Ana"))
console.log(hello("José"))
console.log(hello("Cris", "Leo"))
console.log(hello(""))

const multiplicar = (n1, n2 = 2) => {
  return n1 * n2
}

console.log(mul)
