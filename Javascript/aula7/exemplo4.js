/*
\w --- Alfa numerico (texto)
\s -- espaço
\d -- valor numerico
\W --- not Alfa numerico (texto)
\S --- not espaço
\D --- not valor numero
*/

let nome = "Franciane Lark"

if(/^[\w ]+$/i.test(nome)){
    console.log("Nome valido")
}else{
    console.log("Nome invalido")
}