class Penjumlahan {
    static JumlahTigaAngka(...angka) {
        if (angka.every(num => typeof num === 'number')) {
            return angka.reduce((a, b) => a + b, 0);
        }
        throw new Error('Input harus berupa angka');
    }
}

console.log(`Hasil Penjumlahan: ${Penjumlahan.JumlahTigaAngka(12, 40, 27)}`);

// Soal selanjutnya dari TP

class SimpleDataBase {
    constructor() {
        this.data = [];
    }

    AddNewData(value) {
        this.data.push({ value, time: new Date() });
    }

    PrintAllData() {
        this.data.forEach((entry, i) => {
            let date = entry.time;
            let formattedTime = date.toUTCString().replace(" GMT", " AM").replace(" UTC", " AM");
            console.log(`Data ${i + 1} berisi: ${entry.value}, yang disimpan pada waktu UTC: ${formattedTime}`);
        });
    }
}

const db = new SimpleDataBase();
db.AddNewData(12);
db.AddNewData(40);
db.AddNewData(27);
db.PrintAllData();