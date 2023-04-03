// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". 
// Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". 
// Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos 
//"emitirSonido" para verificar que cada animal emite el sonido adecuado. 

class Animal{
    #edad;
    #nombre;
    constructor(nombre,edad){
      this.#nombre=nombre;
      this.#edad=edad;
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

    emitirSonido(){
    }
  }
  class Perro extends Animal{
    constructor(nombre,edad){
      super(nombre,edad);
    }
    emitirSonido(){
      document.write('Wau wau<br>');
    }
  }
  class Gato extends Animal{
    constructor(nombre, edad){
      super(nombre,edad);
    }
    emitirSonido(){
      document.write('Miau miau<br>');
    }
  }
  let animal1=new Perro('Roony',14);
  let animal2=new Gato('Michel',3);
 
  animal1.emitirSonido();
  console.log(animal1);
  animal2.emitirSonido();
  console.log(animal2);
  