const productElement = document.getElementById('product');
const cantidadElement = document.getElementById('number');
let carrito = [];
function add() {
  const productoPrecio = parseInt(productElement.value); // Al estar en html el "product" es como si fuera un string, con esto pasa a ser un numero entero
  const productoNombre = productElement.options[productElement.selectedIndex].text.split(' ¥')[0];
  const cantidad = parseInt(cantidadElement.value);

  if (productoPrecio && cantidad > 0) {
    const product = { 
      producto: productoNombre,
      precio: productoPrecio,
      cantidad: cantidad,
      subtotal: productoPrecio * cantidad
    };
    carrito.push(product);
    alert(`Producto: ${product.producto}\nImporte: ¥${product.precio}\nCantidad: ${product.cantidad}`);
  }
}

function calc() {
  let total = 0;
  let detalleProducto = '';
  carrito.forEach(item => { //Calcula el total de los productos
    total += item.subtotal;
    detalleProducto += `Producto: ${item.producto}\nImporte: ¥${item.precio}\nCantidad: ${item.cantidad}\nSubtotal: ¥${item.subtotal}\n\n`;
  });
  
  let compras = 0;
  if (total <= 2000) {
    compras = 500;
  } else if (total < 3000) {
    compras = 250;
  } else {
    compras = 0;
  }

  const totalCompras = total + compras;
  alert(
    `${detalleProducto}Los gastos de envío son de: ¥${compras}\nEl importe total es de: ¥${totalCompras}`
  );
}