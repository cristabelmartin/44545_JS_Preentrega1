// Entregable
// Objetivo: Calcular el descuento de los productos seleccionados
// Cantidad Gastada: $199, se le aplica el descuento del 30%
// Cantidad Gastada: $399, se le aplica el descuento del 40%

// Catálogo de Productos
const producto1 = "Iphone 13"
const producto2 = "Motorola Moto G82"
const producto3 = "Xiaomi Poco X3"
const producto4 = "Samsung Galaxy S21 FE"
// Precio de productos de acuerdo al catálogo
const precioProducto1 = 100
const precioProducto2 = 100
const precioProducto3 = 100
const precioProducto4 = 100
// Cantidades tope para aplicar el descuento
const cantidad30Descuento = 199
const cantidad40Descuento = 399
// Porcentajes de descuento disponibles
const porcentaje30 = 30
const porcentaje40 = 40

let opcion = 0
let piezasPorProducto = 0
let mensaje

let montoTotalSinDescuento = 0
let piezasTotales = 0

do {
  opcion = Number(prompt("Bienvenido a 'Amazon'\n\nContamos con las siguientes promociones: \n* En compras mayores a $" + cantidad30Descuento + " obtendrás el 30% de descuento \n* En compras mayores a $" + cantidad40Descuento + " obtendrás el 40% de descuento\n\n¿Qué deseas hacer? \n1.- Ver catálogo de productos \n2.- Salir"))
  // 1.- Ver catálogo de productos
  // 2.- Salir
  if (opcion === 1) {
    let productoSeleccionado = Number(prompt("Continúas en 'Amazon' \n¿Qué producto quieres agregar a tu carrito? \n" 
    + " \n 1.- " + producto1 + " ----> $" + precioProducto1 
    + " \n 2.- " + producto2 + " ----> $" + precioProducto2 
    + " \n 3.- " + producto3 + " ----> $" + precioProducto3
    + " \n 4.- " + producto4 + " ----> $" + precioProducto4
    + " \n 5.- Salir."))
8
    if (productoSeleccionado > 0 && productoSeleccionado < 5){
      piezasPorProducto = Number(prompt("Ingresa la cantidad de piezas:"))
    }
      switch(productoSeleccionado){
        case 1:
        calculaMontoPorProducto(producto1, precioProducto1, piezasPorProducto)
        alert(mensaje)
        break
        case 2:
        calculaMontoPorProducto(producto2, precioProducto2, piezasPorProducto)
        alert(mensaje)
        break
        case 3:
        calculaMontoPorProducto(producto3, precioProducto3, piezasPorProducto)
        alert(mensaje)
        break
        case 4:
        calculaMontoPorProducto(producto4, precioProducto4, piezasPorProducto)
        alert(mensaje)
        break
        case 5:
          if (montoTotalSinDescuento > 0){
            alert("¡Gracias por comprar con nosotros! \nDetalle de la compra: \n" + mensaje + "\n¡Vuelve Pronto!")
          } else {
            alert("No se seleccionó ningún producto.")
          }
        break
        default:
          alert("No se seleccionó ningún producto.")
      }
  } else {
    if (montoTotalSinDescuento > 0){
      alert("¡Gracias por comprar con nosotros! \nDetalle de la compra: \n" + mensaje + "\n¡Vuelve Pronto!")
    }
    if (opcion === 2){
      alert("¡Gracias por visitarnos!")
    }else {
      alert("¡Opción inválida!")
      opcion = 1
    }
  }
} while (opcion === 1)

function calculaMontoPorProducto(producto, precioProducto, piezas){
  let porcentajeDescuento = 0
  let descuentoPorEstaCompra = 0

// Acumula las piezas totales
piezasTotales = piezasTotales + piezas

// Total acumulado de todas las compras sin descuento
montoTotalSinDescuento = montoTotalSinDescuento + (precioProducto * piezas)
  
  // Calcula el descuento por producto por esta compra para acumularlo
  if (montoTotalSinDescuento > cantidad30Descuento && montoTotalSinDescuento < cantidad40Descuento) { // Descuento del 30%
    descuentoPorEstaCompra = (montoTotalSinDescuento * porcentaje30) / 100
    porcentajeDescuento = porcentaje30
  } else if (montoTotalSinDescuento > cantidad40Descuento) { // Descuento del 40%
    descuentoPorEstaCompra = (montoTotalSinDescuento * porcentaje40) / 100
    porcentajeDescuento = porcentaje40
  }
  // Mensaje de retorno
  mensaje = "Producto seleccionado: " + producto 
  + "\nPiezas por producto: " + piezas 
  + "\nPrecio unitario del producto: $" + precioProducto
  + "\nTotal: $" + (precioProducto * piezas) 
  + "\n\n Totales Globales: \n "
  + "\n Piezas totales: " + piezasTotales
  + "\n Total sin descuento: $" + montoTotalSinDescuento
  + "\n Descuento a aplicar: " + porcentajeDescuento + "%"
  + "\n Total descontado: $" + descuentoPorEstaCompra
  + "\n Total a pagar por esta compra: $" + (montoTotalSinDescuento - descuentoPorEstaCompra)
}