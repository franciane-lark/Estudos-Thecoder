const validarCorHexa = (hexadecimal) => {

    let patterValid = /^(#[A-F0-9]{6}|#[A-F0-9]{3})$/i
    return patterValid.test(hexadecimal)
}

const validarIP = (ip) => {

    let patterValid = /^\d{3}\.\d{3}\.\d{3}\.\d{3}$/i
    return patterValid.test(ip)
}

console.log(validarCorHexa("#FF0000"))
console.log(validarCorHexa("#0F2"))
console.log(validarCorHexa("#00F5"))

console.log(validarIP("255.255.150.120"))