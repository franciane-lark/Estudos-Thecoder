let nomeArquivo = "foto.jpg" //invalido

let nomeArquivo2 = "curriculo.docx" //valido
//patter para validar arquivos do tipo documento (doc, docx, pdf)

let patterFileName = /^[a-z0-9_.-]+\.(doc|docx|pdf)$/i
console.log(patterFileName.test(nomeArquivo))
console.log(patterFileName.test(nomeArquivo2))

let email = "texto@dominio.com"
let email2 = "texto@dominio.com.br"
let email3 = "texto@dominio.com.org"
let email4 = "texto@dominio.com.us"

let patterEmailValid = /^[a-z_.-0-9]+@[a-z_.-0-9]+\.[a-z]{2,4}$/i

console.log(patterEmailValid.test(email))

console.log(patterEmailValid.test(email2))

console.log(patterEmailValid.test(email3))

console.log(patterEmailValid.test(email4))


