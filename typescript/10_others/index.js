// Ejercicio 1
// Crea una interfaz 'Person' que tenga como atributos 'name', 'age' y 'profession'. Ahora define una arrow function que tenga como parámetro esta interfaz y que devuelva un array con el valor de sus propiedades, esta función tiene que tener tipado el parámetro de entrada y el return.
var getPersonValues = function (person) {
    return [person.name, person.age, person.profession];
};
var examplePerson = {
    name: 'Jorge',
    age: 29,
    profession: 'developer',
};
var values = getPersonValues(examplePerson);
console.log(values);
