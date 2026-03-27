// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// TODO: Define al menos 5 variables con datos de un elemento de tu dominio.

const elementName = "Camiseta Niño Superhéroe";  
const elementStatus = "active";                 
const elementValue = 25000;                     
const elementType = "camiseta";                 
const elementInfo = {
  detail: "Camiseta cómoda y colorida para niños",
  talla: "M",
  color: "Rojo"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification = "Sin clasificar";

if (elementValue >= 50000) {
  classification = "Producto Premium";
} else if (elementValue >= 20000) {
  classification = "Producto Estándar";
} else {
  classification = "Producto Económico";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel = "Sin tipo";

switch (elementType) {
  case "camiseta":
    typeLabel = "Prenda superior";
    break;
  case "pantalon":
    typeLabel = "Prenda inferior";
    break;
  case "vestido":
    typeLabel = "Vestido";
    break;
  default:
    typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.talla ?? "Talla no especificada";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);

console.log("=".repeat(40));