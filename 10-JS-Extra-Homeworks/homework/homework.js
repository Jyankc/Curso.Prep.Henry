// No cambies los nombres de las funciones.

const { stringify } = require("git-url-parse")

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return (Object.entries(objeto))
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  // i---> contar stringlenght
  //v --> contar la letra
  //ejemplo "bartolomeo"
  var obj={}
  
  for (var i=0; i<string.length; i++){
    let re = new RegExp(string[i], 'gi')
    obj[string[i]]= string.match(re).length
  }


return obj

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var string2 = "";
  var string3 = "";
  for (var i = 0; i < s.length; i++) {
    var chat = s.charAt(i)
    if (chat === chat.toUpperCase()) { string2 += s.charAt(i); } else { string3 += s.charAt(i); }
  } return string2 + string3
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arr = str.split(" ")
  var str2 = []
  var str3 = []
  for (var v = 0; v < arr.length; v++) {
    for (var i = 0; i < arr[v].length; i++) {
      str2.unshift(arr[v].charAt(i));

    }
    str3.push(str2.join(""));
    str2 = [];
  }
  return str3.join(" ");
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Ejemplo 13531
  //Escribe tu código aquí
  var letra = numero.toString()
  var letraInv = ""
  for (var i = letra.length - 1; i >= 0; i--) {
    letraInv += letra[i]
  }
  if (Number(letraInv) === numero) { return "Es capicua" } else { return "No es capicua" }

}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.replaceAll("a", "");
  cadena = cadena.replaceAll("b", "");
  cadena = cadena.replaceAll("c", "");
  return cadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort((element1, element2) => { return element1.length - element2.length; });
  return arr
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arr3 = []
  for (var v = 0; v < arreglo1.length; v++) {
    for (var i = 0; i < arreglo2.length; i++) {
      if (arreglo1[v] === arreglo2[i]) { 
        arr3.push(arreglo2[i]) }
    }
  }
  return arr3
}



  // No modificar nada debajo de esta línea
  // --------------------------------

  module.exports = {
    deObjetoAmatriz,
    numberOfCharacters,
    capToFront,
    asAmirror,
    capicua,
    deleteAbc,
    sortArray,
    buscoInterseccion,
  };

