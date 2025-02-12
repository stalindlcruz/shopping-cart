export class Producto {
  // Contador estático para generar IDs únicos
  private static contadorId: number = 1;
  private readonly id: number;

  constructor(
    private nombre: string,
    private descripcion: string,
    private precio: number,
    private stock: number
  ) {
    this.id = Producto.contadorId++;
  }

  // Getters
  getId(): number {
    return this.id;
  }

  getNombre(): string {
    return this.nombre;
  }

  getDescripcion(): string {
    return this.descripcion;
  }

  getPrecio(): number {
    return this.precio;
  }

  getStock(): number {
    return this.stock;
  }

  // Setters
  setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }

  setDescripcion(nuevaDescripcion: string): void {
    this.descripcion = nuevaDescripcion;
  }

  setPrecio(nuevoPrecio: number): void {
    if (nuevoPrecio >= 0) {
      this.precio = nuevoPrecio;
    } else {
      console.log("El precio no puede ser negativo.");
    }
  }

  setStock(nuevoStock: number): void {
    if (nuevoStock >= 0) {
      this.stock = nuevoStock;
    } else {
      console.log("El stock no puede ser negativo.");
    }
  }

  // Método para mostrar información del producto
  mostrarInformacion(): void {
    console.log(
      `ID: ${this.id} | Nombre: ${this.nombre} | Descripción: ${this.descripcion} | Precio: $${this.precio} | Stock: ${this.stock}`
    );
  }
}
