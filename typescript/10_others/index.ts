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
// 1
// Crea dos interfaces, una llamada `Car` y otra `Motorcycle`.
// La primera tendrá las propiedades `tires` (number),
// `turnOnEngine()` (función que devuelve void) y `pressPedal()` (función que devuelve void).

// 2
// La segunda tendrá las propiedades `tires` (number), `turnOnEngine()` (función que devuelve void) y
// `openThrottle()` (función que devuelve void).

// 3
// Escribe una función que acepte un parámetro que pueda ser `Car` o `Motorcycle` que, primero llame a turnOnEngine,
// y luego si es Car llame a pressPedal pero si es Motorcycle llame a openThrottle().
// 4
// Para la comprobación no valdrá `typeof`, necesitaremos hacer uso de type predicates.

interface Vehicle {
  tires: number;
  turnOnEngine(): void;
}
interface Car extends Vehicle {
  pressPedal(): void;
}

interface Motorcycle extends Vehicle {
  openThrottle(): void;
}

const handleVehicle = (vehicle: Car | Motorcycle): void => {
  vehicle.turnOnEngine();
  if (isCar(vehicle)) {
    vehicle.pressPedal();
  } else if (isMotorcycle(vehicle)) {
    vehicle.openThrottle();
  }
};

// Función para verificar si un objeto es de tipo Car
function isCar(vehicle: Car | Motorcycle): vehicle is Car {
  return (vehicle as Car).pressPedal !== undefined;
}

// Función para verificar si un objeto es de tipo Motorcycle
function isMotorcycle(vehicle: Car | Motorcycle): vehicle is Motorcycle {
  return (vehicle as Motorcycle).openThrottle !== undefined;
}

const miCarro: Car = {
  tires: 4,
  turnOnEngine() {
    console.log('Car engine started');
  },
  pressPedal() {
    console.log('Car pedal pressed');
  },
};

const miMoto: Motorcycle = {
  tires: 2,
  turnOnEngine() {
    console.log('Motorcycle engine started');
  },
  openThrottle() {
    console.log('Motorcycle throttle opened');
  },
};

handleVehicle(miCarro);
handleVehicle(miMoto);
