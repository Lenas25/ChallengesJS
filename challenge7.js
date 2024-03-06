/*
 * Reto #7
 * CONTANDO PALABRAS
 * Fecha publicación enunciado: 14/02/22
 * Fecha publicación resolución: 21/02/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 */

// Code from Lena



// /**
//  * @param {string} text
//  */
function countWords(text) {
  //lo convierte a minusculas y lo separa por espacios
  const splitWord = text.toLowerCase().split(" ");
  const results = [];

  splitWord.forEach((element) => {
    //limpia la palabra de signos de puntuacion con un regex y grupo
    const cleanWord = element.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    console.log(cleanWord)
    //busca si la palabra ya existe en el array de resultado con un for each y si no la encuentra retorna un -1
    const index = results.findIndex((res) => res.word === cleanWord);
    console.log(index)
    //si el indice arroja -1, en el array results se agrega un objeto con la palabra y el contador en 1
    index === -1
      ? results.push({
          word: cleanWord,
          count: 1,
        })
      //si el indice arroja un numero, se accede al array y al indice al contador para aumentar en 1
      : results[index].count++;
  });

  console.log(results);
}

countWords(
  "Hola completo, mi nombre es Linder. Mi nombre completo es linder linder (linder3hs)."
);
