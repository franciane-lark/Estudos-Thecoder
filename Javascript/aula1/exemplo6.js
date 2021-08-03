let v1 = '10', v2 = '10'

console.log(("Valores são iguais: ") + (v1 == v2))
console.log(("Valores são iguais mesmo: ") + (v1 === v2))
console.log(("Os tipos são iguais: "), typeof v1, " --- ", typeof v2)

let idade = 18

if(idade >= 18 ){
  console.log("Maior de idade")
}else{
  console.log("Menor de idade")
}

//iF TERNÁRIO = CONDIÇÃO ? VALOR VERDADEIRO : VALOR FALSO

console.log( idade >= 18 ? "Maior de idade" : "Menor de idade")

v1 = 15
console.log(v1%2 == 0 ? "Numero PAR" : "Numero Impar")