// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
//Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona
// creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad (mayor de 16 ).
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.
const generarDNI = () => Math.floor(Math.random() * (99999999 - 00000000 + 1) + 00000000);

class Persona{
  constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento){
    this.nombre=nombre;
    this.edad=edad;
    this.dni=dni;
    this.sexo=sexo;
    this.peso=peso;
    this.altura=altura; 
    this.anioNacimiento=anioNacimiento; 
  }
 mayorDeEdad(){
    if(this.edad >= 18){
      document.write(`Es mayor de edad`);
    }else{
      document.write(`No es mayor de edad`);
    }
  }

  imprimeDatos(){
    document.write('<h2>Datos</h2>')
    document.write(`Nombre: ${this.nombre},<br> `);
    document.write(`Edad: ${this.edad} años,<br> `);
    document.write(`Dni: ${this.dni}<br>`);
    document.write(`Sexo: ${this.sexo}<br>`);
    document.write(`Peso: ${this.peso}<br>`);
    document.write(`Altura: ${this.altura}<br>`);
    document.write(`Año de nacimiento: ${this.anioNacimiento} <br>`);
  }

}

let juan = new Persona ('Juan Mauel Gimenez',33,generarDNI(),'H','104kg','1.78m',1989);
juan.mayorDeEdad();
juan.imprimeDatos();


let mony = new Persona ('Monica del Valle Sosa',33,generarDNI(),'M','54kg','1.5m',1989);
mony.mayorDeEdad();
mony.imprimeDatos();