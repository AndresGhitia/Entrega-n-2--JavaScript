alert("BIENVENIDOS A LA TIENDA VIRTUAL DE GUMO EFECTOS")

const modelos = [

  { nombre: "ANDROMEDA", 
    precio: 41000,
    tipo: "Reverb Digital"
  },
  { nombre: "NAUTILUS", 
    precio: 36000,
    tipo: "Chorus",
  },
  { nombre: "APOCALIPSIS",
    precio: 35000,
    tipo: "Overdrive",
  }
];
let carrito = [];
let continuar = 'SI';
while (continuar.toUpperCase()==='SI'){
  
  const modeloIngresado = prompt("Ingresa el nombre del pedal que desea comprar Andromeda / Nautilus / Apocalipsis:").toUpperCase();
  
  const modeloEncontrado = modelos.find(modelo => modelo.nombre === modeloIngresado);
  
  if (modeloEncontrado) {
    alert(`El precio de ${modeloEncontrado.nombre} es $${modeloEncontrado.precio} y es un pedal de ${modeloEncontrado.tipo}.`);

    const abonarEnCuotas = prompt("¿Desea abonar en 12 cuotas? (SI/NO)").toUpperCase();

    if (abonarEnCuotas === "SI") {
      alert("PRECIO EN CUOTAS " + modeloEncontrado.nombre + " = $" + [Math.floor(modeloEncontrado.precio/12 )]+ " por mes.");
      alert("PRECIO FINAL " + modeloEncontrado.nombre + " = $" + [Math.floor(modeloEncontrado.precio/12 + modeloEncontrado.precio)] + ".");
      carrito.push(modeloEncontrado.precio/12 + modeloEncontrado.precio);

    } else if(abonarEnCuotas === "NO") {
      alert("PRECIO FINAL " + modeloEncontrado.nombre + " = $" + modeloEncontrado.precio + ".");
      carrito.push(modeloEncontrado.precio);
    }
    } else {
    alert(`No se encontró ningún pedal con el nombre ${modeloIngresado}.`);
  }
  
  continuar = prompt('¿Deseas realizar otra compra? Escriba "SI" para continuar o "NO" para salir');
}

let total = 0;

for (let i = 0; i < carrito.length; i++) {
  total += carrito[i];
}

alert(`El total de su compra es de $${total.toFixed(0)}`);
alert("Gracias por su compra")