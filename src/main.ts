import { Producto } from "./models/Producto";
import { ProductManagement } from "./services/ProductManagement";
import { Usuario } from "./models/Usuario";
import { UserManagement } from "./services/UserManagement";
import { CarritoDeCompras } from "./models/CarritoDeCompra";
import { Factura } from "./models/Factura";

// Creamos una instancia de ProductManagement
const inventario = new ProductManagement();

// Crear instancia de UserManagement
const gestionUsuarios = new UserManagement();

// Creamos instancias de Usuario
const usuario1 = new Usuario(1, "Engels", "engels@mail.com", "empleado");
const usuario2 = new Usuario(2, "Stalin", "stalin@mail.com", "cliente");

// Creamos algunas instancias de Producto
const producto1 = new Producto(
  1,
  "Laptop",
  "Laptop de ultima generacion",
  1200,
  10
);
const producto2 = new Producto(2, "Mouse Gamer", "Mouse Gamer RGB", 120, 50);
const producto3 = new Producto(3, "Teclado", "Teclado Gamer Keychron", 190, 30);

// Creamos carrito para el usuario
const carrito = new CarritoDeCompras(usuario1);

// mostramos la informacion de los producto
producto1.mostrarInformacion();
producto2.mostrarInformacion();
producto3.mostrarInformacion();

// Agregamos algunos productos al inventario
inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);
inventario.agregarProducto(producto3);

// Listamos los productos por su ID
console.log("\n Listado de productos");
inventario.listarProductos();

// Producto por su ID
console.log("Buscando producto por ID");
const encontrado = inventario.buscarProductoPorId(2);
if (encontrado) {
  console.log(`Producto encontrado ${encontrado.getNombre()}`);
} else {
  console.log("Prodcuto no encontrado");
}

// Actualizar un Producto
const newProduct2 = new Producto(
  2,
  "Mouse Gamer pro",
  "Mouse Gamer RGB",
  350,
  10
);
inventario.actualizarProducto(newProduct2);

// Listar productos después de la actualización
console.log("\n Inventario después de la actualización:");
inventario.listarProductos();

// Eliminar Producto por su ID
console.log("Producto eliminado");
inventario.eliminarProductoPorId(2);
inventario.listarProductos();

// Agregar Usuarios al sistema
gestionUsuarios.agregarUsuario(usuario1);
gestionUsuarios.agregarUsuario(usuario2);

// Listar usuarios
gestionUsuarios.listarUsuarios();

// Buscar usuarios por su id
console.log("\n Buscando usuarios por su id:");
const usuarioEncontrado = gestionUsuarios.buscarUsuarioPorId(1);
const result = usuarioEncontrado
  ? `usuario encontrado: ${usuarioEncontrado.getNombre()}`
  : "Usuario no encontrado";
console.log(`\n ${result}`);

// Agregar compras al historial de un usuario
usuario1.agregarCompra(producto1);
usuario1.agregarCompra(producto2);
usuario1.agregarCompra(producto3);

// Mostrar el historial de compras
gestionUsuarios.mostrarHistorialUsuario(1);

// Agregar productos al carrito
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.agregarProducto(producto3);

// Listar productos en el carrito
carrito.listarProductos();

// Calcular total
const total = carrito.calcularTotal().toFixed(2);
console.log(`\n Total a pagar en el carrito: $${total} \n`);

// Pagar
carrito.pagar();

// Mostrar el historial de compras
usuario2.mostrarHistorialCompras();

// Creando una Factura
const facturaManual = new Factura(usuario1, [producto1, producto2], producto1.getPrecio() + producto2.getPrecio());

// Guardar la factura en el usuario
usuario1.agregarFactura(facturaManual);

// Mostrar Historial de facturas
console.log("\n HIstorial de facturas:");
usuario1.mostrarHistorialFacturas();
usuario2.mostrarHistorialFacturas();