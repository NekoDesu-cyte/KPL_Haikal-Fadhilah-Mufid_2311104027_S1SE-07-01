const { AkarPersamaanKuadrat, HasilKuadrat } = require('./AljabarLib');

console.log("=== TEST LIBRARY ALJABAR ===");

let akar = AkarPersamaanKuadrat([1, -3, -10]);
console.log("Akar persamaan x^2 - 3x - 10 =", akar);

let kuadrat = HasilKuadrat([2, -3]);
console.log("Hasil kuadrat dari (2x - 3)^2 =", kuadrat);