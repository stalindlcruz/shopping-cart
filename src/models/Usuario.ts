import { Producto } from "./Producto";

export class Usuario {
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

  public setRol(newRol: string): void {
    this.email = newRol;
  }

  // Metodo para agregar productos al historial de compras
  public agregarCompra(producto: Producto): void {
    this.historialCompras.push(producto);
    console.log(`${this.nombre} compro: ${producto.getNombre()}`);
  }

  // Metodo para mostrar el historial de compras del usuario
  public mostrarHistorialCompras(): void {
    if (this.historialCompras.length === 0) {
      console.log(`${this.nombre} No ha realizado compras.`);
      return;
    }
    console.log(`Historial de compras de ${this.nombre}`);
    this.historialCompras.forEach((producto) => producto.mostrarInformacion());
  }

  // Metodo para mostrar informacion del usuario
  public mostrarInfoUsuario(): void {
    console.log(
      `ID: ${this.id} |
      Nombre: ${this.nombre} |
      Email: ${this.email} |
      Rol: $${this.rol} |
      Historial de Compras: ${this.historialCompras}`
    );
  }
}
