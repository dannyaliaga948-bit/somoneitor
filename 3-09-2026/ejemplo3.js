//en una tienda de computadoras los clientes pueden averiguar el precio de producto
//el dueño de la tienda quiere un programa tava script que le permita mostrar el total de los productos
//que desea comprar y el precio total a pagar el programa debe tener una lista de productos 
//con sus precios permite al usuario ingresar el nombre del producto y la cantidad
//que dea comprar calcular el precio a pagar y mostrar si el producto no existe
function calcularPrecio(producto, cantidad) {
    letprecio = 0;
    switch (producto) {
        case "laptop":
            precio = 1000;
            break;
        case "mouse":
            precio = 25;
            break;
        case "teclado":
            precio = 75;
            break;
        default:
            console.log("Producto no encontrado");
            return null;
    }
    return precio * cantidad;
}
