// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

// const EXAMPLE_CONSTANT = 0; // TODO: Reemplazar con tus constantes

const PRICE_SHIRT = 25000;
const MAX_SHIRTS = 75;
const PRICE_PANTS = 40000;
const MAX_PANTS = 60;
const PRICE_JACKET = 100000;
const MAX_JACKETS = 50;
// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

// Ejemplo con dominio Planetario (NO copiar):
// const ticketPrice = 12_000;
// const attendees = 38;
// const totalRevenue = ticketPrice * attendees;
// console.log("Ingresos función:", totalRevenue);
// const remainingSeats = 45 - attendees;
// console.log("Asientos disponibles:", remainingSeats);



const shirtsSold = 30;
const pantsSold = 20;
const jacketsSold = 10;

// ingresos
const totalShirtRevenue = PRICE_SHIRT * shirtsSold;
console.log("Ingresos por camisas:", totalShirtRevenue);

const totalPantsRevenue = PRICE_PANTS * pantsSold;
console.log("Ingresos por pantalones:", totalPantsRevenue);

const totalJacketsRevenue = PRICE_JACKET * jacketsSold;
console.log("Ingresos por chaquetas:", totalJacketsRevenue);


 // ingreso total
const totalRevenue = totalShirtRevenue + totalPantsRevenue + totalJacketsRevenue;
console.log("Ingresos totales:", totalRevenue);

// inventario restante
const totalSold = shirtsSold + pantsSold + jacketsSold;

const totalCapacity = MAX_SHIRTS + MAX_PANTS + MAX_JACKETS;
const remainingStock = totalCapacity - totalSold;

console.log("Inventario restante:", remainingStock);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");


// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

// Ejemplo (NO copiar):
// let runningTotal = 0;
// runningTotal += 25_000;
// console.log("Tras primer item:", runningTotal);
// runningTotal += 18_000;
// console.log("Tras segundo item:", runningTotal);
// runningTotal *= 0.90; // descuento del 10%
// console.log("Con descuento:", runningTotal);


let dailySales = 0;

dailySales += totalShirtRevenue;
console.log("Ventas después de camisas:", dailySales);

dailySales += totalPantsRevenue;
console.log("Ventas después de pantalones:", dailySales);

dailySales += totalJacketsRevenue;
console.log("Ventas después de chaquetas:", dailySales);

dailySales *= 0.90; 
console.log("Ventas con descuento:", dailySales);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Ejemplo (NO copiar):
// const daysLate = 5;
// const isOnTime = daysLate === 0;
// console.log("¿Entregado a tiempo?", isOnTime);
// const hasFine = daysLate > 0;
// console.log("¿Tiene multa?", hasFine);

const expectedRevenue = 1000000;

const goalReached = totalRevenue === expectedRevenue;
console.log("¿se alcanzo la meta exacta de ventas?", goalReached);

const isHighSale = totalRevenue > 80000;
console.log("¿Ventas altas?", isHighSale);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

// Ejemplo (NO copiar):
// const isMember = true;
// const purchaseAmount = 150_000;
// const qualifiesForDiscount = isMember && purchaseAmount >= 100_000;
// console.log("¿Descuento aplicable?", qualifiesForDiscount);

const isMember = true;
const purchaseAmount = totalRevenue;

const qualifiesForDiscount = isMember && purchaseAmount >= 80000;
console.log("¿Descuento aplicable?", qualifiesForDiscount);

const freeShipping = purchaseAmount >= 100000 || isMember;
console.log("¿Tiene envío gratis?", freeShipping);

const noStock = !(remainingStock > 0);
console.log("¿no hay inventario?", noStock);


console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores

console.log("Total prendas vendidas:", totalSold);
console.log("Ingreso total del día:", totalRevenue);
console.log("Inventario restante:", remainingStock);
console.log("Venta con descuento aplicado:", dailySales);

console.log("");
