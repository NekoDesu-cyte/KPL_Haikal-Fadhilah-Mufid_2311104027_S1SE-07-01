const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function periksaHuruf(input) {
    const hurufVokal = ['A', 'I', 'U', 'E', 'O'];
    const hurufBesar = input.toUpperCase();

    if (hurufBesar.length === 1 && /^[A-Z]$/.test(hurufBesar)) {
        if (hurufVokal.includes(hurufBesar)) {
            console.log(`'${hurufBesar}' adalah huruf vokal.`);
        } else {
            console.log(`'${hurufBesar}' adalah huruf konsonan.`);
        }
    } else {
        console.log("Input harus berupa satu huruf alfabet (A-Z).");
    }
}

function tampilkanGenap() {
    let bilGenap = 2;
    for (let urutan = 1; urutan <= 5; urutan++) {
        console.log(`Genap ke-${urutan}: ${bilGenap}`);
        bilGenap += 2;
    }
}

rl.question("Masukkan satu huruf: ", (inputHuruf) => {
    periksaHuruf(inputHuruf);

    console.log("\nMenampilkan 5 bilangan genap pertama:");
    tampilkanGenap();

    rl.close();
});
