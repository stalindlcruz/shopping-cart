import { Producto } from "./Producto";
import { Usuario } from "./Usuario";

export class CarritoDeCompras {
  private productos: Producto[] = [];
  private usuario: Usuario;

  constructor(usuario: Usuario) {
    this.usuario = usuario;
  }

  // Método para agregar un producto al carrito
  public agregarProducto(producto: Producto): void {
    this.productos.push(producto);
    console.log(`Producto agregado al carrito: ${producto.getNombre()}`);
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

  // Método para pagar el carrito
  public pagar(): void {
    if (this.productos.length === 0) {
      console.log("No puedes pagar porque el carrito está vacío.");
      return;
    }

    const total = this.calcularTotal();
    console.log(`Total a pagar: $${total}`);

    // Agregar productos al historial de compras del usuario
    this.productos.forEach((producto) => this.usuario.agregarCompra(producto));

    // Vaciar el carrito después del pago
    this.productos = [];
    console.log("Compra realizada con éxito. ¡Gracias por tu compra!");
  }
}
