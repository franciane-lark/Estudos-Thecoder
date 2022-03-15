let sexo = "m"

if(/^(m|f)$/i.test(sexo)){
    console.log("Sexo valido")
}else{
    console.log("erro no sexo")
}

let idade = "30"
/*

    + --- Pelo menos 1 referência de regra anterior
    * --- 0 Referencia ou muitas da regra anterior
    ? --- 0 ou 1 referencia da regra anterior
*/

if(/^[0-9][0-9]{1,3}$/.test(idade)){
    console.log("Idade Válida")
}else{
    console.log("Idade Inválida")
}