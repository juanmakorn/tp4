// Dificultad:  🟢
// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y 
//si está encendido o apagado. 
//Crea los métodos necesarios para permitir encender y apagar el auto.

class Auto{
    constructor(nombre, marca, modelo, color, asientos, estadoAuto){
        this.nombre = nombre;
        this.marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._asientos =asientos;
        this._estadoAuto = estadoAuto;
        this.añoFabricacion= 2011 //propiedad por defecto  document.write('<p>Salio de la pokebola, y aperecio un '+this.nombre +' </p>')

    }
    autoArranca(){
        console.log(`Auto Encendido`);
    }

    apagarAuto(){
        console.log(`Auto se apago`);
    }

    // get color(){
    //     return this._color;
    //     }
    // set color(nuevoColor){
    //     if(nuevoColor.length > 0 ){
    //     this._color=nuevoColor;
    //   }


    get color(){
        return this._color;
        }
    set color(nuevoColor){
        if(nuevoColor.length > 0 ){
        this._color=nuevoColor;
      }
    }

    get modelo(){
        return this._modelo;
        }
    set modelo(nuevoModelo){
        if(nuevoModelo.length > 0 ){
        this._modelo=nuevoModelo;
      }
    }
    get asientos(){
        return this._asientos;
    }
    set asientos(nuevoAsientos){
        if(nuevoAsientos.length > 0 ){
        this._asientos=nuevoAsientos;
      }
    }

    get estadoAuto(){
        return this._estadoAuto;
    }
    set estadoAuto(nuevoEstadoAuto){
        if(nuevoEstadoAuto.length > 0 ){
        this._estadoAuto=nuevoEstadoAuto;
      }
    }

}


  


let auto1 = new Auto('FIT','Honda','Caja Manual con Inyecion Elestronica', 'Blanco', '3', 'USADO')
document.write('<p>Año de Fabricacion '+auto1.añoFabricacion +' </p>')
document.write('<br>Nombre :'+auto1.nombre +' </br>');
document.write('<p>Marca: '+auto1.marca +'</p>')
document.write('<li>Modelo: '+auto1.modelo +'</li>')
document.write('<li>Color: '+auto1.color +'</li>')
document.write('<li>Asientos: '+auto1.asientos +'</li>')
document.write('<li>Estado del Auto: '+auto1.estadoAuto +'</li>')
console.log(auto1)
auto1.autoArranca()
auto1.apagarAuto()


