//Pregunta 1: Utilizando función arrow, crear una función que reciba como 
//parámetros un nombre, apellido y edad y los retorne en un string 
//concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
const saludar = (nombre, apellido, edad) => {
    return `Hola, mi nombre es ${nombre} ${apellido} y mi edad ${edad}.`;
  };

//Ejemplo de uso
console.log(saludar("Juan andrés", "Hazaña Muñoz", 22));


//Pregunta 2: Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855


const sumOfCubes = (...numeros) => {
    let suma = 0;
    for (let numero of numeros) {
      suma += Math.pow(numero, 3);
    }
    return suma;
  };
  
  // Ejemplo de uso
  console.log(sumOfCubes(2, 3, 7)); 
  
  //Pregunta 3: Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

  function tipoDeValor(valor) {
    return typeof valor;
  }

  //Ejemplo de uso
console.log(tipoDeValor(5));            // Output: "number"
console.log(tipoDeValor("Hola"));       // Output: "string"
console.log(tipoDeValor(true));         // Output: "boolean"
console.log(tipoDeValor(null));         // Output: "object"
console.log(tipoDeValor(undefined));    // Output: "undefined"
console.log(tipoDeValor({}));           // Output: "object"
console.log(tipoDeValor([]));           // Output: "object"
console.log(tipoDeValor(function(){})); // Output: "function"

//Pregunta 4: Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parámetros rest)

function sumar(...numeros) {
    let suma = 0
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}

// Ejemplo de uso
console.log(sumar(1, 2, 3));        // Output: 6
console.log(sumar(10, 20, 30, 40)); // Output: 100
console.log(sumar(2, 4, 6, 8, 10)); // Output: 30

//Pregunta 5: Crear una función que reciba un array de valores y filtre los valores que no son string

const filtrarNoStrings = (array) => {
    return array.filter((elemento) => {
        return typeof elemento === 'string';
    });
};

// Ejemplo de uso
const valores = [1, 'hola', true, 'mundo', 5, ''];
console.log(filtrarNoStrings(valores)); // Output: ["hola", "mundo", ""]

//Pregunta 6: Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.

function minMax(arr) {
    return [Math.min(...arr),Math.max(...arr)];
}

// Ejemplo de uso:
console.log(minMax([1, 2, 3, 4, 5])); // Output: [1, 5]

//Pregunta 7:Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.

function formatPhoneNumber(numbers) {
    const telefono = `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
return telefono;
}

// Ejemplo de uso
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Output: "(123) 456-7890"

// Pregunta 8: Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.

const findLargestNums = (matrices) => {
    // Crear una matriz para almacenar los números máximos de cada matriz
    const maximos = [];

     // Iterar sobre cada matriz dentro de la matriz de matrices
  for (let matriz of matrices) {
    // Encontrar el número máximo de la matriz actual
    const maximo = Math.max(...matriz);
    // Agregar el número máximo a la matriz de números máximos
    maximos.push(maximo);
  }
  
  return maximos;
};

// Ejemplo de uso
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); // Output: [7, 90, 2]

//  Uso de "const"
const sumarD = (a, b, c) => {
    return a + b + c;
};

// Uso de "fuction"
function sumar(a,b) {
    return a+b;
}

// Pregunta 9: Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.

function charIndex(palabra, caracter) {
  let primerIndice = -1;
  let ultimoIndice = -1;

  for (let i = 0; i < palabra.length; i++){ 
    if (palabra[i] === caracter) {
      if (primerIndice === -1){
      primerIndice = i;
    }
    ultimoIndice = i
  }
}

return [primerIndice, ultimoIndice];
}

console.log(charIndex("hello", "l")); // Output: [2, 3]

// Operador de incremento ( "i++"" ): es el operador de incremento estándar en JavaScript, puedes utilizar otras formas de incrementar el contador en un bucle for. 
// Algunas de estas formas son:
// Operador de incremento (++i): Es similar a i++, pero incrementa i antes de que se evalúe la expresión en la que se utiliza. Por lo tanto, ++i incrementará i antes de que se ejecute cualquier otra acción en la iteración actual del bucle.
// Operador de asignación de suma (+=): Puedes usar el operador += para incrementar el valor de i en una cantidad específica en lugar de solo 1. Esto puede ser útil si deseas incrementar el contador en un número diferente a 1 en cada iteración.
// Asignación de valor (i = i + 1 o i = i + n): Si bien es menos común, también puedes incrementar i utilizando una asignación de valor normal. Sin embargo, esto es menos conciso y generalmente se prefiere el uso de ++ o += por su claridad y brevedad.


//Pregunta 10: Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.

function toArray(objeto) {
  // Convertir el objeto en una matriz de pares clave-valor
  return Object.entries(objeto);
}

// Ejemplo de uso
console.log(toArray({ a: 1, b: 2 })); // Output: [["a", 1], ["b", 2]]
// En este código, Object.entries(objeto) convierte el objeto en una matriz de pares clave-valor, que luego se devuelve desde la función toArray().

// Pregunta 11: Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

function getBudgets(personas) {
  // Inicializar la suma en 0
  let suma = 0;
  
  // Recorrer la matriz de objetos
  for (let persona of personas) {
      // Sumar el presupuesto de cada persona
      suma += persona.budget;
  }
  
  // Devolver la suma total
  return suma;
}

// Ejemplo de uso
console.log(getBudgets([
{ name: "John", age: 21, budget: 23000 },
{ name: "Steve",  age: 32, budget: 40000 },
{ name: "Martin",  age: 16, budget: 2700 }
])); // Output: 65700

// Pregunta 12: Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.

function getStudentNames(estudiantes) {
  // Crear una matriz vacía para almacenar los nombres
  let nombres = [];
  
  // Recorrer la matriz de estudiantes
  for (let estudiante of estudiantes) {
      // Agregar el nombre de cada estudiante a la matriz de nombres
      nombres.push(estudiante.name);
  }
  
  // Devolver la matriz de nombres
  return nombres;
}

// Ejemplo de uso
console.log(getStudentNames([
{ name: "Steve" },
{ name: "Mike" },
{ name: "John" }
])); // Output: ["Steve", "Mike", "John"]

// Pregunta 13: Escriba una función que convierta un objeto en una matriz de claves y valores.

function objectToArray(objeto) {
  // Crear una matriz vacía para almacenar las claves y valores
  let matriz = [];
  
  // Recorrer las propiedades del objeto
  for (let clave in objeto) {
      // Verificar si la propiedad pertenece al objeto y no a su prototipo
      if (objeto.hasOwnProperty(clave)) {
          // Agregar la clave y el valor como una matriz [clave, valor] a la matriz
          matriz.push([clave, objeto[clave]]);
      }
  }
  
  // Devolver la matriz resultante
  return matriz;
}

// Ejemplo de uso
console.log(objectToArray({
likes: 2,
dislikes: 3,
followers: 10
})); // Output: [["likes", 2], ["dislikes", 3], ["followers", 10]]

// Usar "hasOwnProperty" es importante, debido a que es un método que nos ayudará a determinar si un objetio tiene una propiedad con un nombre especifico como propiedad directa del objeto, es decir, no heredada de su prototipo.

// Pregunta 14: Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.

function squaresSum(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i * i;
  }
  return suma;
}

// Ejemplo de uso
console.log(squaresSum(3)); // Output: 14

// Pregunta 15: Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada

function multiplyByLength(arr) {
  const length = arr.length;
  const multipliedArray = [];

  for (let i = 0; i < length; i++) {
    multipliedArray.push(arr[i] * length);
  }

  return multipliedArray;
}

// Ejemplo de uso
console.log(multiplyByLength([2, 3, 1, 0])); // Output: [8, 12, 4, 0]

// Pregunta 16: Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.

function countdown(number) {
  // Creamos una matriz vacía para almacenar los números descendentes
  let result = [];

  // Usamos un bucle for para iterar desde el número dado hasta cero
  for (let i = number; i >= 0; i--) {
      // Agregamos el número actual a la matriz
      result.push(i);
  }

  // Retornamos la matriz resultante
  return result;
}

// Ejemplo de uso
console.log(countdown(5)); // Output: [5, 4, 3, 2, 1, 0]

// En esta función:

// "number" es el número inicial desde el cual queremos contar hacia abajo.
// Creamos una matriz vacía llamada "result" para almacenar los números descendentes.
// Utilizamos un bucle "for" que comienza en el número dado (number) y se ejecuta mientras i sea mayor o igual a cero. En cada iteración, decrementamos i en uno.
// En cada iteración del bucle, agregamos el valor actual de i a la matriz result utilizando el método "push()".
// Finalmente, retornamos la matriz result que contiene los números descendentes.

// Pregunta 17: Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.

function diffMaxMin(arr) {
  // Encontrar el número más grande y el más pequeño en la matriz
  let maxNumber = Math.max(...arr);
  let minNumber = Math.min(...arr);

  // Calcular la diferencia entre el número más grande y el más pequeño
  let difference = maxNumber - minNumber;

  // Retornar la diferencia
  return difference;
}

// Ejemplo de uso
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); // Output: 82

// En esta función:

// Math.max(...arr) devuelve el número más grande en la matriz arr.
// Math.min(...arr) devuelve el número más pequeño en la matriz arr.
// Restamos el número más pequeño (minNumber) del número más grande (maxNumber) para obtener la diferencia.
// Finalmente, retornamos la diferencia calculada.

// Pregunta 18: Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.

function filterList (arr) {

  return arr.filter(Element => Number.isInteger(element));

}

// Ejemplo de uso
console.log(filterList([1, 2, 3, "x", "y", 10])); // Output: [1, 2, 3, 10]

// En esta función:

// arr.filter() crea una nueva matriz con los elementos de arr que pasan la prueba implementada por la función de filtro.
// Number.isInteger(element) es la función de filtro que devuelve true si element es un número entero, y false de lo contrario.
// El operador de flecha (=>) se utiliza para definir funciones de flecha en JavaScript. En este caso, se utiliza para definir la función de filtro de una manera más concisa. La función de flecha toma un argumento (element) y devuelve true si es un número entero.

// Pregunta 19: Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.

function repeat(elemento, veces) {
  // Creamos una matriz vacía para almacenar las repeticiones del elemento
  let resultado = [];

  // Iteramos 'veces' veces y agregamos 'elemento' a la matriz en cada iteración
  for (let i = 0; i < veces; i++) {
      resultado.push(elemento);
  }

  // Devolvemos la matriz con las repeticiones del elemento
  return resultado;
}

// Ejemplo de uso:
console.log(repeat(13, 5)); // Output: [13, 13, 13, 13, 13]

// Pregunta 20: Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.

String.prototype.vreplace = function(vowel) {
  // Usamos una expresión regular para reemplazar todas las vocales
  // (mayúsculas y minúsculas) con la vocal especificada
  
  return this.replace(/[aeiou]/gi, vowel);
}

// Ejemplo de uso
console.log("apples and bananas".vreplace("u")); // Salida: "upplus und bununus"

// En este código:

// String.prototype.vreplace = function(vowel) { ... }: Estamos agregando un nuevo método llamado vreplace al prototipo de String. Este método acepta un parámetro vowel, que será la vocal con la que se reemplazarán todas las vocales en la cadena.
// return this.replace(/[aeiou]/gi, vowel);: Utilizamos el método replace() de JavaScript junto con una expresión regular para buscar todas las vocales (mayúsculas y minúsculas) en la cadena y reemplazarlas con la vocal especificada.

// Pregunta 21: Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".

function findNemo(sentence) {
  // Dividir la oración en palabras
  const words = sentence.split(" ");
  
  // Iterar sobre las palabras para encontrar "Nemo"
  for (let i = 0; i < words.length; i++) {
      if (words[i] === "Nemo") {
          // Si se encuentra "Nemo", devolver el mensaje con el orden de la palabra
          return `¡Encontré a Nemo en ${i + 1}!`;
      }
  }
  
  // Si "Nemo" no se encuentra, devolver un mensaje indicando eso
  return "¡No se encontró a Nemo!";
}

// Ejemplo de uso:
const resultado = findNemo("I am finding Nemo !");
console.log(resultado); // Output: "¡Encontré a Nemo en 4!"

// Esta función findNemo divide la oración en palabras utilizando el método split y 
// luego itera sobre estas palabras. Cuando encuentra la palabra "Nemo", devuelve un mensaje 
// con el índice de esa palabra en la oración. Si no encuentra "Nemo", devuelve un mensaje 
// indicando que no se encontró. 

// Pregunta 21: Cree una función que capitalice la última letra de cada palabra.

function capLast(word) {
  // Verificar si la palabra tiene al menos una letra
  if (word.length === 0) {
      return word; // Devolver la palabra sin cambios si no tiene letras
  }

  // Obtener la última letra y el resto de la palabra
  const lastLetter = word.slice(-1).toUpperCase();
  const restOfWord = word.slice(0, -1);

  // Devolver la palabra con la última letra capitalizada
  return restOfWord + lastLetter;
}

function capLastInSentence(sentence) {
  // Dividir la oración en palabras
  const words = sentence.split(" ");

  // Capitalizar la última letra de cada palabra
  const capitalizedWords = words.map(word => capLast(word));

  // Unir las palabras nuevamente en una oración
  const result = capitalizedWords.join(" ");

  return result
}

// Ejemplo de uso:
const result = capLastInSentence("hello world");
console.log(result); // Output: "hellO worlD"

// Esta función capLastInSentence divide la oración en palabras, luego 
// capitaliza la última letra de cada palabra utilizando la función capLast, 
// y finalmente une las palabras nuevamente en una oración. 