
function AkarPersamaanKuadrat([a, b, c]) {
    let D = b * b - 4 * a * c;
    if (D < 0) return []; // Akar imajiner tidak ditangani
    let sqrtD = Math.sqrt(D);
    let x1 = (-b + sqrtD) / (2 * a);
    let x2 = (-b - sqrtD) / (2 * a);
    return [x1, x2];
}

function HasilKuadrat([a, b]) {
    let hasil = [];
    hasil[0] = a * a;           // x^2
    hasil[1] = 2 * a * b;       // x
    hasil[2] = b * b;           // konstanta
    return hasil;
}

module.exports = { AkarPersamaanKuadrat, HasilKuadrat };