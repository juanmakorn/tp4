// [[3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, 
//mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área-
class Rectangulo {

    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    modificar(nuevoAlto,nuevoAncho) {
      this.alto = nuevoAlto;
      this.ancho = nuevoAncho;
    }
  
    calcularArea() {
      console.log(`El area es de ${this.alto * this.ancho} `);
    }
    
    calcularPerimetro() {
      console.log(`El perimetro es de ${2 * (this.alto + this.ancho)} `);
    }
  
    mostrarPropiedades() {
      console.log(`El alto mide: ${this.alto}`);
      console.log(`El ancho mide: ${this.ancho}`);
    }
  }
  
  let rectanguloNew = new Rectangulo(4,6);
  rectanguloNew.calcularArea();
  rectanguloNew.calcularPerimetro();
  rectanguloNew.modificar(2,8);
  rectanguloNew.calcularArea();
  rectanguloNew.calcularPerimetro();
  