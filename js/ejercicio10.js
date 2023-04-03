// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener 
//el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá 
//el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros.
// Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad 
//disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.
// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones a diferentes 
//destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

class Aeropuerto {
    #nombreAeropuerto;
    #listaAviones;
    constructor(nombreAeropuerto, listaAviones) {
      this.#nombreAeropuerto = nombreAeropuerto;
      this.#listaAviones = listaAviones;
    }
    get _Aeropuerto() {
      return this.#nombreAeropuerto;
    }
    set _Aeropuerto(nuevoNombreAeropuerto) {
      this.#nombreAeropuerto = nuevoNombreAeropuerto;
    }
    get _listaAviones() {
      return this.#listaAviones;
    }
    set _listaAviones(nuevaListaAviones) {
      this.#listaAviones = nuevaListaAviones;
    }
    agregarAvion(avion) {
      this.#listaAviones.push(avion);
    }
    buscarAvion(nombreAvion) {
      const objeto = this.#listaAviones.find((elemento) => {
        if (elemento.nombre === nombreAvion) {
          return true;
        }
        return false;
      });

      if (objeto) {
        document.write(`Informacion<br> Nombre : ${objeto.nombre}<br>`);
        document.write(`Capacidad : ${objeto.capacida}<br>`);
        document.write(`Destino: ${objeto.destino}<br>`);
        document.write(`Lista de pasajeros: ${objeto.listaPasajeros}<br>`);
      } else {
        document.write(`No se encotro el nombre del avion<br>`);
      }
    }
  }
  class Avion {
    #nombre;
    #capacidad;
    #destino;
    #listaPasajeros;
    constructor(nombre, capacida, destino, listaPasajeros) {
      this.#nombre = nombre;
      this.#capacidad = capacida;
      this.#destino = destino;
      this.#listaPasajeros = listaPasajeros;
    }
    get _nombre() {
      return this.#nombre;
    }
    set _nombre(nuevoNombre) {
      this.#nombre = nuevoNombre;
    }
    get _capacida() {
      return this.#capacidad;
    }
    set _capacida(nuevaCapacidad) {
      this.#capacidad = nuevaCapacidad;
    }
    get _destino() {
      return this.#destino;
    }
    set _destino(nuevoDestino) {
      this.#destino = nuevoDestino;
    }
    get _listaPasajeros() {
      return this.#listaPasajeros;
    }
    set _listaPasajeros(nuevaListaPasajeros) {
      this.#listaPasajeros = nuevaListaPasajeros;
    }
    abordar(pasajero = "pasajero") {
      if (this.#capacidad === 0) {
        document.write(`Capacidad llena`);
      } else {
        this.#capacidad --;
        this.#listaPasajeros.push(pasajero);
      }
    }
  }
  let aeropueto1 = new Aeropuerto("Aeropuerto Internacional NEWVERY", new Array());
  let avion1 = new Avion(`HVM`, 218, "Francia", new Array());
  let avion2 = new Avion("PAM AM", 132, "Qatar", new Array());
  let avion3 = new Avion("AUSTRAL", 324, "Argentina", new Array());
  aeropueto1.agregarAvion(avion1);
  aeropueto1.agregarAvion(avion2);
  aeropueto1.agregarAvion(avion3);