//data e hora

let data = new Date()
console.log(data)

let mes = data.getMonth()
let dia = data.getDate()
let ano = data.getFullYear()

console.log(mes + 1)
console.log(dia)
console.log(ano)

let hora = data.getHours()
if(hora < 10) hora = "0"+hora
let minuto = data.getMinutes()
if(minuto < 10) minuto = "0"+minuto
let seg = data.getSeconds()

console.log(hora)
console.log(minuto)
console.log(seg)

console.log(dia, "/",mes,"/",ano)
console.log(hora, ":",minuto,"/",seg)