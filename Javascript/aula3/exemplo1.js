//Função -- Procedimento, não retorna valor

function hello(nome){
  console.log(`${nome}, Seja bem vindo ao modulo de JS`)
}

hello("Francys")
hello("Fran")
hello("Ciane")

function subtrair(num1, num2){
    return num1 - num2;
}

let resultado = subtrair(80, 31)

console.log(resultado)

let sejaBemvindo = hello("Maria")

/*

console.log(sejaBemvindo)
console.log(sejaBemvindo.toUppercase())

obs: toUppercase não vai funcinar, pois a função não retorna
return `${nome}, Seja bem vindo ao modulo de JS` na function hello
funcionaria normalmente. Importante conhecer as funções
*/