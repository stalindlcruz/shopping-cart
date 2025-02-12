import { Producto } from "./models/Producto";
import { ProductManagement } from "./services/ProductManagement";

// Creamos una instancia de ProductManagement
const inventario = new ProductManagement();

// Creamos algunas instancias de Producto
const producto1 = new Producto(1, "Laptop", "Laptop de ultima generacion", 1200, 10);
const producto2 = new Producto(2, "Mouse Gamer", "Mouse Gamer RGB", 120, 50);
const producto3 = new Producto(3, "Teclado", "Teclado Gamer Keychron", 190, 30);

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
console.log('Buscando producto por ID');
const encontrado = inventario.buscarProductoPorId(2);
if (encontrado) {
    console.log(`Producto encontrado ${encontrado.getNombre()}`);
} else {
    console.log('Prodcuto no encontrado');
}

// Actualizar un Producto
const newProduct2 = new Producto(2, "Mouse Gamer pro", "Mouse Gamer RGB", 350, 10);
inventario.actualizarProducto(newProduct2);

// Listar productos después de la actualización
console.log("\n Inventario después de la actualización:");
inventario.listarProductos();


// Eliminar Producto por su ID
console.log('Producto eliminado');
inventario.eliminarProductoPorId(2);
inventario.listarProductos();