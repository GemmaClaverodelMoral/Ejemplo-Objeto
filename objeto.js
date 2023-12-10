class animal {
    constructor (especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie} de ${this.edad} años y de color ${this.color}`
    }
    verInfo() {
        document.write(this.info + <br>);
    }
    ladrar() {
        if (this.especie = "perro") {
            documento.write("Wau!" <br>);
        } else {
            document.write("No puedo ladrar" <br>)
        };
};

perro = new animal("perro", 5, "marron");
gato = new animal("gato", 3, "blanco");
pajaro = new animal("pajaro", 1, "verde");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();
perro.ladrar();
gato.ladrar();
pajaro.ladrar();


