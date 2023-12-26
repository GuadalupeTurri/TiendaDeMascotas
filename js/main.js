//Segunda pre entrega JAVASCRIPT
//PRODUCTOS DE MASCOTAS
//BUSCA PRODUCTOS, AGREGAS AL CARRITO Y SUMAS EL TOTAL DE LA COMPRA!!


const productos = [
  {nombre:"cama rosa", precio: 20000},
  {nombre:"collar brillo", precio: 5500},
  {nombre:"collar cuero", precio: 10000},
  {nombre:"dulce sueno", precio: 30000},
  {nombre:"cama pluma", precio: 28000},
  {nombre:"collar vip", precio: 12000},
];

let carrito = [];

function mostrarProductos() {
  let mensaje = "Productos disponibles:\n";
  for (let i = 0; i < productos.length; i++) {
    mensaje += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n ` 
  }
  alert(mensaje);
};

function buscarYAgregar(nombreProducto){
  const productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());

  if (productoEncontrado) {
    carrito.push(productoEncontrado);
    alert(`${productoEncontrado.nombre} ha sido agregado al carrito`);
  } else {
    alert(`Producto no encontrado`);
  };
};

function mostrarCarrito() {
  alert(`Productos en el carrito:\n + carrito.map(producto => ${producto.nombre} - $${producto.precio}).join(\n)`);
};



function calcularTotal(){
  return carrito.reduce((total, producto)=> total + producto.precio, 0);
};

let continuarComprando = true ;

while(continuarComprando) {
  mostrarProductos();

  const buscarProducto = prompt(`Esta buscando un producto para tu mascota?`);
  if (buscarProducto === 'si'){
    const nombreProducto = prompt('ingrese nombre del producto');
    buscarYAgregar(nombreProducto);
  } else {
    alert(`Opcion no valida`);
  };

  const respuesta = prompt (`Quiere seguir comprando? (si/no)`);
  continuarComprando = respuesta === "si"

 };



const totalCarrito = calcularTotal();
alert(`Gracias por su compra! \n El total es $${totalCarrito}`);
console.log(totalCarrito);



  


