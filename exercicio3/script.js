//códigos a serem reescritos


const nome = prompt("Digite o seu nome")

// a)
// if(nome === "José"){
// 	console.log("Oi, Zé!")
// } else {
// 	console.log("Olá, " + nome)
// }

nome === "José" ?
	console.log("Oi, Zé!") :
	console.log(`Olá, ${nome}`)


// b)
// if(idade >= 18){
// 	console.log("Pode tirar carteira de motorista!")
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista!")
// }

const idade = Number(prompt("Informe sua idade"))
idade >= 18 ?
	console.log("Pode tirar carteira de motorista!") :
	console.log("Ainda não pode tirar carteira de motorista!")


