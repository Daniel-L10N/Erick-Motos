// Número de WhatsApp del dueño (con código de país)
const NUMERO_WHATSAPP = '+5354214460'; // Tu número

// Función para obtener los productos seleccionados
function obtenerProductosSeleccionados() {
    const productosSeleccionados = [];
    
    // Obtener todos los checkboxes de productos
    const checkboxProductos = document.querySelectorAll('.checkbox-producto:checked');
    
    checkboxProductos.forEach(checkbox => {
        const contenedorProducto = checkbox.closest('.producto-compra');
        
        // Obtener colores seleccionados para esta moto
        const checkboxColores = contenedorProducto.querySelectorAll('.color-checkbox:checked');
        
        if (checkboxColores.length === 0) {
            // Si no hay color seleccionado, no agregar nada
            return;
        }
        
        // Agregar cada color seleccionado
        checkboxColores.forEach(colorCheckbox => {
            productosSeleccionados.push(colorCheckbox.value);
        });
    });
    
    return productosSeleccionados;
}

// Función para validar que haya productos seleccionados
function validarSeleccion() {
    const productos = obtenerProductosSeleccionados();
    
    if (productos.length === 0) {
        alert('❌ Por favor, selecciona al menos un producto y su color.');
        return false;
    }
    
    return true;
}

// Función para crear el mensaje de WhatsApp
function crearMensaje() {
    const productos = obtenerProductosSeleccionados();
    
    // Crear lista de productos
    let listaProductos = productos.join(': ');
    
    // Crear mensaje simple
    let mensaje = `Estoy interesado en: ${listaProductos}`;
    
    return mensaje;
}

// Función para enviar a WhatsApp
function enviarPedidoWhatsapp() {
    // Validar selección
    if (!validarSeleccion()) {
        return;
    }
    
    // Crear mensaje
    const mensaje = crearMensaje();
    
    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear URL de WhatsApp
    const urlWhatsapp = `https://wa.me/+5354214460?text={54214460}?text=54214460?text={mensajeCodificado}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(urlWhatsapp, '_blank');
}