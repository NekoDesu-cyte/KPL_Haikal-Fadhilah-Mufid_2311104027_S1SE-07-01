class KodeBuah {
    constructor() {
        this.listKodeBuah = {
            "Apel": "A00",
            "Aprikot": "B00",
            "Alpukat": "C00",
            "Pisang": "D00",
            "Paprika": "E00",
            "Kurma": "K00",
            "Durian": "L00",
            "Anggur": "M00",
            "Melon": "N00",
            "Semangka": "O00"
        };
    }
    
    getKodeBuah(namaBuah) {
        return this.listKodeBuah[namaBuah] || "Kode dari buah tidak ditemukan";
    }
}

// kode main

const kodeBuah = new KodeBuah();

const daftarBuah = ["Apel", "Durian", "Nangka", "Kuldi", "Kurma"];
daftarBuah.forEach(buah => {
    console.log(`${buah}: ${kodeBuah.getKodeBuah(buah)}`);
});
 