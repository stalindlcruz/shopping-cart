import { Producto } from "../models/Producto";

export class ProductManagement {
  private productos: Producto[] = [];

  // Método para agregar un producto al inventario
  public agregarProducto(producto: Producto): void {
    const existe = this.productos.some((p) => p.getId() === producto.getId());
    if (existe) {
      throw new Error(`El producto con ID: ${producto.getId()} ya existe.`);
    }
    this.productos.push(producto);
    console.log(`Producto agregado: ${producto.getNombre()}`);
  }

  // Método para listar todos los productos
  public listarProductos(): void {
    if (this.productos.length === 0) {
      console.log("No hay productos disponibles.");
      return;
    }
    console.log("Inventario de productos:");
    this.productos.forEach((producto) => producto.mostrarInformacion());
  }

  // Método para buscar un producto por su ID
  public buscarProductoPorId(id: number): Producto | undefined {
    return this.productos.find((producto) => producto.getId() === id);
  }

  // Método para eliminar un producto por ID
  public eliminarProductoPorId(id: number): boolean {
    const initialLength = this.productos.length;
    this.productos = this.productos.filter(
      (producto) => producto.getId() !== id
    );

    const eliminado = initialLength !== this.productos.length;
    if (eliminado) {
      console.log(`Producto con ID ${id} eliminado.`);
    } else {
      console.log(`No se encontró el producto con ID ${id}.`);
    }
    return eliminado;
  }

  // Método para actualizar un producto
  public actualizarProducto(productoActualizado: Producto): void {
    const index = this.productos.findIndex(
      (p) => p.getId() === productoActualizado.getId()
    );

    if (index === -1) {
      throw new Error(
        `No se encontró el producto con ID ${productoActualizado.getId()} para actualizar.`
      );
    }

    this.productos[index] = productoActualizado;
    console.log(
      `Producto actualizado con éxito: ${productoActualizado.getNombre()}`
    );
  }
}
