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
};

perro = new animal("perro", 5, "marron");
gato = new animal("gato", 3, "blanco");

perro.verInfo();
gato.verInfo();


