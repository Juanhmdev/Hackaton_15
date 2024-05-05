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