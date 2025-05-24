const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Siapa nama kamu? ", (nama) => {
    console.log(`Selamat datang, ${nama}.\n`);

    const deretAngka = Array.from({ length: 50 }, (_, i) => i);

    console.log("Menampilkan angka dari 0 sampai 49 dengan tanda khusus:");
    deretAngka.forEach((angka) => {
        let hasil = `${angka}`;
        if (angka % 2 === 0 && angka % 3 === 0) {
            hasil += " @@@";
        } else if (angka % 2 === 0) {
            hasil += " **";
        } else if (angka % 3 === 0) {
            hasil += " %%";
        }
        console.log(hasil);
    });

    function isPrima(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    rl.question("\nMasukkan angka antara 1 hingga 10000: ", (inputAngka) => {
        const angka = parseInt(inputAngka);

        if (isNaN(angka) || angka < 1 || angka > 10000) {
            console.log("Input tidak valid. Harus berupa angka 1 - 10000.");
        } else {
            if (isPrima(angka)) {
                console.log(`Angka ${angka} adalah bilangan prima.`);
            } else {
                console.log(`Angka ${angka} bukan bilangan prima.`);
            }
        }

        rl.close();
    });
});
