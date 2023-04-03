// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse".
// Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona{
    #edad;
    #nombre;
    #profesion;
    constructor(nombre,edad,profesion){
      this.#nombre=nombre
      this.#edad=edad;
      this.#profesion=profesion
    }
    get _Nombre() {
      return this.#nombre;
    }
    set _Nombre(nuevoNombre) {
      this.#nombre = nuevoNombre;
    }
    get _Edad() {
      return this.#edad;
    }
    set _Edad(nuevoEdad) {
      this.#edad = nuevoEdad;
    }
    get _profesion() {
      return this.#profesion;
    }
    set _Profesion(nuevoProfesion) {
      this.#profesion = nuevoProfesion;
    }   
    saludar(){
      document.write(`${this.#nombre} Saludo... Buenos dias <br>`);
    }
    despedirse(){
      document.write(`${this.#nombre} se esta Despodiendo... Hasta luego <br>`);
    }
  }
  
  let personaUno = new Persona('Juan',33,'Programador');
  let personaDos = new Persona('Monica',33,'Ingeniera Industrial');
  personaUno.saludar();
  personaUno.despedirse();
  personaDos.saludar();
  personaDos.despedirse();
  