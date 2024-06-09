// Ejercicio 1
// Crea una interfaz 'Person' que tenga como atributos 'name', 'age' y 'profession'. Ahora define una arrow function que tenga como parámetro esta interfaz y que devuelva un array con el valor de sus propiedades, esta función tiene que tener tipado el parámetro de entrada y el return.

interface Person {
  name: string;
  age: number;
  profession: string;
}

const getPersonValues = (person: Person): (string | number)[] => {
  return [person.name, person.age, person.profession];
};

const examplePerson: Person = {
  name: 'Jorge',
  age: 29,
  profession: 'developer',
};

const values = getPersonValues(examplePerson);

console.log(values);

// Escribe una función llamada sumOrConcatenate que acepte dos parámetros.
// Cada uno de estos parámetros podrá ser de tipo number o string.
// La función devolverá una suma si los dos parámetros son números,
// una concatenación con el símbolo `-` si son los dos `strings`
// o una cadena concatenadad con `:` si uno es un number y el otro string.

function sumOrConcatenate(x: number | string, y: number | string) {
  if (typeof x === 'number' && typeof y === 'number') return x + y;
  if (typeof x === 'string' && typeof y === 'string') return `${x}-${y}`;
  return `${x}:${y}`;
}
console.log(sumOrConcatenate(5, 10)); // Output: 15
console.log(sumOrConcatenate('Hello', 'World')); // Output: "Hello-World"
console.log(sumOrConcatenate(5, 'World')); // Output: "5:World"
console.log(sumOrConcatenate('Hello', 10)); // Output: "Hello:10"
