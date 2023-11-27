let cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (cantidad) {
    this.saldo += cantidad;
  },
  extraer: function (cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
    } else {
      alert("Su saldo es insuficiente para realizar esta operación");
    }
  },
  informar: function () {
    return `Titular: ${this.titular}, Saldo: ${this.saldo}`;
  },
};

console.log(cuenta.informar());
let opcion = prompt("¿Quieres ingresar o extraer dinero? ingresar - extraer ");
if (opcion === "ingresar") {
  let cantidad = prompt("¿Cuánto dinero desea ingresar?");
  cuenta.ingresar(parseInt(cantidad));
  alert("Ingreso realizado con exito !!");
} else if (opcion === "extraer") {
  let cantidad = prompt("¿Cuánto dinero desea extraer?");
  cuenta.extraer(parseInt(cantidad));
} else {
  alert("Opción no válida");
}

console.log(cuenta.informar());
