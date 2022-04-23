const validarCep = (cep) => {
    //99.999-999
    let regex = new RegExp("[0-9]{2}\.[0-9]{3}\-[0-9]{3}")
    return regex.test(cep)
}

const validarPlaca = (placa) => {
    let regex = new RegExp("[A-Z]{3}\\d\\-[A-Z]\\d{2}")
    return regex.test(placa)
}


console.log(validarCep("22.777-005"))
console.log(validarCep("22777005"))
console.log(validarCep("22.777"))

console.log(validarPlaca("AAA9-B19"))