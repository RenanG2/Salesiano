let frase = "O lobo ama o bolo"

let fraseMinuscula = frase.toLocaleLowerCase()

let fraseSemEspacos = fraseMinuscula.replace(/\s/g, '')

let separarFraseEmArray = fraseSemEspacos.split('')

let inverterFrase = separarFraseEmArray.reverse()

let juntarFrase = inverterFrase.join('')

if(fraseSemEspacos === juntarFrase) {
    console.log("É palíndromo!")
}
