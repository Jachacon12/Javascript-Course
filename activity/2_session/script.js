/**
 * @class InvertirCadena
 * @classdesc This class is used to reverse a string.
 */
export class InvertirCadena {
   /**
   * @constructor
   * @description Constructor for the InvertirCadena class. Initializes an empty string to be reversed.
   */
  constructor() {
    // Initialize the string to be reversed
    this.cadenaInvertir = '';
  }

   /**
   * @method reverseString
   * @description This method is used to reverse the string. If the string is empty, it throws an error. Otherwise, it returns the reversed string.
   * @throws {Error} Will throw an error if the string to be reversed is empty.
   * @returns {string} The reversed string.
   */
  reverseString = () => {
    // Check if the string to be reversed is empty
    if (this.cadenaInvertir === '') {
      // Throw an error if the string is empty
      throw new Error('La cadena a invertir no puede estar vacía.');
    }
    const cadenaInvertida = this.cadenaInvertir.split('').reverse().join('');
    // Return the reversed string
    return cadenaInvertida;
  };
}

/**
 * Login class handles the login functionality.
 */
export class Login {
  /**
   * Constructor for the Login class.
   * @param {string} username - The username of the user.
   * @param {string} password - The password of the user.
   */
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  /**
   * Method to handle the login functionality.
   * If the username is 'admin' and password is 'passwd', it alerts 'Usuario logeado'.
   * Otherwise, it alerts 'Usuario o contraseña incorrectas'.
   */
  login() {
    if (this.username === 'admin' && this.password === 'passwd')
      alert('Usuario logeado');
    else alert('Usuario o contraseña incorrectas');
  }
}
