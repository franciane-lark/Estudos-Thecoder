console.log(/coder/.test("the coder br - instagram"))
console.log(/code/.test("novo instagram de conteúdo"))

let nome = "Jose Andrade"
if(/Andrade/.test(nome)){
    console.log("A pessoa é da família Andrade")
}

let idade = "30 anos"
if(/0123456789/.test(idade)){
    console.log("Idade é válidaII")
}

if(/[0-9]/.test(idade)){
    console.log("Idade é válidaIII")
}
