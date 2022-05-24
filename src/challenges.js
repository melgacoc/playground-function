// Desafio 1
function compareTrue(ele1, ele2) {
  if (ele1 === true && ele2 == true){
    return true;
  } else return false;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
  
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  //let split = frase.split(' ');
  //let palavras = [];
  //for (index = 0; index < split.length; index +=1){
  //palavras.push(split[index]);}
  //return (palavras);
  return frase.split(' ');
  // seu código aqui
}

// Desafio 4
function concatName(names) {
  //var first = names[0];
  //var last = names[names.length - 1];
  //var result = names[names.length -1]+', '+names[0];
  return names[names.length -1]+', '+names[0];
    
  }

  // seu código aqui


// Desafio 5
function footballPoints(wins,ties) {
  let result = wins*3+ties;
  return result;
  // seu código aqui
  
}

// Desafio 6
function highestCount(numbers) {
  let highest = Math.max(...numbers);
  let vezesQueAparece = 0;
  for (index = 0; index < numbers.length; index += 1){
    if (numbers[index] == highest){
    vezesQueAparece += 1;
    }
   }
   return vezesQueAparece;
  }
  // seu código aqui


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = cat1 - mouse;
  let gato2 = cat2 - mouse;
  let v1 = Math.abs(gato1);
  let v2 = Math.abs(gato2);
  if (v1 < v2) {
    return 'cat1';
  } else if (v1 > v2) {
    return 'cat2';
  } else return 'os gatos trombam e o rato foge';
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(frase) {
  return frase.replace(/a/g , '1')
  .replace(/e/g , '2')
  .replace(/i/g , '3')
  .replace(/o/g , '4')
  .replace(/u/g , '5'); 
  // seu código aqui
}
function decode(frase) {
  return frase.replace(/1/g , 'a')
  .replace(/2/g , 'e')
  .replace(/3/g , 'i')
  .replace(/4/g , 'o')
  .replace(/5/g , 'u'); 
  // seu código aqui
}

// Desafio 10
function techList(tec, nome) {
  let lista = [];
  tec.sort();
  if (tec.length == 0 || nome === 0){
    return 'Vazio!';
  } else{
    for (index = 0; index < tec.length; index += 1){
      lista.push({
        tech: tec[index],
        name: nome
      })
     }
  }
  return lista;

  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
