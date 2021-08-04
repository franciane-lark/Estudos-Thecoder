/*-----------------------------------*/
function somar(num1, num2){
      return num1 + num2
}

let soma = somar (10, 3)

/*-----------------------------------*/
const subtracao = (num1, num2) => {
  return num1 - num2;
}

console.log(subtracao(100,90))

/*-----------------------------------*/
const total = (n1, n2) => n1 + n2

console.log(total(10,9))

/*-----------------------------------*/
const sub = (n1, n2) =>{
  if(n1 > n2) return n1 - n2
  return n2 -n1
}

console.log(sub(9,4))
console.log(sub(8,13))

/*-----------------------------------*/
const hello = nome => "Ola, " + nome
console.log(hello("Ana"))