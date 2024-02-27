//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')

//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
n1 = 2
n2 = 2
soma = n1 + n2
alert(`A soma entre ${n1} + ${n2} é ${soma}`)

//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let num = prompt('Digite um número: ')
if (typeof(Number(num)) === 'number' && !isNaN(Number(num))) {
    alert('É um número')
} else {
    alert('Não é um número')
}

//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let word = ('palavra')
if (typeof word === 'string') {
    alert('É uma String')
} else {
    alert('Não é uma string')
}

//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let valores = false
if (typeof valores === 'boolean') {
    alert('Booleano')
} else {
    alert('não é booleano')
}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let num1 = 3
let num2 = 2
let sub = num1 - num2
alert(`${num1} - ${num2} = ${sub}`)

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let num3 = 3
let num4 = 2
let mult = num3 * num4
alert(`${num3} x ${num4} = ${mult}`)

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let num5 = 3
let num6 = 2
let div = num5 / num6
alert(`${num5} / ${num6} = ${div}`)

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let valor = prompt('digite um numero: ')
if (valor % 2 == 0) {
    alert(`O ${valor} é par`)
} else {
    alert(`O ${valor} é impar`)
}
