import { Producto } from "./Producto";
import { Usuario } from "./Usuario";

export class Factura {
  private static contadorId: number = 1;
  private id: number;
  private fecha: Date;

  constructor(
    private usuario: Usuario,
    private productos: Producto[],
    private total: number
  ) {
    this.id = Factura.generarNuevoId();
    this.fecha = new Date();
  }

  // Método estático para generar un nuevo ID
  private static generarNuevoId(): number {
    return this.contadorId++;
  }

  // Método para obtener el ID de la factura
  public getId(): number {
    return this.id;
  }

  // Método para obtener la fecha en formato string
  public getFecha(): string {
    return this.fecha.toLocaleString();
  }

  // Método que retorna la factura en formato string
  public generarFactura(): string {
    return `
    **Factura Generada**
    ID: ${this.id}
    Fecha: ${this.getFecha()}
    Cliente: ${this.usuario.getNombre()}
    Productos:
    ${this.productos.map((p) => p.mostrarInformacion()).join("\n")}
    Total pagado: $${this.total}
    Gracias por tu compra!`;
  }
}
