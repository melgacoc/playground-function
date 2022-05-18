// Desafio 1
function compareTrue(ele1, ele2) {
  if (ele1 === true && ele2 == true){
    return true;
  } else return false;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2
  return resultado;
  
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  //let split = frase.split(' ');
  //let palavras = [];
  //for (index = 0; index < split.length; index +=1){
  // palavras.push(split[index]);}
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
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
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
