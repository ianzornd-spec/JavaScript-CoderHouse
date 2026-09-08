const numeroSecreto = 7

const nombre = prompt('Como se llama usted?')

alert('Bienvenido ' + nombre + ' a la trivia HTML...')

let numero = parseInt(prompt('Adivina... En que numero esoty pensando???'))

while(numero != 7){
    
    for(i = 1; numero != 7; i++){

        if(numero < 7){
            numero = parseInt(prompt('El numero secreto es mayor al tuyo... ingresa otro numero'))
        }

        else{
            numero = parseInt(prompt("El numero secreto es menor al tuyo... ingresa otro numero"))
        }
    }


}

alert('DIOSS HAS ADIVINADO EL NUMERO SECRETO 🤯🤯🤯')

alert('Como dato extra has intentado ' + i + ' veces para adivinar el numero')






