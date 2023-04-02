// Cuenta bancaria - Dificultad:  🟢🟡
// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// ●	Una propiedad titular con el valor "Alex".
// ●	Una propiedad saldo, teniendo como valor inicial 0.
// ●	Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// ●	Un método extraer() que permita retirar la cantidad pasada como parámetro.
// ●	Un método informar() que retorne la información del estado de la cuenta. 
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

class Cuenta {
    constructor(titular, saldo) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    ingresar(valorIngreso) {
      this.saldo += valorIngreso;
    }
  
    extraer(valorExtracion) {
      if (this.saldo > 0) {
        this.saldo -= valorExtracion;
      } else {
          console.log("No posee esa cantida de dinero");
      }
    }
  
    informar() {
      console.log(`Tu saldo disponible es de : ${this.saldo}`);
    }
  }
  
  let cuenta1 = new Cuenta('Alex',0);

  cuenta1.extraer(100);
  console.log(cuenta1);
  cuenta1.informar();

  cuenta1.ingresar (400);
  console.log(cuenta1);
  cuenta1.informar();

  cuenta1.extraer(100);
  cuenta1.informar();
  console.log(cuenta1);