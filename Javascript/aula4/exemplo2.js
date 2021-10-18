const data = new Date('2021/01/15')
function formatDate() {
  const dia = data.getDate()
  let mes = data.getMonth()
  mes = mes + 1
  const ano = data.getFullYear()
  return dia + '/' + mes + '/' + ano
}

//---------------------------------------
console.log(formatDate(data))
