class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    console.log(
      "Código: " +
        this.codigo +
        ", Nombre: " +
        this.nombre +
        ", Precio: $" +
        this.precio
    );
  }
}

let producto1 = new Producto("01", "azucar", 800);
let producto2 = new Producto("02", "Arroz", 400);
let producto3 = new Producto("03", "Aceite", 900);

let arrayProductos = [producto1, producto2, producto3];

for (let i = 0; i < arrayProductos.length; i++) {
  arrayProductos[i].imprimeDatos();
}
