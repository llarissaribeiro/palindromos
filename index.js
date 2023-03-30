const palavra = prompt("Informe uma palavra:")
let palavraInvertida = ""

//.length - 1 = começa da última letra da palavras
//condição = quando i for maior igual a primeira letra (0)
// i-- volta uma letra
for(let i = palavra.length - 1; i >= 0; i--){
  palavraInvertida += palavra[i]
}

//verificar se a palavra é igual a palavra invertida
if(palavra === palavraInvertida){
  alert(palavra + " é um palíndromo!")
} else{
  alert(
    palavra + " não é um palíndromo!\n\n" + 
    palavra + " !== " + palavraInvertida)
}

