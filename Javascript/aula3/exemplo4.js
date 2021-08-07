let carros = ['Hb20', 'Audi', 'Ferrari', 'Uno', 'Ka']

console.log(carros[2])
console.log(carros[0])

console.log('Número de carros: ' + carros.length)

carros[8] = 'Sandero'

console.log('----------------------------')

console.log('Carro novo = ' + carros[10])

for (let i = 0; i < carros.length; i++) {
  console.log('Carro = ' + carros[i])
}
