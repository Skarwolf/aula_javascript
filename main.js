


function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
        alert("Parabens agora você pode ser preso ♥");
       
    }else{
        validar = false
        alert("Bom, por enquanto seus Pais assumem os crimes ☻");
    }
    return validar;
}

var idade = prompt("Qual é sua idade amigão? ");
console.log(validaIdade(idade));

/* 
// Ele seta palavras especifica e susbtitiu com novo_nome - Função Troca String
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome,novo_nome);
}

alert(setReplace("Vai Japão", "Japão","Brasil"));
*/


/* 
//- Função - Somar dois Números
function soma(n1,n2){
 return n1 + n2
}

var n1 = prompt("Digite um número para N1");
var n2 = prompt("Digite um número para N2");
alert(soma(n1,n2));
*/

/*
var nome = prompt("Qual é seu nome?:")
alert("Seja bem vindo " + nome)
*/

/* - Função Date 
var d = new Date();
alert(d.getMonth()); //Mês 
alert(d.getMinutes());  //Minutos 
alert(d.getHours());  //Horas 
alert(d.getSeconds());  //Segundo 
-----------------
var d = new Date(); 
alert(d);
*/


/* For -
var count = 0;
for(count = 0; count <= 5; count ++){
    console.log(count);
    alert(count);
}
*/


/* While
Laços de repetição 
var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count = count + 1; /pode ser trocado por "count ++"
}




/*
Estrutura Condicional (Boleana); IF e Else

var idade = prompt("Qual é sua Idade? ");
var idade = 17; 

if (idade >= 18){
    alert("Esse garoto é maior de idade");
}else{
    alert("ele é menor de idade");
}
*/



/* Lista - Dicionario 
var minerio2 = [{nome:"ferro", cor:"Cinza Prateado"},{nome:"ouro", cor:"Dourado"}];
alert(minerio2[1].cor);
*/



/*
Array - Lista 
var minerio = {nome:"ferro", cor:"Cinza Prateado"};
console.log(minerio.nome);
alert(minerio.cor);
*/





/*
Lista de Minerios
var lista = ["Pedra","Madeira","Ferro"];
lista.push("Ouro"); / Adiciona algo na lista "forçadamente"
lista.pop(""); / retira o que o push adiciono
console.log(lista[0]);
console.log(lista.length); // O tamanho da lista e tambem pode ver o tamanho da string 
console.log(lista.reverse()); // Pode trazer os elementos ao contrario da lista 
console.log(lista.toString()); //Trás os elementos como String
console.log(lista.join(" | ")); //Adiciona um separação "pode colocar qualquer tipo de coisa no caso" entre os elementos  
alert(lista);
*/



/*
var nome = "Lucas Aguiar"
var idade =20;
var frase = "Japão é o melhor time do Mundo"

alert(nome +  " tem " + idade + " anos de idade ")

console.log(frase.replace("Japão", "Brasil"));
console.log(nome);
console.log(idade);
alert(frase.replace("Japão", "Brasil"));

var n1 = 5; 
var n2 = 10;
var n3 = n1 + n2; 
alert(n3)

*/