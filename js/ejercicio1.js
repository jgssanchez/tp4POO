let auto = {
  color: "Rojo ferrari",
  marca: "Fiat",
  modelo: "Berlina 128",
  apodo: "El Sacapuntas",
  encendido: false,

  encender: function () {
    this.encendido = true;
    console.log("El auto ha sido encendido");
  },

  apagar: function () {
    this.encendido = false;
    console.log("El auto ha sido apagado");
  },
};

console.log("Color del auto: " + auto.color);
console.log("Marca del auto: " + auto.marca);
console.log("Modelo del auto: " + auto.modelo);
console.log("Apodo del auto: " + auto.apodo);

auto.encender();
console.log("¿El auto está encendido? " + auto.encendido);

auto.apagar();
console.log("¿El auto está encendido? " + auto.encendido);
