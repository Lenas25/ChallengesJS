/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 *
 */

// Code from Lena

let fib=[0,1];
for(let i=2;i<=50;i++){
  fib[i]=fib[i-1]+(fib[i-2]);
}

console.log(fib.join(", "));



// let a = 0;
// let b = 1;

// let counter = 0;

// while (counter <= 50) {
//   console.log(a);

//   let c = a + b;

//   a = b;
//   b = c;

//   counter++;
// }
