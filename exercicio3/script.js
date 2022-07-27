Crie a const para a frase aqui
const boas = "BOAS VINDAS, mas não deixe o gato sair"
const jorge = `Jorge tem uma casa verde e com portão azul, com os dizeres: "${boas}"`
console.log(jorge)

//----
console.log(jorge.replace("verde","rosa"))
console.log(jorge.replace("azul","laranja"))

///----
console.log(jorge.replace("azul","laranja").includes("verde"))
console.log(jorge.replace("azul","laranja").includes("laranja"))

//-----
const frasealta = "BOAS VINDAS, mas não deixe o gato sair"
const frasetoUpperCase = frasealta.toUpperCase()
const jorge = `Jorge tem uma casa verde e com portão azul, com os dizeres: "${frasetoUpperCase}"`
console.log(jorge)
