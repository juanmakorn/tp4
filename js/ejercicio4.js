// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y
// precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
class Producto{

    constructor(codigo,nombre,precio){
      this.codigo=codigo;
      this.nombre=nombre;
      this.precio=precio;
    }
  
    imprimeDatos(){
      document.write(`<li> Codigo: ${this.codigo}, </li><br>`);
      document.write(`<li> Nombre: ${this.nombre}, </li><br>`);
      document.write(`<li> Precio: ${this.precio}$ </li><br>`);
    }
  }
  let productos = [];
  let harina = new Producto(1,'Harina',210);
  let avena = new Producto(2,'Avena',200);
  let Leche = new Producto(3,'Leche',190);
  productos.push(harina);
  productos.push(avena);
  productos.push(Leche);
  console.log(productos)
  harina.imprimeDatos();
  avena.imprimeDatos();
  Leche.imprimeDatos();