/*
 * Reto #6
 * INVIRTIENDO CADENAS
 * Fecha publicación enunciado: 07/02/22
 * Fecha publicación resolución: 14/02/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que invierta el orden de una cadena de
 * texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

// Code from Lena

function reverseWord(word){
  const cadena = word.split("");
  let newArr=[];

  for(let i=cadena.length-1;i>=0;i--){
    newArr.push(cadena[i]);
  }

  return newArr.join("");
}


// /**
//  * @param {string} word
//  */
// function reverseWord(word) {
//   return word.split("").reverse().join("");
// }

console.log(reverseWord("Hola Mundo"));
