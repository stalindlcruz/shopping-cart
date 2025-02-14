import { Producto } from "./Producto";
import { Usuario } from "./Usuario";
import { Factura } from "./Factura";

export class CarritoDeCompras {
  private productos: Producto[] = [];

  constructor(private usuario: Usuario) {}

  // Método para agregar un producto al carrito
  public agregarProducto(producto: Producto): void {
    this.productos.push(producto);
    console.log(`Producto agregado al carrito: ${producto.getNombre()}`);
  }

  // Método para eliminar un producto del carrito por ID
  public eliminarProducto(id: number): void {
    const initialLength = this.productos.length;
    this.productos = this.productos.filter(
      (producto) => producto.getId() !== id
    );

    if (this.productos.length < initialLength) {
      console.log(`Producto con ID ${id} eliminado del carrito.`);
    } else {
      console.log(`No se encontró el producto con ID ${id} en el carrito.`);
    }
  }

  // Método para listar los productos en el carrito
  public listarProductos(): void {
    if (this.productos.length === 0) {
      console.log("El carrito está vacío.");
      return;
    }
    console.log("\n Productos en el carrito:");
    this.productos.forEach((producto) => producto.mostrarInformacion());
  }

  // Método para calcular el total del carrito
  public calcularTotal(): number {
    return this.productos.reduce(
      (total, producto) => total + producto.getPrecio(),
      0
    );
  }

  // Método para pagar y generar una factura
  public pagar(): void {
    if (this.productos.length === 0) {
      console.log("No puedes pagar porque el carrito está vacío.");
      return;
    }

    const total = this.calcularTotal();
    console.log(`Total a pagar: $${total}`);

    // Generar factura
    const factura = new Factura(this.usuario, [...this.productos], total);

    // Imprimir la factura en consola
    console.log(factura.generarFactura());

    // Guardar la factura en el historial del usuario
    this.usuario.agregarFactura(factura);

    // Agregar productos al historial de compras del usuario
    this.productos.forEach((producto) => this.usuario.agregarCompra(producto));

    // Vaciar el carrito después del pago
    this.productos = [];
    console.log("Compra realizada con éxito. ¡Gracias por tu compra!");
  }

  // Método para vaciar el carrito sin pagar
  public vaciarCarrito(): void {
    if (this.productos.length === 0) {
      console.log("El carrito ya está vacío.");
      return;
    }
    this.productos = [];
    console.log("Carrito vaciado con éxito.");
  }
}
