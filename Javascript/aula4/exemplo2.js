function formatDate(data){
  let dia = data.getDate()
  let mes = data.getMonth()
  let ano = data.getFullYear()
  return dia + "/" + mes + "/" + ano
}

console.log(data)
console.log("Mes: ", data.getMonth() + 1)

//mes - 0 - Janeiro / 11 - Dezembro

data.setMonth(11)
console.log(data)

//Mes 12 --- Mes 1 do ano seguinte
data.setMonth(12)
console.log(data)

//---------------------------------------
console.log(formatDate(data))
