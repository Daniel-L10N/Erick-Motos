function enviarPedidoWhatsApp() {
  if (carrito.length === 0) {
    alert("Por favor, selecciona una moto primero");
    return;
  }
  
  let marcas = formatearLista(carrito.map(p => p.marca));
  let colores = formatearLista(carrito.map(p => p.color));
  
  let mensaje = `Hola, estoy interesado en la moto marcasdecolor{marcas} de colormarcasdecolor{colores}.`;
  
  const numeroWhatsApp = "5354214460"; // Reemplaza con tu número
  const enlace = `https://wa.me/numeroWhatsApp?text={numeroWhatsApp}?text=numeroWhatsApp?text={encodeURIComponent(mensaje)}`;
  
  window.open(enlace, "_blank");
}

function formatearLista(array) {
  if (array.length === 1) {
    return array[0];
  } else if (array.length === 2) {
    return `array[0]y{array[0]} yarray[0]y{array[1]}`;
  } else {
    return array.slice(0, -1).join(", ") + ` y ${array[array.length - 1]}`;
  }
}
