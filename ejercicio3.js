class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificarAlto(nuevoAlto) {
    this.alto = nuevoAlto;
  }

  modificarAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }

  mostrarPropiedades() {
    console.log("Alto: " + this.alto + ", Ancho: " + this.ancho);
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

let rectanguloNuevo = new Rectangulo(8, 16);
rectanguloNuevo.mostrarPropiedades();
console.log("Perímetro: " + rectanguloNuevo.calcularPerimetro());
console.log("Área: " + rectanguloNuevo.calcularArea());
rectanguloNuevo.modificarAlto(9);
rectanguloNuevo.modificarAncho(25);
rectanguloNuevo.mostrarPropiedades();
console.log("Perímetro: " + rectanguloNuevo.calcularPerimetro());
console.log("Área: " + rectanguloNuevo.calcularArea());
