import { Usuario } from "../models/Usuario";

export class UserManagement {
  private usuarios: Usuario[] = [];

  // Método para agregar un usuario
  public agregarUsuario(usuario: Usuario): void {
    const existe = this.usuarios.some((u) => u.getId() === usuario.getId());
    if (existe) {
      throw new Error(`El usuario con ID ${usuario.getId()} ya existe.`);
    }
    this.usuarios.push(usuario);
    console.log(`Usuario agregado: ${usuario.getNombre()}`);
  }

  // Método para listar usuarios
  public listarUsuarios(): void {
    if (this.usuarios.length === 0) {
      console.log("No hay usuarios registrados.");
      return;
    }
    console.log("\n Lista de usuarios:");
    this.usuarios.forEach((usuario) => {
      console.log(
        `ID: ${usuario.getId()} |
        Nombre: ${usuario.getNombre()} |
        Email: ${usuario.getEmail()} |
        Rol: ${usuario.getRol()}`
      );
    });
  }

  // Método para buscar un usuario por ID
  public buscarUsuarioPorId(id: number): Usuario | undefined {
    return this.usuarios.find((usuario) => usuario.getId() === id);
  }

  // Método para actualizar un usuario
  public actualizarUsuario(usuarioActualizado: Usuario): void {
    const index = this.usuarios.findIndex(
      (u) => u.getId() === usuarioActualizado.getId()
    );

    if (index === -1) {
      throw new Error(
        `No se encontró el usuario con ID ${usuarioActualizado.getId()}.`
      );
    }

    this.usuarios[index] = usuarioActualizado;
    console.log(
      `Usuario actualizado con éxito: ${usuarioActualizado.getNombre()}`
    );
  }

  // Método para eliminar un usuario
  public eliminarUsuarioPorId(id: number): boolean {
    const initialLength = this.usuarios.length;
    this.usuarios = this.usuarios.filter((usuario) => usuario.getId() !== id);

    const eliminado = initialLength !== this.usuarios.length;
    if (eliminado) {
      console.log(`Usuario con ID ${id} eliminado.`);
    } else {
      console.log(`No se encontró el usuario con ID ${id}.`);
    }
    return eliminado;
  }

  // Método para mostrar el historial de compras de un usuario
  public mostrarHistorialUsuario(id: number): void {
    const usuario = this.buscarUsuarioPorId(id);
    if (usuario) {
      usuario.mostrarHistorialCompras();
    } else {
      console.log(`No se encontró el usuario con ID ${id}.`);
    }
  }
}
