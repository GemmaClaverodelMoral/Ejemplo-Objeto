class Animal {
    constructor (especie, edad, color) {
        this.especie = especie;` `
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie} de ${this.edad} años y de color ${this.color}`
    }
    verInfo() {
        document.write(`${this.info} <br>`);
    }
    // ladrar() {
    //     if (this.especie == "perro") {
    //         document.write("Wau! <br>");
    //     } else {
    //         document.write("No puedo ladrar. Soy un "+ this.especie + "<br>")
    //     };
    // }
}

// HERENCIA

class Perro extends Animal {
    constructor(especie, edad, color,raza){
        super(especie, edad, color);
        this.raza = null;
    }
    static ladrar(){ //Static. Ouede funcionar llamando la desde la clase porque no usa parametros
        //alert("Waw")
        document.write(`Waw <br>`)
    }

    //setter y getter para acceder a datos encapsulados o a propiedades privadas
    set setRaza(newName){
        this.raza =newName;
    }

    get getRaza(){
        return this.raza;
    }
}
const perro = new Perro("perro", 5, "marron","Doguerman");
const gato = new Animal("gato",  3, "blanco");
const pajaro = new Animal("pajaro", 1, "verde");


gato.verInfo();
pajaro.verInfo();
Perro.ladrar();

perro.modifiacarRaza = "Pedro";

perro.setRaza = "Pedro";
document.write(`${perro.getRaza} <br>`);

// PROBLEMA 3 de COFLA - OBJETOS

class Celular {
    constructor(nombre, color, peso, tamaño, rdc, ram) {
        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    };

    onOff(){
        if (this.encendido) {
            document.write(`Apagaste el celular ${this.nombre} <br>`);
            this.encendido = false;
        } else {
            document.write(`Encendiste el celular ${this.nombre} <br>`);
            this.encendido = true;
        };
    };

    reiniciar() {
        if (this.encendido) {
            document.write(`Reiniciaste el celular <br>`);
        } else {
            document.write(`Antes de reiniciar el celular debes encenderlo <br>`);
        };
    };

    tomarFoto() {
        if (this.encendido) {
            document.write(`Tomaste una foto con tu celular con resolución: ${this.rdc} <br>`);
        } else {
            document.write(`Antes de tomar fotos con el celular debes encenderlo <br>`);
        };
    };

    tomarVideo() {
        if (this.encendido) {
            document.write(`Grabando video con tu celular con resolución: ${this.rdc} <br>`);
        } else {
            document.write(`Antes de tomar video con el celular debes encenderlo <br>`);
        };
    };

    info() {
        return `
        Color: <b>${this.color}</b><br>
        Peso:  <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolución de Camara: <b>${this.rdc}</b><br>
        RAM: <b>${this.ram}</b><br>
        `;
    }
};

const celular1 = new         Celular("negro","100g", "5'"  ,     "HD", "2GB");
const celular2 = new         Celular("gris" ,"150g", "5.4'","Full HD", "1GB");
const celular3 = new         Celular("azul" ,"170g", "5.1'","Full HD", "2GB");

celular1.onOff();
celular2.onOff();
celular3.reiniciar();
celular3.tomarVideo();
celular3.onOff();
celular3.tomarVideo();
celular1.reiniciar();
celular1.tomarFoto();

document.write(`${celular1.info()} <br>`);
document.write(`${celular2.info()} <br>`);
document.write(`${celular3.info()} <br>`);

document.write("<br>");

//Celulares de alta gama:
// Gravar en camara superlenta
// Reconocimiento facial
// Camara extra

class CelularAltaGama extends Celular {
    constructor(color, peso, tamaño, rdc, ram, rExtraCam){
        super(color, peso, tamaño, rdc, ram);
        this.rExtraCam = rExtraCam;
    };

    camaraLenta(){
        if (this.encendido) {
            document.write(`Grabando en camara lenta con tu celular de alta gama <br>`);
        } else {
            document.write(`Antes de tomar video en camara lenta con el celular de alta gama, debes encenderlo <br>`);
        };
    };

    reconocimientoFacial() {
        if (this.encendido) {
            document.write(`Hiciste reconocimiento facial con tu celular <br>`);
        } else {
            document.write(`Antes de hacer reconocimiento facial con el celular, debes encenderlo <br>`);
        };
    };

    infoAltaGama(){
        return `${this.info()} Resolucion camara frontal: ${this.rExtraCam} <br>`
    }
};

const celular4 = new CelularAltaGama("negro","150g", "5.3'",   "4K", "3GB", "HD");
const celular5 = new CelularAltaGama("azul" ,"200g", "6'"  ,   "48mp", "3GB", "Full HD");

celular4.onOff();
celular4.camaraLenta();

document.write(`${celular4.infoAltaGama()} <br>`);
document.write(`${celular5.infoAltaGama()} <br>`);

class App {
    constructor (qDescargas, puntuacion, peso){
        this.qDescargas = qDescargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    };

    instalar(){
        if (this.instalada) {
            document.write(`la aplicacion ya se encuentra instalada <br>`)
        } else {
            document.write(`App instalada correctamente <br>`);
            this.instalada = true;
        }
    };

    abrir(){
        if (this.iniciada) {
            document.write(`la aplicacion ya se encuentra abierta <br>`)
        } else if (this.instalada){
            document.write(`App abierta correctamente <br>`);
            this.iniciada = true;
        }
    };

    cerrar(){
        if (this.instalada) {
            if (this.iniciada == false) {
                document.write(`la aplicacion ya se encuentra cerrada <br>`)
            } else {
                document.write(`App cerrada correctamente <br>`);
                this.iniciada = false;
            }
        } else {
            document.write(`No puedes cerrar una aplicacion que ni siquiera esta instalada <br>`);
        }
    };

    desinstalar(){
        if (this.instalada == false) {
            document.write(`la aplicacion no se encuentra instalada <br>`)
        } else {
            document.write(`App desinstalada correctamente <br>`)
            this.instalada = false
        }
    };
info(){
    return `
       Descargas efectuadas : <b>${this.qDescargas}</b><br>
       Punctuación: <b>${this.puntuacion}</b><br>
       Peso: <b>${this.peso}</b><br>
       `
    };
};

const app = new App("16.000","5 estrellas","900mb");

app.cerrar();
app.instalar();
app.abrir();
app.instalar();
app.cerrar();
app.desinstalar();
document.write(`<br> ${app.info()} <br>`);


