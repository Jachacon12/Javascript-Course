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
// Escribe una función llamada sumOrConcatenate que acepte dos parámetros.
// Cada uno de estos parámetros podrá ser de tipo number o string.
// La función devolverá una suma si los dos parámetros son números,
// una concatenación con el símbolo `-` si son los dos `strings`
// o una cadena concatenadad con `:` si uno es un number y el otro string.
function sumOrConcatenate(x, y) {
    if (typeof x === 'number' && typeof y === 'number')
        return x + y;
    if (typeof x === 'string' && typeof y === 'string')
        return "".concat(x, "-").concat(y);
    return "".concat(x, ":").concat(y);
}
console.log(sumOrConcatenate(5, 10)); // Output: 15
console.log(sumOrConcatenate('Hello', 'World')); // Output: "Hello-World"
console.log(sumOrConcatenate(5, 'World')); // Output: "5:World"
console.log(sumOrConcatenate('Hello', 10)); // Output: "Hello:10"
var handleVehicle = function (vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else if (isMotorcycle(vehicle)) {
        vehicle.openThrottle();
    }
};
// Función para verificar si un objeto es de tipo Car
function isCar(vehicle) {
    return vehicle.pressPedal !== undefined;
}
// Función para verificar si un objeto es de tipo Motorcycle
function isMotorcycle(vehicle) {
    return vehicle.openThrottle !== undefined;
}
var miCarro = {
    tires: 4,
    turnOnEngine: function () {
        console.log('Car engine started');
    },
    pressPedal: function () {
        console.log('Car pedal pressed');
    },
};
var miMoto = {
    tires: 2,
    turnOnEngine: function () {
        console.log('Motorcycle engine started');
    },
    openThrottle: function () {
        console.log('Motorcycle throttle opened');
    },
};
handleVehicle(miCarro);
handleVehicle(miMoto);
// Crea una `función genérica`, que acepte un array que pueda contener
// `strings` y `numbers` y devuelva el mismo array sin el primer elemento.
// Definición de la función genérica sin restricción
function removeFirstEntry(array) {
    return array.slice(1);
}
// Definición de la función genérica con restricción
function removeFirstElement(array) {
    return array.slice(1);
}
var strArray = [
    'Hello',
    'World',
    'Im',
    'a',
    'Full',
    'Stack',
    'Developer',
];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
var newUnsupportedArray = removeFirstEntry(unsupportedArray);
console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
console.log(newUnsupportedArray);
