/**
¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
 */

function createXmasTree(height) {
  //Check if the heigth is negative and greater than 100
  if(height<0 || height>100){
    return "Invalid Height"; 
  }

  let result="";
  let tree = "*";
  let lines="-";

  for (let i = 1; i <= height; i++) {
    result+=lines.repeat(height-i)+tree.repeat(i*2-1)+lines.repeat(height-i)+"\n";
  }
  result+=(lines.repeat(height-1)+tree+lines.repeat(height-1)+"\n").repeat(2);
// +tree.repeat(i*2-1)+lines.repeat(j)
  return result;
}


console.log(createXmasTree(3));

// function createXmasTree(height) {
//   if (height % 1 !== 0 || height > 100) return;

    

//   return "";
// }
