/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 */


// Code from Lena

function isPrimo(number) {
  if (number === 1) {
    console.log(`${number} es primo`);
    return;
  }

  let counter = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) counter++;
  }

  console.log(counter === 2 ? `${number} es primo` : `${number} no es primo`);
}

function primos(){
  for (let i = 1; i <= 100; i++) {
    isPrimo(i);
  }
}

primos();

// function generateArray(number) {
//   return Array.from({ length: number }, (_, i) => i + 1);
// }

// generateArray(100).forEach((number) => {
//   isPrimo(number);
// });

// function isPrimo(number) {
//   if (number === 1) {
//     console.log(`${number} es primo`);
//     return;
//   }

//   let counter = 0;
//   generateArray(number).forEach((n) => {
//     if (number % n === 0) counter++;
//   });

//   console.log(counter === 2 ? `${number} es primo` : `${number} no es primo`);
// }
