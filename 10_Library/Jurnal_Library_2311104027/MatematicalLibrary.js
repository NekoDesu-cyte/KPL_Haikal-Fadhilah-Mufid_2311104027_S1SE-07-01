
function FPB(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

function KPK(a, b) {
    return Math.abs(a * b) / FPB(a, b);
}

function Turunan(persamaan) {
    let result = [];
    let n = persamaan.length;
    for (let i = 0; i < n - 1; i++) {
        let coef = persamaan[i] * (n - i - 1);
        if (coef === 0) continue;
        let pangkat = n - i - 2;
        let term = coef + (pangkat > 0 ? `x${pangkat > 1 ? `^${pangkat}` : ''}` : '');
        result.push(term);
    }
    return result.join(' + ').replace(/\+\s-\s/g, '- ');
}

function Integral(persamaan) {
    let result = [];
    let n = persamaan.length;
    for (let i = 0; i < n; i++) {
        let coef = persamaan[i] / (n - i);
        let pangkat = n - i;
        let term = `${coef === 1 ? '' : coef}${pangkat > 0 ? `x${pangkat > 1 ? `^${pangkat}` : ''}` : ''}`;
        result.push(term);
    }
    result.push('C');
    return result.join(' + ').replace(/\+\s-\s/g, '- ');
}

module.exports = { FPB, KPK, Turunan, Integral };