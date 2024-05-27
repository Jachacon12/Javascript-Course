import { InvertirCadena } from './script.js';

// Ejercicio 1
// Example of arrow function
const person = {
  name: 'Lucas',
  age: 27,
  profession: 'Developer',
};

// Regresa las llaves de un objeto
const getKeys = obj => Object.keys(obj).map(key => key);

// Regresa las llaves y su respectivo valor

const getAllInfo = obj => Object.keys(obj).map(key => `${key}: ${obj[key]}`);

// Hace la misma funcion que getAllInfo pero puede usarse cuando manipulamos objetos grandes de un forma mas optimizada
const getData = obj => {
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(`${key}: ${obj[key]}`);
    }
  }
  return result;
};

console.log(getData(person));

// Ejercicio 2

//La respuesta esta en el README

// Ejercicio 3

const invertirCadena = new InvertirCadena();

//Ejecución inicial sin cambiar cadenaInvertir
// Agregando un un bloque de try-catch, manajaremos el error apropiadamente. Esto evitara que el codigo no se rompa al lanzar el error.

try {
  invertirCadena.invertirCadena();
} catch (error) {
  console.error(error.message); // Captura y muestra el error
}

// Aqui ya le cambiamos el valor 'cadenaInvertir' y lo volvemos a ejectutar

invertirCadena.cadenaInvertir = 'bob esponja y patricio estrella';

console.log(invertirCadena.reverseString());

// Intento de acceder a un método inexistente, de igual forma utilizamos un try-catch para manejar correctamente el error.

try {
  invertirCadena.nuevoMetodo();
} catch (error) {

  // Manejamos el error de acceso a un método inexistente
  console.error(error.message); 
}
// Ejercicio 4

// Ejercicio 5

// Ejercicio 6

let loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === 'admin' && password === 'passwd') {
        resolve('User logged in');
      } else {
        rejected('Error: invalid username or password');
      }
    }, 200);
  });
};
