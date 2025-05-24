function tentukanTandaBilangan(angka) {
    if (angka === 0) return "Nol";
    return angka > 0 ? "Positif" : "Negatif";
}

function checkSign() {
    const nilaiInput = parseInt(document.getElementById("inputNumber").value);
    const elemenOutput = document.getElementById("output");

    const hasil = tentukanTandaBilangan(nilaiInput);
    elemenOutput.textContent = `Hasil: ${hasil}`;
}
