// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Ropa Infantil
// ============================================

const DOMAIN_NAME = "Inventario de Ropa Infantil";
const VALUE_LABEL = "productos";

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "Camiseta Niño", price: 25000, category: "camiseta", stock: 10, active: true },
  { id: 2, name: "Pantalón Niño", price: 40000, category: "pantalon", stock: 5, active: true },
  { id: 3, name: "Vestido Niña", price: 55000, category: "vestido", stock: 3, active: false },
  { id: 4, name: "Camiseta Niña", price: 22000, category: "camiseta", stock: 8, active: true },
  { id: 5, name: "Pantalón Deportivo", price: 30000, category: "pantalon", stock: 6, active: true }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed?.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removed[0]?.name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} — $${item.price} — stock: ${item.stock}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Agregar nuevo producto
addItem({ id: 6, name: "Chaqueta Niño", price: 70000, category: "chaqueta", stock: 4, active: true });

// Agregar prioritario
addPriorityItem({ id: 0, name: "Producto Destacado", price: 90000, category: "especial", stock: 2, active: true });

// Eliminar del medio
removeByIndex(2);

// Eliminar último
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");

items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar producto
const found = findByName("Camiseta Niño");
console.log("Búsqueda:", found ? formatItem(found) : "No encontrado");

// Activos
const activeItems = getActiveItems();
console.log(`Activos: ${activeItems.length}`);

// Snapshot inmutable
const snapshot = [...items, { id: 99, name: "Extra", price: 10000, category: "extra", stock: 1, active: false }];
console.log("Snapshot creado (sin afectar inventario)");

// ============================================
// Transformaciones
// ============================================

console.log("\n--- Transformación con map ---\n");

// Solo nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// Precios con descuento
const discounted = items.map(item => item.price * 0.9);
console.log("Precios con 10% descuento:", discounted);

// ============================================
// Resumen final
// ============================================

console.log("\n--- Resumen final ---\n");

console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);