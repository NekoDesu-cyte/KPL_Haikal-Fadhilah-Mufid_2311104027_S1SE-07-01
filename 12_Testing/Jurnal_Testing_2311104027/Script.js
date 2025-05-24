function hitungPangkat(bilangan, pangkat) {
    if (pangkat < 0) return -1;
    if (pangkat === 0) return 1;
    if (pangkat > 10 || bilangan > 100) return -2;

    let hasil = 1;
    try {
        for (let i = 1; i <= pangkat; i++) {
            hasil *= bilangan;
            if (hasil > Number.MAX_SAFE_INTEGER) {
                return -3;
            }
        }
    } catch (err) {
        return -3;
    }

    return hasil;
}

function prosesPangkat() {
    const nilaiA = parseInt(document.getElementById("inputA").value);
    const nilaiB = parseInt(document.getElementById("inputB").value);
    const elemenHasil = document.getElementById("output");

    const hasilPerhitungan = hitungPangkat(nilaiA, nilaiB);
    elemenHasil.textContent = `Hasil Perhitungan: ${hasilPerhitungan}`;
}
