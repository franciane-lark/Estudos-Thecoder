let data = "2/5/2022"

/*
Numero_Numero_/_Numero_Numero_/_Numero_Numero_Numero_Numero
Numero_/_Numero_Numero_/_Numero_Numero_Numero_Numero
Numero_/_Numero_/_Numero_Numero_Numero_Numero
*/

let patternData = /^\d{1,2}\/\d{1,2}\/(\d{2}|\d{4})$/

if(patternData.test(data)){
    console.log("Data valida")
}else{
    console.log("Erro na data")
}