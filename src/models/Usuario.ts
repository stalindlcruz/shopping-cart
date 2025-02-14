import { Producto } from "./Producto";
import { Factura } from "./Factura";

export class Usuario {
  private facturas: Factura[] = [];

  constructor(
    private id: number,
    private nombre: string,
    private email: string,
    private rol: "cliente" | "empleado",
    private historialCompras: Producto[] = []
  ) {}

  // Getters
  public getId(): number {
    return this.id;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getEmail(): string {
    return this.email;
  }

  public getRol(): "cliente" | "empleado" {
    return this.rol;
  }

  public getHistorialCompras(): Producto[] {
    return this.historialCompras;
  }

  // Setters
  public setId(newId: number): void {
    this.id = newId;
  }

  public setNombre(newNombre: string): void {
    this.nombre = newNombre;
  }

  public setEmail(newEmail: string): void {
    this.email = newEmail;
  }

  public setRol(newRol: "cliente" | "empleado"): void {
    this.rol = newRol;
  }

  // Método para agregar productos al historial de compras
  public agregarCompra(...productos: Producto[]): void {
    this.historialCompras.push(...productos);
    console.log(
      ` Se agregaron ${productos.length} productos al historial de ${this.nombre}.`
    );
  }

  // Método para agregar facturas al historial del usuario
  public agregarFactura(factura: Factura): void {
    this.facturas.push(factura);
    console.log(
      ` Factura ID ${factura.getId()} guardada en el historial de ${
        this.nombre
      }.`
    );
  }

  // Método para mostrar el historial de compras
  public mostrarHistorialCompras(): void {
    if (this.historialCompras.length === 0) {
      console.log(` ${this.nombre} no tiene compras en su historial.`);
      return;
    }

    console.log(`\n Historial de compras de ${this.nombre}:`);
    this.historialCompras.forEach((producto) => producto.mostrarInformacion());
  }

  // Método para mostrar el historial de facturas
  public mostrarHistorialFacturas(): void {
    if (this.facturas.length === 0) {
      console.log(` ${this.nombre} no tiene facturas en su historial.`);
      return;
    }

    console.log(`\n Historial de facturas de ${this.nombre}:`);
    this.facturas.forEach((factura) => console.log(factura.generarFactura()));
  }

  // Método para mostrar información del usuario
  public mostrarInfoUsuario(): void {
    console.log(
      `ID: ${this.id} |
      Nombre: ${this.nombre} |
      Email: ${this.email} |
      Rol: ${this.rol}`
    );
  }
}
