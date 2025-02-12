import { Producto } from "./models/Producto";

const producto1 = new Producto("Laptop", "Laptop de ultima generacion", 1200, 10);
const producto2 = new Producto("Mouse Gamer", "Mouse Gamer RGB", 120, 50);
const producto3 = new Producto("Teclado", "Teclado Gamer Keychron", 190, 30);

producto1.mostrarInformacion();
producto2.mostrarInformacion();
producto3.mostrarInformacion();