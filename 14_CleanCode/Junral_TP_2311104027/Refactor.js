// Kelas Calculator digunakan untuk melakukan operasi penjumlahan
class Calculator {
    // A.ii - Method dengan camelCase, lebih deskriptif
    static sumThreeNumbers(...numbers) {
        // Validasi bahwa semua parameter adalah angka
        if (!numbers.every(num => typeof num === 'number')) {
            throw new Error('Semua input harus berupa angka.');
        }

        // Mengembalikan hasil penjumlahan seluruh angka
        return numbers.reduce((total, num) => total + num, 0);
    }
}

// Menampilkan hasil penjumlahan tiga angka
console.log(`Hasil Penjumlahan: ${Calculator.sumThreeNumbers(12, 40, 27)}`);

// Kelas SimpleDatabase digunakan untuk menyimpan data beserta waktu pencatatannya
class SimpleDatabase {
    // A.i - Property menggunakan camelCase
    constructor() {
        this.entries = []; // C - Deklarasi attribute
    }

    // Menambahkan data baru ke dalam database
    add(value) {
        this.entries.push({
            value,
            timestamp: new Date()
        });
    }

    // Menampilkan seluruh data yang telah disimpan
    printAll() {
        this.entries.forEach((entry, index) => {
            const formattedTime = entry.timestamp
                .toUTCString()
                .replace(" GMT", " AM")
                .replace(" UTC", " AM");

            console.log(
                `Data ${index + 1}: ${entry.value}, disimpan pada: ${formattedTime}`
            );
        });
    }
}

// Inisialisasi dan penggunaan SimpleDatabase
const db = new SimpleDatabase();
db.add(12);
db.add(40);
db.add(27);
db.printAll();
