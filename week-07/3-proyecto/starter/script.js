// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Ventas de ropa infantil
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Tienda de Ropa Infantil";
const VALUE_LABEL = "precio";
const CURRENCY = "$";

const items = [
  { id: 1, name: "Camiseta Niño Superhéroe", category: "camiseta", value: 25000, active: true },
  { id: 2, name: "Pantalón Niño Jeans", category: "pantalon", value: 40000, active: true },
  { id: 3, name: "Vestido Niña Floral", category: "vestido", value: 55000, active: false },
  { id: 4, name: "Camiseta Niña Unicornio", category: "camiseta", value: 22000, active: true },
  { id: 5, name: "Pantalón Deportivo Niño", category: "pantalon", value: 30000, active: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (item) => {
  return `👕 ${item.name} [${item.category}] — ${CURRENCY}${item.value}`;
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Ej: aplicar un factor (como cantidad o multiplicador)
const calculateValue = (baseValue, factor = 1) => {
  return baseValue * factor;
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Producto válido = disponible
const isValid = (item) => {
  return item.active === true;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = CURRENCY) => {
  return `${label}: ${currency} ${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("No hay elementos.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;
  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;
  for (const item of items) {
    if (isValid(item)) {
      validCount++;
    }
  }
  console.log(`\n✅ Elementos válidos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;
  for (const item of items) {
    totalValue += calculateValue(item.value ?? 0);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);