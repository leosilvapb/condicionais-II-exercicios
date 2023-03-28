//A)

const num = Number(prompt("Digite um número"))

if (num % 2 === 0) {

    if (num % 3 === 0) {
        console.log("É divisivel por 2 e 3")

    } else {
        console.log("É divisivel por 2 mas não por 3")
    }
} else {
    if (num % 3 === 0) {
        console.log("Não é divisivel por 2, mas é divisivel por 3")

    } else {
        console.log("Não é divisivel por 3 e 2")
    }
}

console.log("============================================")

//B)

if (num % 2 === 0 || num % 3 === 0) {
    console.log("É divisivel por 2 ou por 3")
} else {
    console.log("Não é disivel por 2 ou por 3")
}