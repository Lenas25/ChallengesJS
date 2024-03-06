/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 */

// Code from Lena

function areaPoligono(type, base, height) {
  const poligono={
    triangulo: (base * height) / 2,
    cuadrado: (base === height) ? base * height : "No es un cuadrado, es un rectángulo.",
    rectangulo: base * height,
  }
  return (type in poligono)? poligono[type]: "Polígono no soportado";
}

// function areaPoligono(type, base, hight) {
//   const res = {
//     triangulo: (base * hight) / 2,
//     cuadrado: base ** hight,
//     rectangulo: base * hight,
//   };

//   return res[type];
// }

console.log(areaPoligono("rombo", 2, 2));
